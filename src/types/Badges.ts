interface MedalConfig {
  iconGif: string;
  iconGifBackground: string;
}

interface Medal {
  slug: string;
  config: MedalConfig;
}

export type BadgeCategory  = "COMPETITION" | "DCC" | "STUDY_PLAN";

export interface Badge {
  id: string;
  name: string;
  shortName: string;
  displayName: string;
  icon: string;
  hoverText: string;
  medal: Medal;
  creationDate: string; // 2020-01-01
  category: BadgeCategory;
}

export type BadgesResponse = Badge[]

export enum BadgeCategoryEnum {
  COMPETITION = "COMPETITION",
  DCC = "DCC",
  STUDY_PLAN = "STUDY_PLAN"
}
