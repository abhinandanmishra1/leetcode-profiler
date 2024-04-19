export type ProblemDifficulty = "Easy" | "Medium" | "Hard";

export type ProblemStatDifficulty = "All" | ProblemDifficulty;
export interface ProblemStats {
    difficulty: ProblemStatDifficulty;
    solvedCount: number;
    totalCount: number;
    percentage: number;
}

export type ProblemStatsResponse = Record<ProblemStatDifficulty, ProblemStats>;