interface ProgressBarProps {
  width: number;
  level: "Easy" | "Medium" | "Hard";
}

export const ProgressBar = ({ width, level }: ProgressBarProps) => {
  const styles = {
    Easy: {
      track: "bg-dark-green-1",
      indicator: "bg-dark-olive",
    },
    Medium: {
      track: "bg-dark-yellow-1",
      indicator: "bg-dark-yellow",
    },
    Hard: {
      track: "bg-dark-red-1",
      indicator: "bg-dark-red-s",
    },
  };

  return (
    <div className="relative h-2 w-full overflow-hidden rounded-full h-1 max-w-none">
      <div className={`absolute h-full w-full bg-dark-green-1 ${styles[level].track}`}></div>
      <div
        className={`absolute h-full rounded-full transition-all duration-300 ease-out bg-dark-olive ${styles[level].indicator}`}
        style={{
          width: `${width}%`,
        }}
      ></div>
    </div>
  );
};
