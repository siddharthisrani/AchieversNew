import { toast } from "react-hot-toast";

export const notify = {
  success: (message: string, id?: string) =>
    toast.success(message, id ? { id } : undefined),

  error: (message: string, id?: string) =>
    toast.error(message, id ? { id } : undefined),

  loading: (message: string) => toast.loading(message),
};