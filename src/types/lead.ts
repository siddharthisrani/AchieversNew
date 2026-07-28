export interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
  inquiryType: string;
  source: string;
}

export interface LeadResponse {
  success: boolean;
  message: string;
  data?: unknown;
}