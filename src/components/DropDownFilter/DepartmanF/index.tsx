import React, { useState } from "react";
import { Dropdown } from "flowbite-react";

export function DropdownMenuDepartman() {
  const [selectedDepartman, setSelectedDepartman] = useState("DEPARTMAN : ALL");

  const handleChange = (selectedOption:any) => {
    setSelectedDepartman(selectedOption);
  };

  return (
    <Dropdown
      label={selectedDepartman}
      value={selectedDepartman}
      onChange={handleChange}
    >
      <Dropdown.Header>
        <span className="block text-sm">DEPARTMAN</span>
      </Dropdown.Header>
      <Dropdown.Item onClick={() => handleChange("BACK - END")}>BACK - END</Dropdown.Item>
      <Dropdown.Item onClick={() => handleChange("FRONT - END")}>FRONT - END</Dropdown.Item>
      <Dropdown.Item onClick={() => handleChange("FULL - STACK")}>FULL - STACK</Dropdown.Item>
      <Dropdown.Item onClick={() => handleChange("MANAGEMENT")}>MANAGEMENT</Dropdown.Item>
      <Dropdown.Item onClick={() => handleChange("SYSTEM")}>SYSTEM</Dropdown.Item>
    </Dropdown>
  );
}
