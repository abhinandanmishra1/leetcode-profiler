import { ContestRatingGraph } from "../ContestRatingGraph";

export const Main = () => {
  return (
    <div className="bg-dark-layer-bg min-h-screen p-4">
      <div className="w-full md:w-2/3 lg:w-1/3 min-w-[200px] min-h-[200px] max-h-[300px]">
        <ContestRatingGraph username="abhinandan_mishra_1" />
      </div>
    </div>
  );
};
