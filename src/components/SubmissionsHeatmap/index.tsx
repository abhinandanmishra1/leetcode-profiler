import { DccBadge, Show } from "@leetcode/blocks";
import { Dropdown } from "@leetcode/blocks/DropDown";
import {
  useGetActiveYearsOptions,
  useGetSubmissionsCalendarData,
  useSubmissionsCalendar,
  useTimestampToDccBadge,
} from "@leetcode/hooks/useSubmissionsCalendar";
import { getDateFromIsoFormat, getMonthName } from "@leetcode/services";
import { Option } from "@leetcode/types";
import { cloneElement, useState } from "react";
import ActivityCalendar from "react-activity-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

interface SubmissionsHeatmapProps {
  username: string;
}

export const LeetcodeHeatMap = ({ username }: SubmissionsHeatmapProps) => {
  const currentYear = new Date().getFullYear();

  const DefaultOption = { name: "Current", value: currentYear.toString() };

  const [selectedYear, setSelectedYear] = useState<Option>(DefaultOption);
  const { data, isLoading, isError } = useSubmissionsCalendar(
    username,
    selectedYear.value
  );
  const {
    submissionCalendar: subCalendar,
    activeYears,
    dccBadges,
    streak,
    totalActiveDays,
  } = data?.userCalendar || {};

  const activeYearsOptions = useGetActiveYearsOptions(activeYears || []);

  const { submissionCalendarData, submissionsCount } =
    useGetSubmissionsCalendarData(subCalendar || "{}", selectedYear);

  const TimestampToDccBade = useTimestampToDccBadge(dccBadges || []);

  if (isLoading || !data) return <>Loading...</>;
  if (isError) return <>Error</>;

  return (
    <div className="w-full bg-dark-layer-1 p-4 shadow-dark-down-01 rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-dark-label-1 text-xl">{submissionsCount}</span>{" "}
          <span className="text-dark-label-3 text-base">
            submissions in the past one year
          </span>
        </div>
        <div className="flex gap-1 text-xs text-dark-label-3 gap-4 items-center">
          <p>
            Total active days:{" "}
            <span className="text-dark-label-2 text-xs">{totalActiveDays}</span>
          </p>
          <p>
            Max streak:{" "}
            <span className="text-dark-label-2 text-xs ">{streak}</span>
          </p>
          <Dropdown
            options={activeYearsOptions}
            selectedOption={selectedYear}
            onOptionClick={setSelectedYear}
          />
        </div>
      </div>
      <div className="flex overflow-x-auto gap-2 pb-4">
        {Object.values(submissionCalendarData).map((yearActivities) => {
          return Object.entries(yearActivities).map(
            ({ 0: month, 1: monthActivities }) => {
              return (
                <div className="flex flex-col gap-2">
                  <ActivityCalendar
                    data={monthActivities}
                    theme={{
                      dark: [
                        "#ffffff14",
                        "#004d1b",
                        "#008024",
                        "#01b328",
                        "#aff0b4",
                      ],
                    }}
                    colorScheme="dark"
                    blockSize={8}
                    blockMargin={4}
                    hideMonthLabels={false}
                    weekStart={0}
                    renderBlock={(block, activity) =>
                      cloneElement(block, {
                        "data-tooltip-id": "react-tooltip",
                        "data-tooltip-html": `${activity.count} submission${
                          activity.count > 1 ? "s" : ""
                        } on ${getDateFromIsoFormat(activity.date)}`,
                      })
                    }
                  />
                  <Show when={!TimestampToDccBade[Number(month)]}>
                    <div className="text-center text-xs text-[#AFB4BD] mt-2">
                      {getMonthName(Number(month))}
                    </div>
                  </Show>
                  <Show when={!!TimestampToDccBade[Number(month)]}>
                    <DccBadge
                      badge={TimestampToDccBade[Number(month)]}
                      className="mx-auto h-6 w-6"
                    />
                  </Show>
                </div>
              );
            }
          );
        })}
        <ReactTooltip
          id="react-tooltip"
          style={{
            backgroundColor: "rgb(58, 58, 58)",
            zIndex: 40,
            borderRadius: 6,
            padding: "6px 8px",
            fontSize: "12px",
          }}
          className="bg-dark-overlay-3 text-xs"
          noArrow={true}
          delayShow={100}
        />
      </div>
    </div>
  );
};
