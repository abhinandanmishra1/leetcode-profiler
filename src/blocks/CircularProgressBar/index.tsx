import { useState } from "react";

interface CircularProgressBarProps {
  size?: number;
  solvedProblems: number;
  totalProblems: number;
  trackWidth?: number;
  trackColor?: string;
  indicatorWidth?: number;
  indicatorColor?: string;
  indicatorCap?: "round" | "butt" | "square";
  label?: string;
  labelColor?: string;
  spinnerMode?: boolean;
  spinnerSpeed?: number;
  changeProgressContent?: () => void;
}

export const CircularProgressBar = ({
  size = 80,
  solvedProblems,
  totalProblems,
  trackWidth = 4,
  trackColor = `#ddd`,
  indicatorWidth = 5,
  indicatorColor = `#07c`,
  indicatorCap = `round`,
  label = `Loading...`,
  labelColor = `#333`,
  spinnerMode = false,
}: CircularProgressBarProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const toggleHover = () => setIsHovered(isHovered => !isHovered);
  const progress = (solvedProblems / totalProblems * 100).toFixed(1);
  const center = size / 2,
    radius =
      center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
    dashArray = 2 * Math.PI * radius,
    dashOffset = dashArray * ((100 - Number(progress)) / 100);

  let hideLabel = size < 100 || !label.length || spinnerMode ? true : false;
  const BeforeDecimal = progress.split('.')[0];
  const AfterDecimal = progress.split('.')[1];
  return (
    <>
      <div className="relative" style={{ width: size, height: size }} onMouseOver={toggleHover} onMouseOut={toggleHover}>
        <svg className="-rotate-90" style={{ width: size, height: size }}>
          <circle
            className="svg-pi-track"
            cx={center}
            cy={center}
            fill="transparent"
            r={radius}
            stroke={trackColor}
            strokeWidth={trackWidth}
          />
          <circle
            cx={center}
            cy={center}
            fill="transparent"
            r={radius}
            stroke={indicatorColor}
            strokeWidth={indicatorWidth}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            strokeLinecap={indicatorCap}
          />
        </svg>

        {!hideLabel && (
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
            style={{ color: labelColor }}
          >
            <div className="text-[24px] font-medium text-dark-label-1">{!isHovered? solvedProblems: <span>{BeforeDecimal}<span className="text-xs">.{AfterDecimal}%</span></span>}</div>
            <div className="whitespace-nowrap text-xs text-dark-label-3">{label}</div>
          </div>
        )}
      </div>
    </>
  );
};

