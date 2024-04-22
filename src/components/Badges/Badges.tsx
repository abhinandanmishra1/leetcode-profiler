import { HorizontalThreeDotsIcon, LeftArrowIcon, RightArrowIcon } from "@leetcode/assets";

import { AllBadgesModal } from "./AllBadgesModal";
import { Badge } from "@leetcode/types";
import { LcBadge } from "./Badge";
import { Show } from "@leetcode/blocks";
import { Tooltip } from "react-tooltip";
import { useState } from "react";

interface BadgesProps {
  data: Badge[];
}
export const Badges = ({ data }: BadgesProps) => {
  const [showModal, setShowModal] = useState(false);
  const [view, setView] = useState<"left" | "right">("left");

  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };

  const toggleView = () => {
    setView((view) => (view === "left" ? "right" : "left"));
  };

  const getUrl = (iconUrl: string) => {
    if (iconUrl.startsWith("https://")) {
      return iconUrl;
    }

    return `https://leetcode.com${iconUrl}`;
  };

  return (
    <div>
      <Show when={view === "left"}>
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <p className="text-xs text-dark-label-3 font-medium">Badges</p>
            <p className="text-base leading-[22px] text-dark-label-1">
              {data.length}
            </p>
          </div>
          <RightArrowIcon
            onClick={toggleView}
            className="cursor-pointer text-xl text-dark-label-3"
          />
        </div>
        <Show when={data.length < 3}>
          <LcBadge badge={data[0]} className="w-[72px] h-[72px]" />
        </Show>
        <Show when={data.length >= 3}>
          <div className="flex items-center justify-center gap-2">
            <LcBadge badge={data[1]} className="w-[56px] h-[56px]" />
            <LcBadge badge={data[0]} className="w-[72px] h-[72px]" />
            <LcBadge badge={data[2]} className="w-[56px] h-[56px]" />
          </div>
        </Show>
        <div className="flex flex-col">
          <p className="text-xs text-dark-label-3 font-medium">
            Most Recent Badge
          </p>
          <p className="text-base leading-[22px] text-dark-label-1">
            {data[0].name}
          </p>
        </div>
      </Show>
      <Show when={view === "right"}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex flex-col">
            <p className="text-xs text-dark-label-3 font-medium">
              History Awards
            </p>
          </div>
          <LeftArrowIcon
            onClick={toggleView}
            className="cursor-pointer text-xl text-dark-label-3"
          />
        </div>
        <Show when={data.length <= 3}>
          {data.map((badge) => (
            <LcBadge
              key={badge.name}
              badge={badge}
              className="w-[56px] h-[56px]"
            />
          ))}
        </Show>
        <Show when={data.length > 3}>
          <div className="flex items-start justify-center gap-6">
            <LcBadge
              badge={data[1]}
              className="w-[56px] h-[56px]"
              showFooter={true}
            />
            <LcBadge
              badge={data[0]}
              className="w-[56px] h-[56px]"
              showFooter={true}
            />
            <LcBadge
              badge={data[2]}
              className="w-[56px] h-[56px]"
              showFooter={true}
            />
            <div className="relative" onClick={toggleModal}>
              <img
                data-tooltip-id="all-badges-tooltip"
                data-tooltip-content="Show more badges"
                src={getUrl(data[3].icon)}
                alt="badge gif"
                className="w-[56px] h-[56px] cursor-pointer opacity-50"
              />
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <HorizontalThreeDotsIcon className="text-xl text-white cursor-pointer" />
              </div>
              <Tooltip
                id="all-badges-tooltip"
                style={{
                  backgroundColor: "rgb(48, 48, 48, 0.4)",
                  color: "#fff",
                  borderRadius: 6,
                  fontSize: 12,
                  border: "1px solid #fff",
                }}
                noArrow={true}
              />
            </div>
          </div>
        </Show>
      </Show>
      <AllBadgesModal
        data={data}
        showModal={showModal}
        toggleModal={toggleModal}
      />
    </div>
  );
};
