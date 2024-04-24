import "index.css";

import {
  LeetcodeBadges,
  LeetcodeContestRatingGraph,
  LeetcodeSolvedProblemsStats,
  LeetcodeSubmissionsHeatmap,
  LeetcodeTopRatingHistogram,
} from "@leetcode/components";
import { useRef, useState } from "react";

export const Example = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [username, setUsername] = useState("neal_wu");

  const handleClick = () => {
    setUsername(ref?.current?.value || "abhinandan_mishra_1");
  };
  return (
    <div className="flex flex-col min-h-screen bg-dark-layer-bg">
      <div className="flex flex-col md:flex-row gap-4  p-4">
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          <div className="flex gap-2 items-center text-white pl-4 pt-4">
            <p className="text-sm text-dark-label-3">Username: </p>
            <input
              ref={ref}
              defaultValue={username}
              type="text"
              className="text-sm p-2 bg-dark-layer-1 rounded focus:outline-none"
              placeholder="username"
            />
            <button
              className="p-2 bg-dark-blue-s rounded text-sm"
              onClick={handleClick}
            >
              See Profile
            </button>
          </div>
          <div className="min-h-[200px] max-h-[300px]">
            <LeetcodeContestRatingGraph username={username} />
          </div>

          <div className="min-h-[200px] max-h-[300px]">
            <LeetcodeTopRatingHistogram username={username} />
          </div>
        </div>
        <div className="relative w-full p-2 flex flex-col gap-2">
          <LeetcodeSolvedProblemsStats username={username} />
          <LeetcodeSubmissionsHeatmap username={username} />
          <LeetcodeBadges username={username} />
        </div>
      </div>
    </div>
  );
};
