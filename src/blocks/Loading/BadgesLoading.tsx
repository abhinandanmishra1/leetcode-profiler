export const BadgesLoading = () => {
  return (
    <div className="flex flex-col gap-6 border-[#ffffff14] shadow rounded w-full animate-pulse">
      <div className="flex justify-between">
        <div className="bg-[#ffffff14] rounded-full w-32 h-3.5"></div>
        <div className="bg-[#ffffff14] rounded-full w-12 h-3.5"></div>
      </div>

      <div className="flex justify-center gap-4 w-full">
        <div className="bg-[#ffffff14] after:border-t-[#ffffff14] before:border-r-transparent before:border-r-[30px] after:border-r-transparent after:border-r-[30px] before:border-b-[#ffffff14] before:border-l-transparent before:border-l-[30px] after:border-l-transparent after:border-l-[30px] w-[60px] h-[35px] hexagon"></div>
        <div className="bg-[#ffffff14] after:border-t-[#ffffff14] after:border-r-transparent after:border-r-[35px] after:border-l-transparent after:border-l-[35px] w-[72px] h-[40px] pentagon"></div>
        <div className="bg-[#ffffff14] after:border-t-[#ffffff14] before:border-r-transparent before:border-r-[30px] after:border-r-transparent after:border-r-[30px] before:border-b-[#ffffff14] before:border-l-transparent before:border-l-[30px] after:border-l-transparent after:border-l-[30px] w-[60px] h-[35px] hexagon"></div>
      </div>

      <div className="bg-[#ffffff14] rounded-full w-32 h-3.5"></div>
    </div>
  );
};
