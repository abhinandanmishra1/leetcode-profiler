import "index.css";

import {
  LeetcodeBadges,
  LeetcodeContestRatingGraph,
  LeetcodeSolvedProblemsStats,
  LeetcodeSubmissionsHeatmap,
  LeetcodeTopRatingHistogram,
} from "@leetcode/components";

export const Example = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 bg-dark-layer-bg min-h-screen p-4">
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <div className="min-h-[200px] max-h-[300px]">
          <LeetcodeContestRatingGraph username="abhinandan_mishra_1" />
        </div>

        <div className="min-h-[200px] max-h-[300px]">
          <LeetcodeTopRatingHistogram username="abhinandan_mishra_1" />
        </div>
      </div>
      <div className="relative w-full p-2 flex flex-col gap-2">
        <LeetcodeSolvedProblemsStats username="abhinandan_mishra_1" />
        <LeetcodeSubmissionsHeatmap username="abhinandan_mishra_1" />
        <LeetcodeBadges username="abhinandan_mishra_1" />
      </div>
    </div>
  );
};
