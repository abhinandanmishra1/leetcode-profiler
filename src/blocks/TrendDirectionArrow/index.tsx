import { TrendUpIcon, TrendDownIcon } from "@leetcode/assets";

interface TrendDirectionArrowProps {
    direction : "UP" | "DOWN" | "NONE";
    className?: string;
}
export const TrendDirectionArrow = ({direction, className}: TrendDirectionArrowProps) => {
  if(direction === "NONE") return null;
  const TrendIcon = direction === "UP" ? TrendUpIcon : TrendDownIcon;

  return (
    <div>
      <TrendIcon className={`${direction === "UP" ? "text-green-500" : "text-red-500"} ${className || ""}`}/>
    </div>
  )
}
