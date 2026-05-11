import type { LeadPayload } from "@/app/lib/lead-form";

const loginApiUrl = "https://api.leads.britinstitute.uk/api/auth/login";
const leadsApiUrl = "https://api.leads.britinstitute.uk/api/leads";

type LoginResponse = {
  success?: boolean;
  data?: {
    token?: string;
  };
  message?: string;
};

async function loginAndGetToken() {
  const response = await fetch(loginApiUrl, {
    body: JSON.stringify({
      email: "system@leadmanager.com",
      password: "system123456",
    }),
    cache: "no-store",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  let payload: LoginResponse | null = null;

  try {
    payload = (await response.json()) as LoginResponse;
  } catch {
    payload = null;
  }

  const token = payload?.success && payload.data?.token ? payload.data.token : null;

  if (!response.ok || !token) {
    throw new Error(payload?.message || "Lead manager login failed");
  }

  return token;
}

function isLeadPayload(payload: unknown): payload is LeadPayload {
  if (!payload || typeof payload !== "object") {
    return false;
  }

  const lead = payload as Partial<LeadPayload>;

  return (
    typeof lead.email === "string" &&
    typeof lead.folder === "string" &&
    typeof lead.name === "string" &&
    typeof lead.notes === "string" &&
    typeof lead.phone === "string" &&
    typeof lead.position === "string" &&
    lead.priority === "Medium" &&
    lead.source === "Manual" &&
    lead.folder.length > 0 &&
    typeof lead.source === "string" &&
    lead.email.length > 0 &&
    lead.name.length > 0 &&
    lead.phone.length > 0 &&
    lead.position.length > 0 &&
    lead.source.length > 0
  );
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ message: "Invalid lead payload" }, { status: 400 });
  }

  if (!isLeadPayload(payload)) {
    return Response.json({ message: "Invalid lead payload" }, { status: 400 });
  }

  let token: string;

  try {
    token = await loginAndGetToken();
  } catch (error) {
    return Response.json(
      {
        message:
          error instanceof Error && error.message
            ? error.message
            : "Unable to authenticate lead submission",
      },
      { status: 502 },
    );
  }

  const response = await fetch(leadsApiUrl, {
    body: JSON.stringify(payload),
    cache: "no-store",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  let responseMessage = "Lead submitted successfully";

  try {
    const result = (await response.json()) as { message?: string };
    if (typeof result.message === "string" && result.message.trim()) {
      responseMessage = result.message;
    }
  } catch {
    // Some upstream responses may not be JSON.
  }

  if (!response.ok) {
    return Response.json(
      { message: responseMessage || "Lead submission failed" },
      { status: response.status },
    );
  }

  return Response.json({ ok: true, message: responseMessage });
}
