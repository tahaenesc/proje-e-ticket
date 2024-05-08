import React, { useState } from "react";
import { Dropdown } from "flowbite-react";

export function DropdownMenuPriority() {
  const [selectedPriority, setSelectedPriority] = useState("PRİORİTY : ALL");

  const handleChange = (selectedOption:any) => {
    setSelectedPriority(selectedOption);
  };

  return (
    <Dropdown
      label={selectedPriority}
      value={selectedPriority}
      onChange={handleChange}
    >
      <Dropdown.Header>
        <span className="block text-sm">PRİORİTY</span>
      </Dropdown.Header>
      <Dropdown.Item onClick={() => handleChange("XXX - YYY")}>XXX - YYY</Dropdown.Item>
      <Dropdown.Item onClick={() => handleChange("XXX - YYY")}>XXX - YYY</Dropdown.Item>
      <Dropdown.Item onClick={() => handleChange("XXX - YYY")}>XXX - YYY</Dropdown.Item>
      <Dropdown.Item onClick={() => handleChange("XXX - YYY")}>XXX - YYY</Dropdown.Item>
      <Dropdown.Item onClick={() => handleChange("XXX - YYY")}>XXX - YYY</Dropdown.Item>
      <Dropdown.Item onClick={() => handleChange("XXX - YYY")}>XXX - YYY</Dropdown.Item>
    </Dropdown>
  );
}
