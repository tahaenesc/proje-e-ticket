import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";

const HomePageIcon: React.FC = () => {
  return (
    <div>
      <svg
        viewBox="0 0 51 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 lg:w-8"
      >
        <g filter="url(#filter0_d_0_3)" transform="translate(0)">
          <svg
            width="40"
            height="70"
            viewBox="0 0 10 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="5" height="5" rx="1" fill="#EE3C78" />
            <g filter="url(#filter0_d_0_3)" transform="translate(-4 6)">
              <path
                d="M4 1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"
                fill="#516BFD"
              />
            </g>
          </svg>
          <svg
            width="5"
            height="50"
            viewBox="0 0 10 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="filter0_d_0_3" x="0" y="0" width="13" height="13">
                <feBlend />
              </filter>
            </defs>
          </svg>
        </g>
      </svg>
    </div>
  );
};

const SearchInputIcon: React.FC<any> = ({ ...otherProps }) => {
  return (
    <>
      <div {...otherProps}>
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" />

          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            <path
              d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="#999"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </div>
    </>
  );
};

const AnalyticsIcon = ({ ...otherProps }) => {
  return (
    <Link href="/analytics" className="flex items-center">
      <div {...otherProps}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 23 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.57117 15.5988L11.6321 6.01873L15.1203 10.1518L20.4289 4.40117"
            stroke="white"
            stroke-width="2"
          />
          <path
            d="M1.5 8.5L7.86193 10.7306L15.6643 16.8644L21.4421 12.0826"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      </div>
    </Link>
  );
};

const UserIcon = ({ ...otherProps }) => {
  return (
    <Link href="/users" className="flex items-center">
      <div>
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="#ffffff"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </Link>
  );
};

const FileIcon = ({ ...otherProps }) => {
  return (
    <Link href="/files" className="flex items-center">
      <div>
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="#ffffff"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M3 6a2 2 0 0 1 2-2h5.532a2 2 0 0 1 1.536.72l1.9 2.28H3V6Zm0 3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9H3Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </Link>
  );
};

const MessageBoxIcon = ({ ...otherProps }) => {
  return (
    
      <div>
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="#ffffff"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
  );
};

const EarthIcon = ({ ...otherProps }) => {
  return (
    <Link href="/network" className="flex items-center">
      <div {...otherProps}>
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="#ffffff"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M8.64 4.737A7.97 7.97 0 0 1 12 4a7.997 7.997 0 0 1 6.933 4.006h-.738c-.65 0-1.177.25-1.177.9 0 .33 0 2.04-2.026 2.008-1.972 0-1.972-1.732-1.972-2.008 0-1.429-.787-1.65-1.752-1.923-.374-.105-.774-.218-1.166-.411-1.004-.497-1.347-1.183-1.461-1.835ZM6 4a10.06 10.06 0 0 0-2.812 3.27A9.956 9.956 0 0 0 2 12c0 5.289 4.106 9.619 9.304 9.976l.054.004a10.12 10.12 0 0 0 1.155.007h.002a10.024 10.024 0 0 0 1.5-.19 9.925 9.925 0 0 0 2.259-.754 10.041 10.041 0 0 0 4.987-5.263A9.917 9.917 0 0 0 22 12a10.025 10.025 0 0 0-.315-2.5A10.001 10.001 0 0 0 12 2a9.964 9.964 0 0 0-6 2Zm13.372 11.113a2.575 2.575 0 0 0-.75-.112h-.217A3.405 3.405 0 0 0 15 18.405v1.014a8.027 8.027 0 0 0 4.372-4.307ZM12.114 20H12A8 8 0 0 1 5.1 7.95c.95.541 1.421 1.537 1.835 2.415.209.441.403.853.637 1.162.54.712 1.063 1.019 1.591 1.328.52.305 1.047.613 1.6 1.316 1.44 1.825 1.419 4.366 1.35 5.828Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </Link>
  );
};

const FilterIcon = () => {
  return (
    <div>
      <svg
        width="30"
        height="30"
        viewBox="0 0 75 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M74 0.5H2L34.5 43V77L44 67.5V43L74 0.5Z"
          fill="#00B0FE"
          stroke="#00B0FE"
        />
      </svg>
    </div>
  );
};

const ArrowBottomIcon = () => {
  return (
    <div>
      <svg
        width="13"
        height="6"
        viewBox="0 0 13 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.5 5L2 0.5H11L6.5 5Z" fill="#9B9B9B" stroke="#9B9B9B"></path>
      </svg>
    </div>
  );
};

const SortOption1Icon = () => {
  return (
    <Link href="/home" className="flex items-center">
      <div>
        <svg
          width="22"
          height="22"
          viewBox="0 0 34 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M34 0H0V9H34V0Z" fill="#9E9E9E" />
          <path d="M34 13H0V22H34V13Z" fill="#9E9E9E" />
        </svg>
      </div>
    </Link>
  );
};
const SortOption2Icon = () => {
  return (
    <Link href="/sort2" className="flex items-center">
      <div>
        <svg
          width="22"
          height="21"
          viewBox="0 0 34 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M34 0H0V5H34V0Z" fill="#9E9E9E" />
          <path d="M34 8H0V13H34V8Z" fill="#9E9E9E" />
          <path d="M34 16H0V21H34V16Z" fill="#9E9E9E" />
        </svg>
      </div>
    </Link>
  );
};

const SortOption3Icon = () => {
  return (
    <Link href="/sort3" className="flex items-center">
      <div>
        <svg
          width="22"
          height="21"
          viewBox="0 0 25 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24.5 0H0V3.5H24.5V0Z" fill="#9E9E9E" />
          <path d="M24.5 5.83333H0V9.33333H24.5V5.83333Z" fill="#9E9E9E" />
          <path d="M24.5 11.6667H0V15.1667H24.5V11.6667Z" fill="#9E9E9E" />
          <path d="M24.5 17.5H0V21H24.5V17.5Z" fill="#9E9E9E" />
        </svg>
      </div>
    </Link>
  );
};

const LastSearchIcon = () => {
  return (
    <div>
      <svg
        width="30px"
        height="25px"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="#999"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </div>
  );
};

const ThreeDotIcon = () => {
  return (
    <div className="">
      <svg
        width="6"
        height="6"
        viewBox="0 0 4 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
      </svg>
      <svg
        width="6"
        height="6"
        viewBox="0 0 4 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
      </svg>
      <svg
        width="6"
        height="6"
        viewBox="0 0 4 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
      </svg>
    </div>
  );
};

const RecentIcon = () => {
  return (
    <div>
      <svg
        width="20"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23 12.5C23 18.8901 18.0371 24 12 24C5.96295 24 1 18.8901 1 12.5C1 6.10986 5.96295 1 12 1C18.0371 1 23 6.10986 23 12.5Z"
          stroke="#494949"
          stroke-width="2"
        />
        <path d="M12 4V12L16.5 18" stroke="black" stroke-width="2" />
      </svg>
    </div>
  );
};

const DoneIcon = () => {
  return (
    <div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        transform="translate(0,5)"
      >
        <path d="M2 15.5L8 24.5L26 1" stroke="black" stroke-width="3" />
      </svg>
    </div>
  );
};

const ArchivedIcon = () => {
  return (
    <div className="flex">
      <svg
        width="22"
        height="21"
        viewBox="0 0 22 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 19V2H19V19H3Z" fill="black" />
        <path
          d="M0 2H3M22 2H19M3 2V19H19V2M3 2H19"
          stroke="black"
          stroke-width="3"
        />
        <path d="M7.5 10H14.5" stroke="white" stroke-width="2" />
        <path d="M0.5 3L21.5 3" stroke="white" />
      </svg>
    </div>
  );
};

const AllIcon = () => {
  return (
    <div>
      <svg
        width="28"
        height="28"
        viewBox="0 0 30 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="13" y="11" width="17" height="17" rx="3" fill="#EA3D77" />
        <rect width="17" height="17" rx="3" fill="#526DFD" />
      </svg>
    </div>
  );
};

const TaskIcon = () => {
  return (
    <div>
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="17" height="17" rx="3" fill="#526DFD" />
      </svg>
    </div>
  );
};

const TicketIcon = () => {
  return (
    <div>
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="17" height="17" rx="3" fill="#EA3D77" />
      </svg>
    </div>
  );
};
const FlagIcon = () => {
  return (
    <div>
      <svg
        width="22"
        height="21"
        viewBox="0 0 22 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        transform="translate(0,5)"
      >
        <path
          d="M13.6667 3.33333C15.6667 3.33333 22 0.333333 22 0.333333L17.6667 6C17.6667 6 14 9.66667 12 9.66667C10 9.66667 9.78275 8.86819 8.33333 9C5.88729 9.22244 4 12.3333 4 12.3333L7 20.3333L5.66667 21L0 5.33333L3.66667 2.33333C3.66667 2.33333 5.33333 0 8.33333 0C11.3333 0 11.6667 3.33333 13.6667 3.33333Z"
          fill="#FF5252"
        />
      </svg>
    </div>
  );
};

const ClientIcon = () => {
  return (
    <div className="flex justify-start">
      <svg
        className="flex justify-start"
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="2" width="18" height="14" rx="3" fill="black" />
        <path d="M4 2V16" stroke="white" stroke-width="0.5" />
        <path d="M14 2V16" stroke="white" stroke-width="0.5" />
        <path
          d="M7 2V2C7 1.44772 7.44772 1 8 1H10C10.5523 1 11 1.44772 11 2V2"
          stroke="black"
          stroke-width="0.5"
        />
      </svg>
    </div>
  );
};

const ProjectIcon = () => {
  return (
    <div>
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.685874 6.56655C0.33007 4.71637 1.74781 3 3.63189 3H16.3681C18.2522 3 19.6699 4.71636 19.3141 6.56654L17.968 13.5665C17.6963 14.9791 16.4604 16 15.022 16H4.97805C3.53964 16 2.30367 14.9791 2.03203 13.5665L0.685874 6.56655Z"
          fill="black"
        />
        <path
          d="M2 1V2C2 2.55228 2.44772 3 3 3H17.4C17.7314 3 18 2.73137 18 2.4C18 2.06863 17.7314 1.8 17.4 1.8H10.58C10.0829 1.8 9.68 1.39706 9.68 0.9C9.68 0.402944 9.27706 0 8.78 0H3C2.44772 0 2 0.447715 2 1Z"
          fill="black"
        />
        <line
          x1="2"
          y1="2.75"
          x2="18"
          y2="2.75"
          stroke="white"
          stroke-width="0.5"
        />
      </svg>
    </div>
  );
};

const AdminIcon = () => {
  return (
    <div>
      <svg
        aria-hidden="true"
        role="img"
        width="25"
        height="25"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 256 256"
      >
        <path
          fill="#000000"
          d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"
        ></path>
      </svg>
    </div>
  );
};

const DepartmantIcon = () => {
  return (
    <div>
      <svg
        width="18"
        height="18"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="6" cy="2" r="2" fill="black" />
        <circle cx="2" cy="6" r="2" fill="black" />
        <circle cx="6" cy="10" r="2" fill="black" />
        <circle cx="10" cy="6" r="2" fill="black" />
      </svg>
    </div>
  );
};

const GAllIcon = () => {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8.66675"
        y="7.33333"
        width="11.3333"
        height="11.3333"
        rx="3"
        fill="#A1A1A1"
      />
      <rect width="11.3333" height="11.3333" rx="3" fill="#A1A1A1" />
    </svg>
  );
};

const GProjectIcon = () => {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.685874 6.56655C0.33007 4.71637 1.74781 3 3.63189 3H16.3681C18.2522 3 19.6699 4.71636 19.3141 6.56654L17.968 13.5665C17.6963 14.9791 16.4604 16 15.022 16H4.97805C3.53964 16 2.30367 14.9791 2.03203 13.5665L0.685874 6.56655Z"
        fill="#A1A1A1"
      />
      <path
        d="M2 1V2C2 2.55228 2.44772 3 3 3H17.4C17.7314 3 18 2.73137 18 2.4C18 2.06863 17.7314 1.8 17.4 1.8H10.58C10.0829 1.8 9.68 1.39706 9.68 0.9C9.68 0.402944 9.27706 0 8.78 0H3C2.44772 0 2 0.447715 2 1Z"
        fill="#A1A1A1"
      />
      <line
        x1="2"
        y1="2.75"
        x2="18"
        y2="2.75"
        stroke="white"
        stroke-width="0.5"
      />
    </svg>
  );
};

const GBagIcon = () => {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="2" width="18" height="14" rx="3" fill="#A1A1A1" />
      <path d="M4 2V16" stroke="white" stroke-width="0.5" />
      <path d="M14 2V16" stroke="white" stroke-width="0.5" />
      <path
        d="M7 2V2C7 1.44772 7.44772 1 8 1H10C10.5523 1 11 1.44772 11 2V2"
        stroke="black"
        stroke-width="0.5"
      />
    </svg>
  );
};

const GHourIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9" cy="9" r="8" stroke="#9E9E9E" stroke-width="1.5" />
      <path d="M9 4.2V8.2L12.2 11.4" stroke="#9E9E9E" />
    </svg>
  );
};

const GTriIcon = () => {
  return (
    <svg
      width="16"
      height="19"
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 9.5L0.249999 18.5933L0.25 0.406733L16 9.5Z" fill="#A1A1A1" />
    </svg>
  );
};

const GFourDotIcon = () => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="3.16667" cy="9.5" r="3.16667" fill="#A1A1A1" />
      <circle cx="9.50004" cy="15.8333" r="3.16667" fill="#A1A1A1" />
      <circle cx="9.50004" cy="3.16667" r="3.16667" fill="#A1A1A1" />
      <circle cx="15.8333" cy="9.5" r="3.16667" fill="#A1A1A1" />
    </svg>
  );
};

const GFlagIcon = () => {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.6667 3.33333C15.6667 3.33333 22 0.333333 22 0.333333L17.6667 6C17.6667 6 14 9.66667 12 9.66667C10 9.66667 9.78275 8.86819 8.33333 9C5.88729 9.22244 4 12.3333 4 12.3333L7 20.3333L5.66667 21L0 5.33333L3.66667 2.33333C3.66667 2.33333 5.33333 0 8.33333 0C11.3333 0 11.6667 3.33333 13.6667 3.33333Z"
        fill="#A1A1A1"
      />
    </svg>
  );
};

const GUserIcon = () => {
  return (
    <div className="">
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="#ffffff"
        viewBox="0 0 24 24"
        className="color-[#FFFFFF]"
      >
        <path
          fill-rule="evenodd"
          d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z"
          clip-rule="evenodd"
          fill="#A1A1A1"
        />
      </svg>
    </div>
  );
};

const RFlagIcon = () => {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.6667 3.33333C15.6667 3.33333 22 0.333333 22 0.333333L17.6667 6C17.6667 6 14 9.66667 12 9.66667C10 9.66667 9.78275 8.86819 8.33333 9C5.88729 9.22244 4 12.3333 4 12.3333L7 20.3333L5.66667 21L0 5.33333L3.66667 2.33333C3.66667 2.33333 5.33333 0 8.33333 0C11.3333 0 11.6667 3.33333 13.6667 3.33333Z"
        fill="#FE5256"
      />
    </svg>
  );
};

export {
  HomePageIcon,
  SearchInputIcon,
  AnalyticsIcon,
  UserIcon,
  FileIcon,
  MessageBoxIcon,
  EarthIcon,
  FilterIcon,
  ArrowBottomIcon,
  SortOption1Icon,
  SortOption2Icon,
  SortOption3Icon,
  LastSearchIcon,
  ThreeDotIcon,
  RecentIcon,
  DoneIcon,
  ArchivedIcon,
  AllIcon,
  TaskIcon,
  TicketIcon,
  FlagIcon,
  ClientIcon,
  ProjectIcon,
  AdminIcon,
  DepartmantIcon,
  GAllIcon,
  GProjectIcon,
  GBagIcon,
  GHourIcon,
  GTriIcon,
  GFourDotIcon,
  GFlagIcon,
  GUserIcon,
  RFlagIcon,
};
