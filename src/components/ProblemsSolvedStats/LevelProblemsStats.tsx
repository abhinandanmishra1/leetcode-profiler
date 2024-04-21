import { ProgressBar } from "@leetcode/blocks";
interface LevelProblemsStatsProps {
  level: "Easy" | "Medium" | "Hard";
  problemsSolved: number;
  totalProblems: number;
  beats: number;
}
export const LevelProblemsStats = ({
  level,
  problemsSolved,
  totalProblems,
  beats,
}: LevelProblemsStatsProps) => {
  const completedPercentage = Math.round(
    (problemsSolved / totalProblems) * 100
  );

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-start justify-between">
        <div className="flex gap-4 items-end">
          <p className="text-xs text-dark-label-3 font-medium">{level}</p>
          <p className="text-base leading-[22px] text-dark-label-1">
            {problemsSolved}
            <span className="text-xs text-dark-label-3">/{totalProblems}</span>
          </p>
        </div>
        <p className="text-xs leading-[22px] text-dark-label-3">
          Beats <span className="text-dark-label-2">{beats.toFixed(1)}%</span>
        </p>
      </div>
      <ProgressBar width={completedPercentage} level={level} />
    </div>
  );
};
