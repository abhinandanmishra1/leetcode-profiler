import { Badge } from "@leetcode/types";
import { CrossIcon } from "@leetcode/assets";
import { LcBadge } from "./Badge";

interface AllBadgesModalProps {
  data: Badge[]
  showModal: boolean
  toggleModal: () => void
}

interface AllBadgesModalProps {
  data: Badge[]
  showModal: boolean
  toggleModal: () => void
}

interface CategoryBadgesCollectionProps {
  data: Badge[]
  category: string
}

const CategoryBadgesCollection = ({ data, category }: CategoryBadgesCollectionProps) => {
  const formattedCategoryName = category.split("_").map(c => c.charAt(0) + c.slice(1).toLowerCase()).join(" ");
  return <div className="mt-[24px]">
    <div className="text-xs text-dark-label-2">
      {formattedCategoryName} Medals
    </div>
    <div className="w-full px-2">
      <div className="grid grid-cols-4 gap-x-[50px]">
        {
          data.map((badge) => (
            <LcBadge badge={badge} className="w-[56px] h-[56px] mt-6"  showFooter={true}/>
          ))
        }
      </div>
    </div>
  </div>
}

export const AllBadgesModal = ({ data, showModal, toggleModal }: AllBadgesModalProps) => {
  const categoryWiseBadges = data.reduce((acc, curr) => {
    if (!acc[curr.category]) acc[curr.category] = [];

    acc[curr.category].push(curr);

    return acc;
  }, {} as Record<string, Badge[]>);
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
              <h3 className="text-lg font-medium text-dark-label-1">Badge List</h3>
              <button className="cursor-pointer rounded transition-all hover:bg-dark-fill-3">
                <CrossIcon onClick={toggleModal} className="text-dark-label-1" />
              </button>
            </div>
            <div className="max-h-[600px] overflow-y-auto">
              {
                Object.entries(categoryWiseBadges).map(({ 0: categoryType, 1: categoryData }) => {
                  return <CategoryBadgesCollection data={categoryData} category={categoryType} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
