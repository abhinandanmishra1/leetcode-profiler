import { format } from "date-fns";

export const formatDateToFullDate = (date: number) => {
  return format(new Date(date), "MMM dd, yyyy");
};


export const getMonthName = (month: number) => {
  return format(new Date(1, month), "MMM");
};

export const getDateFromIsoFormat = (date: string) => {
  return format(new Date(date), "MMM dd, yyyy");
}
