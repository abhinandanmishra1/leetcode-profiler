export const BadgesLoading = () => {
  return (
    <div className="w-full flex flex-col gap-6 rounded shadow animate-pulse border-gray-700">
      <div className="flex justify-between">
        <div className="h-3.5 rounded-full bg-gray-700 w-32"></div>
        <div className="h-3.5 rounded-full bg-gray-700 w-12"></div>
      </div>

      <div className="flex justify-center w-full gap-4">
        <div className="w-[60px] h-[35px] pentagon rounded bg-gray-700 after:border-t-gray-700 after:border-l-transparent after:border-r-transparent after:border-l-[30px] after:border-r-[30px]"></div>
        <div className="w-[70px] h-[40px] pentagon rounded bg-gray-700 after:border-t-gray-700 after:border-l-transparent after:border-r-transparent after:border-l-[35px] after:border-r-[35px]"></div>
        <div className="w-[60px] h-[35px] pentagon rounded bg-gray-700 after:border-t-gray-700 after:border-l-transparent after:border-r-transparent after:border-l-[30px] after:border-r-[30px]"></div>
      </div>

      <div className="h-3.5 rounded-full bg-gray-700 w-32"></div>
    </div>
  );
};
