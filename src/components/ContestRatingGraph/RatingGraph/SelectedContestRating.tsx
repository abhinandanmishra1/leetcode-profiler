import { TrendDirectionArrow } from "@leetcode/blocks";
import { formatDateToFullDate } from "@leetcode/services";

interface SelectedContestRatingProps {
  contestRating: number;
  ratingDirection: "UP" | "DOWN" | "NONE";
  contestDate: number;
  contestName: string;
  problemsSolved: number;
  totalProblems: number;
  ranking: number;
}

export const SelectedContestRating = ({
  contestDate,
  contestName,
  contestRating,
  problemsSolved,
  totalProblems,
  ratingDirection,
  ranking,
}: SelectedContestRatingProps) => {
  return (
    <div className="flex gap-4">
      <div>
        <p className="text-xs text-dark-label-3 font-medium">Contest Rating</p>
        <p className="flex items-center gap-1 text-dark-label-1 text-xl md:text-2xl">
          {Math.round(contestRating).toLocaleString("en-US")}
          <TrendDirectionArrow className="text-xl md:text-2xl" direction={ratingDirection} />
        </p>
      </div>
      <div>
        <p className="text-xs text-dark-label-3 font-medium">
          {formatDateToFullDate(contestDate * 1000)}
        </p>
        <p className="text-xs leading-[22px] text-dark-label-1">
          {contestName}
        </p>
      </div>
      <div>
        <p className="text-xs text-dark-label-3 font-medium">Rank</p>
        <p className="text-xs leading-[22px] text-dark-label-1">{ranking}</p>
      </div>
      <div>
        <p className="text-xs text-dark-label-3 font-medium">Solved</p>
        <p className="text-xs leading-[22px] text-dark-label-1">
          {problemsSolved}/{totalProblems}
        </p>
      </div>
    </div>
  );
};
