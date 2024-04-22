import { Badge } from "./Badges";

export type HeatmapBadge = Pick<Badge, "name" | "icon">;
export interface DccBadge {
  timestamp: number;
  badge: HeatmapBadge;
}

export interface SubmissionCalendar {
  [timestamp: string]: number;
}

export interface UserCalendar {
  activeYears: number[];
  streak: number;
  totalActiveDays: number;
  dccBadges: DccBadge[];
  submissionCalendar: string;
}

export type SubmissionCalendarResponse = {
  userCalendar: UserCalendar;
};

export interface Activity {
  date: string; // ISO format "yyyy-MM-dd"
  count: number; // count of the activties
  level: number; // 4 is max level of intensity, 0 is minimum
  key: number;
  month: number;
  year: number;
  day: number;
  monthname: string;
}
