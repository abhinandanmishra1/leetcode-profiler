import { Badge, BadgeCategoryEnum } from "@leetcode/types";

import { CrossIcon } from "@leetcode/assets";
import { LcBadge } from "./Badge";

interface AllBadgesModalProps {
    data: Badge[]
    showModal: boolean
    toggleModal: () => void
}
export const AllBadgesModal = ({data, showModal, toggleModal}: AllBadgesModalProps) => {
  return (
    <div >
      <div
        aria-modal="true"
        role="dialog"
        className="z-modal fixed inset-0 overflow-y-auto"
        hidden={!showModal}
      >
        <div className="flex min-h-screen items-center justify-center px-4">
          <div className="opacity-100" onClick={toggleModal}>
            <div
              aria-hidden="true"
              className="bg-gray-8 fixed inset-0 opacity-60"
            ></div>
          </div>
          <div className="my-8 inline-block min-w-full transform overflow-hidden rounded-[13px] text-left transition-all bg-dark-overlay-3 md:min-w-[420px] shadow-dark-level4 w-[100%] max-w-[600px] p-5 opacity-100 scale-100">
            <div className="flex items-center justify-between border-b-1 border-dark-divider-border-2">
              <h3 className="text-lg font-medium">Badge List</h3>
              <button className="cursor-pointer rounded transition-all hover:bg-dark-fill-3">
                <CrossIcon onClick={toggleModal} />
              </button>
            </div>
            <div className="max-h-[600px] overflow-y-auto">
              <div className="mt-[24px]">
                <div className="text-label-2 dark:text-dark-label-2">
                  Study Plan Medals
                </div>
                <div className="w-full px-2">
                  <div className="grid grid-cols-4 gap-x-[50px]">
                    <div className="mt-6">
                      {
                        data.filter((badge) => badge.category === BadgeCategoryEnum.COMPETITION).map((badge) => (
                          <LcBadge badge={badge} />
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
