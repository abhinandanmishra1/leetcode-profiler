export interface RatingInfo {
    ratingEnd: number,
    ratingStart: number,
    topPercentage: number,
    userCount: number
}

export interface TopRatingHistogramResponse {
    contestRatingHistogram: RatingInfo[];
}