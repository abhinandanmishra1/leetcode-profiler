import { HistogramLoading, Show } from "@leetcode/blocks";

import { RatingHistogram } from "./RatingHistogram";
import { useTopRatingHistogram } from "@leetcode/hooks";

interface LeetcodeTopRatingHistogramProps {
  username: string;
}
export const LeetcodeTopRatingHistogram = ({
  username,
}: LeetcodeTopRatingHistogramProps) => {
  const {
    contestRatingData,
    isLoading,
    isError,
    histogramData,
    topPercentage,
  } = useTopRatingHistogram(username);

  if (isError) return <>Error</>;

  return (
    <div className="w-full h-full bg-dark-layer-1 p-4 shadow-dark-down-01 rounded-lg mt-2">
      <Show
        when={!isError && !isLoading && !!contestRatingData && !!histogramData}
      >
        <Show when={topPercentage > 0}>
          <RatingHistogram
            data={histogramData}
            topPercentage={topPercentage}
            ratingInfoData={contestRatingData || []}
          />
        </Show>
        <Show
          when={
            contestRatingData?.length === 0 || topPercentage === 0 
          }
        >
          <div className=" bg-dark-layer-1 text-dark-label-1 flex items-center h-full justify-center">
            User has not participated in any contest
          </div>
        </Show>
      </Show>
      <Show when={isLoading || !contestRatingData}>
        <HistogramLoading />
      </Show>
    </div>
  );
};
