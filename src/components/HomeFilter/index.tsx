"use client";

import { Button, Drawer } from "flowbite-react";
import { useState } from "react";

import style from "./index.module.css";
import { DropdownMenuProject } from "../DropDownFilter/ProjectF";
import { DropdownMenuClient } from "../DropDownFilter/ClientF";
import { DropdownMenuAdmin } from "../DropDownFilter/AdminF";
import { DropdownMenuDepartman } from "../DropDownFilter/DepartmanF";
import { DropdownMenuAssigned } from "../DropDownFilter/AssignedF";
import { DropdownMenuPriority } from "../DropDownFilter/PriorityF";
import { DropdownMenuDate } from "../DropDownFilter/DateF";
import { DropdownMenuStatus } from "../DropDownFilter/StatusF";

export function Filter() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex items-center justify-center">
        <Button onClick={() => setIsOpen(true)}>
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
        </Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose}>
        <Drawer.Header title="FILTER" />
        <Drawer.Items>
          <div className={style.marginBottom}>
            <DropdownMenuProject />
          </div>
          <div className={style.marginBottom2}>
            <DropdownMenuClient />
          </div>
          <div className={style.marginBottom2}>
            <DropdownMenuAdmin />
          </div>
          <div className={style.marginBottom2}>
            <DropdownMenuDepartman />
          </div>
          <div className={style.marginBottom2}>
            <DropdownMenuAssigned />
          </div>

          <div className={style.marginBottom3}>
            <DropdownMenuPriority />
          </div>
          <div className={style.marginBottom2}>
            <DropdownMenuDate />
          </div>
          <div className={style.marginBottom2}>
            <DropdownMenuStatus />
          </div>


          <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-cyan-700 px-24 py-5 text-center text-sm font-medium text-white text-[25px] hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 mt-28"
            >
              APPLY
            </a>
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
