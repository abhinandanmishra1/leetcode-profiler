import { Badge } from "@leetcode/types";
import { BadgeGif } from "./BadgeGif";
import React from "react";
import { Show } from "@leetcode/blocks";
import { Tooltip } from "react-tooltip";
import { createPortal } from "react-dom";

interface BadgeProps {
  badge: Badge;
  className?: string;
  showFooter?: boolean;
}
export const LcBadge = ({
  badge: {
    name,
    displayName,
    medal: {
      config: { iconGif, iconGifBackground },
    },
    icon,
    hoverText,
    creationDate,
  },
  className,
  showFooter,
}: BadgeProps) => {
  const imgUrl = icon.startsWith("https://")
    ? icon
    : `https://leetcode.com${icon}`;
  const [gifVisible, setGifVisible] = React.useState(false);
  const toggleGifVisibility = () => setGifVisible((isVisible) => !isVisible);
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        data-tooltip-id="badge-tooltip"
        data-tooltip-content={hoverText}
        src={imgUrl}
        alt={name}
        className={`h-auto min-w-[30px] max-w-[80px] cursor-pointer ${
          className || ""
        }`}
        onClick={toggleGifVisibility}
      />
      <Show when={!!showFooter}>
        <div className="h-[40px] space-y-1">
          <p className="text-sm mt-2 max-w-[96px] overflow-hidden truncate text-center cursor-pointer text-dark-label-1">
            {displayName}
          </p>
          <p className="text-xs text-center text-dark-label-3 font-medium">
            {creationDate}
          </p>
        </div>
      </Show>
      <Show when={gifVisible}>
        {createPortal(
          <BadgeGif
            onClose={toggleGifVisibility}
            backgroundUrl={iconGifBackground}
            gifUrl={iconGif}
          />,
          document.body
        )}
      </Show>
      <Tooltip
        id="badge-tooltip"
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
  );
};
