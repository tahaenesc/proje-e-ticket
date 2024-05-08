"use client";

import { Button, Drawer } from "flowbite-react";
import { SetStateAction, useState } from "react";
import { TaskComponent } from "../TaskComponent/TaskComp";

export function RightDrawer() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className="text-left"
        >
          <div className="flex min-h-[10vh] min-w-[165vh] shadow m-10"></div>
        </button>
      )}

      {isOpen && (
        <div className="absolute top-14 right-0 bottom-0 w-[750px] bg-white shadow ">
          <div className="flex  justify-center bg-white shadow">
            <div className="p-4">
              <button onClick={handleClose}>Close</button>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et,
                esse! Porro reiciendis ut consequatur accusantium!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
