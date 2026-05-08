import type { LeadPayload } from "@/app/lib/lead-form";

const leadsApiUrl = "https://api.britinstitute.uk/api/leads";

function isLeadPayload(payload: unknown): payload is LeadPayload {
  if (!payload || typeof payload !== "object") {
    return false;
  }

  const lead = payload as Partial<LeadPayload>;

  return (
    lead.agreed === true &&
    lead.purpose === "upskill" &&
    typeof lead.course === "string" &&
    typeof lead.email === "string" &&
    typeof lead.name === "string" &&
    typeof lead.phone === "string" &&
    typeof lead.source === "string" &&
    lead.course.length > 0 &&
    lead.email.length > 0 &&
    lead.name.length > 0 &&
    lead.phone.length > 0 &&
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

  const response = await fetch(leadsApiUrl, {
    body: JSON.stringify(payload),
    cache: "no-store",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    return Response.json(
      { message: "Lead submission failed" },
      { status: response.status },
    );
  }

  return Response.json({ ok: true });
}
