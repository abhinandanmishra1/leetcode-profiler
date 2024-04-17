export interface UserContestRanking {
  attendedContestsCount: number;
  rating: number;
  globalRanking: number;
  topPercentage: number;
  totalParticipants: number;
  badge: {
    name: string;
  };
}

export interface ContestRanking {
  attended: boolean;
  contest: {
    title: string;
    startTime: number;
  };
  finishTimeInSeconds: number;
  problemsSolved: number;
  ranking: number;
  rating: number;
  totalProblems: number;
  trendDirection: string;
}

export interface ContestRankingResponse {
  userContestRanking: UserContestRanking;
  userContestRankingHistory: ContestRanking[];
}
