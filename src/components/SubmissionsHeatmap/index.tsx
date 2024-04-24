import "react-tooltip/dist/react-tooltip.css";

import { DefaultActiveYearOption } from "@leetcode/constants";
import { HeatmapLoading } from "@leetcode/blocks/Loading/HeatmapLoading";
import { Option } from "@leetcode/types";
import { Show } from "@leetcode/blocks";
import { SubmissionsHeatmap } from "./SubmissionsHeatmap";
import { useState } from "react";
import { useSubmissionsCalendar } from "@leetcode/hooks";

interface LeetcodeSubmissionsHeatmap {
  username: string;
}

export const LeetcodeSubmissionsHeatmap = ({
  username,
}: LeetcodeSubmissionsHeatmap) => {
  const [selectedYear, setSelectedYear] = useState<Option>(
    DefaultActiveYearOption
  );
  const { data, isLoading, isError } = useSubmissionsCalendar(
    username,
    selectedYear.value
  );

  if (isError) return <>Error</>;

  return (
    <div className="w-full bg-dark-layer-1 p-4 shadow-dark-down-01 rounded-lg">
      <Show when={!isLoading && !isError && !!data}>
        <SubmissionsHeatmap
          data={data}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
      </Show>
      <Show when={isLoading}>
        <HeatmapLoading />
      </Show>
    </div>
  );
};
