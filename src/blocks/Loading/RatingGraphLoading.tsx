export const RatingGraphLoading = () => {
  return (
    <div className="w-full flex flex-col gap-6 rounded shadow animate-pulse border-[#ffffff14]">
        <div className="flex justify-between w-full">
            <div className='flex flex-col gap-2'>
                <div className='w-16 h-4 rounded-full bg-[#ffffff14]'></div>
                <div className='w-16 h-4 rounded-full bg-[#ffffff14]'></div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='w-16 h-4 rounded-full bg-[#ffffff14]'></div>
                <div className='w-16 h-4 rounded-full bg-[#ffffff14]'></div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='w-16 h-4 rounded-full bg-[#ffffff14]'></div>
                <div className='w-16 h-4 rounded-full bg-[#ffffff14]'></div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='w-16 h-4 rounded-full bg-[#ffffff14]'></div>
                <div className='w-16 h-4 rounded-full bg-[#ffffff14]'></div>
            </div>
        </div>
        <div className='w-full h-40 bg-[#ffffff14] rounded'></div>
    </div>
  )
}
