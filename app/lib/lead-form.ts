export type LeadPayload = {
  agreed: true;
  course: string;
  email: string;
  name: string;
  phone: string;
  purpose: "upskill";
  source: string;
};

const course = "Data Science & Machine Learning Certification Program";
const source = "Brit Institute Webinar landing page";

function getFormValue(formData: FormData, key: string) {
  const value = formData.get(key);

  return typeof value === "string" ? value.trim() : "";
}

export function buildLeadPayload(form: HTMLFormElement): LeadPayload {
  const formData = new FormData(form);
  const phone = getFormValue(formData, "phone");
  const countryCode = getFormValue(formData, "countryCode") || "+44";

  return {
    agreed: true,
    course,
    email: getFormValue(formData, "email"),
    name: getFormValue(formData, "name"),
    phone: phone.startsWith("+") ? phone : `${countryCode} ${phone}`.trim(),
    purpose: "upskill",
    source,
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
    throw new Error("Unable to submit lead");
  }
}
