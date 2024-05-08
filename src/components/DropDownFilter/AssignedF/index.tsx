import React, { useState } from "react";
import { Dropdown } from "flowbite-react";

export function DropdownMenuAssigned() {
  const [selectedAssigned, setSelectedAssigned] = useState("ASSİGNED : ALL");

  const handleChange = (selectedOption:any) => {
    setSelectedAssigned(selectedOption);
  };

  return (
    <Dropdown
      label={selectedAssigned}
      value={selectedAssigned}
      onChange={handleChange}
    >
      <Dropdown.Header>
        <span className="block text-sm">ASSİGNED</span>
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
