import { useState } from "react";
import { Show } from "../Show";

const SelectedOptionIcon = () => {
  return (
    <span className="text-dark-blue flex items-center pr-2 visible">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        fill="currentColor"
        className="w-4 h-4"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M9.688 15.898l-3.98-3.98a1 1 0 00-1.415 1.414L8.98 18.02a1 1 0 001.415 0L20.707 7.707a1 1 0 00-1.414-1.414l-9.605 9.605z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </span>
  );
};

interface Option {
  name: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  onOptionClick: (option: Option) => void;
  selectedOption: Option;
}

export const Dropdown = ({
  options,
  onOptionClick,
  selectedOption,
}: DropdownProps) => {
    const [hidden, setHidden] = useState(true);

  const toggleHidden = () => setHidden(hidden => !hidden);
  return (
    <div className="ml-[21px]">
      <div className="relative">
        <button
          className="flex cursor-pointer items-center rounded px-3 py-1.5 text-left focus:outline-none whitespace-nowrap bg-dark-fill-3 text-dark-label-2 hover:bg-[#ffffff24] active:bg-dark-fill-3"
          id="drop-down"
          type="button"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={toggleHidden}
        >
          {selectedOption.name}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            fill="currentColor"
            className="pointer-events-none ml-3"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <ul
          className="absolute max-h-56 overflow-auto rounded-lg p-2 z-dropdown focus:outline-none bg-dark-overlay-3 right-0 mt-2 shadow-dark-level3 dropdown-filter"
          aria-labelledby="headlessui-listbox-button-:r1qj:"
          aria-orientation="vertical"
          id="headlessui-listbox-options-:r2hi:"
          role="listbox"
          tabIndex={-1}
          hidden={hidden}
        >
          {options.map(({ name, value }) => {
            return (
              <li
                className="relative flex h-8 cursor-pointer select-none py-1.5 pl-2 text-dark-label-2 hover:text-[#ffffff] hover:rounded hover:bg-[#ffffff1a]"
                id={value}
                role="option"
                tabIndex={-1}
                aria-selected="true"
                onClick={() => {
                  onOptionClick({ name, value });
                  toggleHidden();
                }}
              >
                <div className="flex h-5 flex-1 items-center pr-2 font-medium">
                  <div className="whitespace-nowrap">{name}</div>
                </div>
                <Show when={selectedOption.value === value}>
                  <SelectedOptionIcon />
                </Show>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
