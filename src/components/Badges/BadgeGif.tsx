import { CrossIcon } from "@leetcode/assets";

interface BadgeGifProps {
    onClose: () => void;
    backgroundUrl: string;
    gifUrl: string;
}
export const BadgeGif = ({ onClose, backgroundUrl, gifUrl }: BadgeGifProps) => {
  return (
    <div
      className="z-modal-5 fixed bottom-0 left-0 right-0 top-0"
      style={{ background: "rgba(0, 0, 0, 0.5)" }}
      onClick={onClose}
    >
      <CrossIcon  className="absolute right-2 top-2 text-white cursor-pointer" />
      <div className="flex h-full w-full items-center justify-center">
        <div className="relative flex h-[160px] w-[160px] items-center justify-center">
          <img
            src={backgroundUrl}
            alt="badge background"
            className="absolute left-0 right-0 h-[160px] w-[160px]"
          />
          <img
            src={gifUrl}
            alt="badge gif"
            className="z-modal-6 h-[120px] w-[120px]"
          />
        </div>
      </div>
    </div>
  );
};
