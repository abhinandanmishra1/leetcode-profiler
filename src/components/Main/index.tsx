import {
  ContestRatingGraph,
  ProblemsSolvedStats,
  TopRatingHistogram,
} from "@leetcode/components";
import "index.css";
import { LeetcodeHeatMap } from "../SubmissionsHeatmap";

export const Main = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 bg-dark-layer-bg min-h-screen p-4">
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <div className="min-h-[200px] max-h-[300px]">
          <ContestRatingGraph username="abhinandan_mishra_1" />
        </div>

        <div className="min-h-[200px] max-h-[300px]">
          <TopRatingHistogram username="abhinandan_mishra_1" />
        </div>
      </div>
      <div className="relative w-full p-2 flex flex-col gap-2">
        <ProblemsSolvedStats username="abhinandan_mishra_1" />
        <LeetcodeHeatMap username="abhinandan_mishra_1" />
      </div>
    </div>
  );
};
