import { Months, Option } from "@leetcode/types";

export const daysInMonths: Months = {
  0: 31,
  1: 28,
  2: 31,
  3: 30,
  4: 31,
  5: 30,
  6: 31,
  7: 31,
  8: 30,
  9: 31,
  10: 30,
  11: 31,
};

export const DefaultActiveYearOption: Option = {
  name: "Current",
  value: new Date().getFullYear().toString(),
};
