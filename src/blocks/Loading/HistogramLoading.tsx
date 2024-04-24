export const HistogramLoading = () => {
  return (
    <div
      className="max-w-sm p-4 rounded shadow animate-pulse md:p-6 border-[#ffffff14] h-80"
    >
      <div className="h-2.5 rounded-full bg-[#ffffff14] w-32 mb-2.5"></div>
      <div className="w-48 h-2 mb-10 rounded-full bg-[#ffffff14]"></div>
      <div className="flex items-baseline">
        <div className="w-full h-32 bg-[#ffffff14]"></div>
        <div className="w-full h-40 ms-4 bg-[#ffffff14]"></div>
        <div className="w-full h-32 ms-4 bg-[#ffffff14]"></div>
        <div className="w-full h-44 ms-4 bg-[#ffffff14]"></div>
        <div className="w-full h-40 ms-4 bg-[#ffffff14]"></div>
        <div className="w-full h-32 ms-4 bg-[#ffffff14]"></div>
        <div className="w-full h-40 ms-4 bg-[#ffffff14]"></div>
      </div>
    </div>
  );
};
