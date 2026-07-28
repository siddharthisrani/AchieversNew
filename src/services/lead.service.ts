import { LeadPayload, LeadResponse } from "@/types/lead";

export async function submitLead(
  payload: LeadPayload
): Promise<LeadResponse> {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data: LeadResponse = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}