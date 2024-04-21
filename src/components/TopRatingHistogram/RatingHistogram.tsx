import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { RatingInfo } from "@leetcode/types";
import { Show } from "@leetcode/blocks";
import { useTopRatingHistogramOptions } from "@leetcode/hooks/useTopRatingHistogramOptions";

interface RatingHistogramProps {
  data: any;
  topPercentage: any;
  ratingInfoData: RatingInfo[];
}
export const RatingHistogram = ({
  data,
  topPercentage,
  ratingInfoData,
}: RatingHistogramProps) => {
  const { options, currentIndex, isHovered } = useTopRatingHistogramOptions({
    data,
  });

  const LeetcodeRatingLimit = 9950;
  const getPercentage = (p: number) => {
    return `${p.toFixed(2)}%`;
  };

  const ratingInfo = ratingInfoData[currentIndex];
  return (
    <div>
      <Show when={!isHovered}>
        <div>
          <div>
            <p className="text-xs text-dark-label-3 font-medium">Top</p>
            <p className="text-dark-label-1 text-2xl">
              {getPercentage(topPercentage)}
            </p>
          </div>
        </div>
      </Show>
      <Show when={isHovered}>
        <div className="flex gap-2 items-start">
          <div>
            <p className="text-xs text-dark-label-3 font-medium">Top</p>
            <p className="text-dark-label-1 text-2xl">
              {getPercentage(ratingInfo.topPercentage)}
            </p>
          </div>
          <div>
            <p className="text-xs text-dark-label-3 font-medium">
              {ratingInfo.ratingStart}
              {ratingInfo.ratingEnd < LeetcodeRatingLimit
                ? ` - ${ratingInfo.ratingEnd}`
                : "+"}
            </p>
            <p className="text-dark-label-1">{ratingInfo.userCount} users</p>
          </div>
        </div>
      </Show>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
