import { format } from "date-fns";

export const formatDateToFullDate = (date: number) => {
  return format(new Date(date), "MMM dd, yyyy");
};
