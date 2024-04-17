interface SelectedContestRatingProps {
  contestRating: number,
  ratingDirection: "UP" | "DOWN" | "NONE",
  contestDate: number,
  contestName: string,
  problemsSolved: number,
  totalProblems: number,
}

export const SelectedContestRating = ({
  contestDate,
  contestName,
  contestRating,
  problemsSolved,
  totalProblems,
  ratingDirection
}: SelectedContestRatingProps) => {
  return (
    <div className='flex gap-4'>
      <div>
        <p>Contest Rating</p>
        <p>{Math.round(contestRating)}</p>
      </div>
      <div>
        {contestDate}
        {contestName}
      </div>
      <div></div>
      <div>{problemsSolved}/{totalProblems}</div>
    </div>
  )
}
