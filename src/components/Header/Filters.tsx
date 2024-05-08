"use client";

import React, { useState } from "react";
import {
  ArrowBottomIcon,
  FilterIcon,
  SortOption1Icon,
  SortOption2Icon,
  SortOption3Icon,
  LastSearchIcon,
  ThreeDotIcon,
} from "@/components/Icons";
import { Button } from "flowbite-react";
import FilterList from "@/components/FilterList/FilterList";
import { Others } from "../FilterOthers";
import { ThreeDotIconComp } from "../ThreeDotIcon";

type Props = {};

const Filters = (props: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <div className="flex justify-between flex-col lg:flex-row border-b-grey5 border-b-2">
      <div className="flex justify-between lg:justify-start border w-full">
        <div className="border-r-grey5 border-r-2 px-6 flex items-center justify-center">
          <div className="flex items-center justify-center">
            <Button
              color="filter_button"
              outline={false}
              className="bg-none"
              onClick={() => setIsOpen(true)}
            >
              <FilterList />
            </Button>
          </div>
        </div>
        <div className="flex">
          <div className="text-grey4 text-md lg:text-base p-4 flex items-center justify-center ">
            <div>MY TASKS</div>
          </div>
          <div className="font-base text-grey6 p-4 flex items-center justify-center">
            <div>
              <Others />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center justify-center gap-6 px-6">
          <SortOption1Icon />
          <SortOption2Icon />
          <SortOption3Icon />
        </div>
        <div className="flex">
          <div className="border-l-2 font-base text-grey3 p-4 flex items-center justify-center">
            SORT
          </div>
          <div className="border-x-2 p-4">
            <div className="mt-3">
              <LastSearchIcon />
            </div>
          </div>
          <div className="p-2 mt-2">
            <ThreeDotIconComp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
