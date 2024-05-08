"use client";
import React, { useState } from "react";
import { Drawer } from "flowbite-react";
import { FilterIcon } from "../Icons";
import { DropdownMenuProject } from "../DropDownFilter/ProjectF";
import { DropdownMenuClient } from "../DropDownFilter/ClientF";
import { DropdownMenuAdmin } from "../DropDownFilter/AdminF";
import { DropdownMenuDepartman } from "../DropDownFilter/DepartmanF";
import { DropdownMenuAssigned } from "../DropDownFilter/AssignedF";
import { DropdownMenuPriority } from "../DropDownFilter/PriorityF";
import { DropdownMenuDate } from "../DropDownFilter/DateF";
import { DropdownMenuStatus } from "../DropDownFilter/StatusF";
import { Button } from "flowbite-react";
import { FaTrashCan } from "react-icons/fa6";

const FilterList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleApplyClick = () => {
    setIsOpen(false); // Drawer'ı kapat
    // Buraya uygulama mantığını ekleyebilirsiniz
  };
  return (
    <>
      <div className="" onClick={() => setIsOpen(true)}>
        <FilterIcon />
      </div>

      <Drawer open={isOpen} onClose={handleClose} position="left">
        <Drawer.Header title="FİLTERS" />
        <Drawer.Items>
          <DropdownMenuProject />
          <div className="mt-16 flex flex-col gap-3">
            <DropdownMenuClient />
            <DropdownMenuAdmin />
            <DropdownMenuDepartman />
            <DropdownMenuAssigned />
          </div>
          <div className="mt-16 flex flex-col gap-3">
            <DropdownMenuPriority />
            <DropdownMenuDate />
            <DropdownMenuStatus />
          </div>
          <div className="mt-20 flex flex-col gap-15">
            <Button onClick={handleApplyClick}>APPLY</Button>
            <div className="mt-5 flex justify-center gap-5 text-[14px]">
              <Button>
                <FaTrashCan className="mt-1 mr-5" />
                <p className="text-[14px]">TEMİZLE</p>
              </Button>
            </div>
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default FilterList;
