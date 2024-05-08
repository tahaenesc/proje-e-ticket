"use client";

import { Dropdown } from "flowbite-react";
import { BsTransparency } from "react-icons/bs";

export function Others() {
  return (
    <Dropdown
      label="OTHERS"
      dismissOnClick={false}
      color="auto"
      className="text-black"
    >
      <Dropdown.Item>Personel Trip Day</Dropdown.Item>
      <Dropdown.Item>Published</Dropdown.Item>
      <Dropdown.Item>E-MOS magazine</Dropdown.Item>
    </Dropdown>
  );
}
