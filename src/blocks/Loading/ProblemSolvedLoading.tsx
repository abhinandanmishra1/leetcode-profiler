export const ProblemSolvedLoading = () => {
  return (
    <div className="w-full flex flex-col rounded shadow animate-pulse border-gray-700">
      <div className="h-3.5 rounded-full bg-gray-700 w-40 mb-2.5"></div>

      <div className="flex gap-6 w-full">
        <div className="w-[100px] h-[100px] rounded-full bg-gray-700 mt-4 mr-2"></div>
        <div className="flex flex-col w-[80%] gap-4">
          <div className="w-full flex flex-col gap-2">
            <div className="w-full h-3.5 flex justify-between">
              <div className="w-32 h-full bg-gray-700 rounded-full"></div>
              <div className="w-32 h-full bg-gray-700 rounded-full"></div>
            </div>
            <div className="w-full h-3 bg-gray-700 rounded-full"></div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="w-full h-3.5 flex justify-between">
              <div className="w-32 h-full bg-gray-700 rounded-full"></div>
              <div className="w-32 h-full bg-gray-700 rounded-full"></div>
            </div>
            <div className="w-full h-3 bg-gray-700 rounded-full"></div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="w-full h-3.5 flex justify-between">
              <div className="w-32 h-full bg-gray-700 rounded-full"></div>
              <div className="w-32 h-full bg-gray-700 rounded-full"></div>
            </div>
            <div className="w-full h-3 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
