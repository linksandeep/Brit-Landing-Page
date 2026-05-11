export type LeadPayload = {
  email: string;
  folder: string;
  name: string;
  notes: string;
  phone: string;
  position: string;
  priority: "Medium";
  source: "Manual";
};

const folder = "Brit Institute Webinar Landing Page";
const defaultPosition = "Webinar Registrant";

function normalizePhone(countryCode: string, phone: string) {
  const cleanCountryCode = countryCode.replace(/\s+/g, "");
  const cleanPhone = phone.replace(/[^\d+]/g, "");

  if (!cleanPhone) {
    return cleanCountryCode;
  }

  if (cleanPhone.startsWith("+")) {
    return cleanPhone;
  }

  return `${cleanCountryCode}${cleanPhone}`;
}

function getFormValue(formData: FormData, key: string) {
  const value = formData.get(key);

  return typeof value === "string" ? value.trim() : "";
}

export function buildLeadPayload(form: HTMLFormElement): LeadPayload {
  const formData = new FormData(form);
  const phone = getFormValue(formData, "phone");
  const countryCode = getFormValue(formData, "countryCode") || "+44";
  const position =
    getFormValue(formData, "position") ||
    getFormValue(formData, "experience") ||
    getFormValue(formData, "career-experience") ||
    defaultPosition;

  return {
    email: getFormValue(formData, "email"),
    folder,
    name: getFormValue(formData, "name"),
    notes: "",
    phone: normalizePhone(countryCode, phone),
    position,
    priority: "Medium",
    source: "Manual",
  };
}

export async function submitLeadForm(form: HTMLFormElement) {
  const response = await fetch("/api/leads", {
    body: JSON.stringify(buildLeadPayload(form)),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    let message = "Unable to submit lead";

    try {
      const errorPayload = (await response.json()) as { message?: string };
      if (typeof errorPayload.message === "string" && errorPayload.message.trim()) {
        message = errorPayload.message;
      }
    } catch {
      // Fall back to the default error message when JSON parsing fails.
    }

    throw new Error(message);
  }
}
