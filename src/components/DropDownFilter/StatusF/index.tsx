import React, { useState } from "react";
import { Dropdown } from "flowbite-react";

export function DropdownMenuStatus() {
  const [selectedStatus, setSelectedStatus] = useState("STATUS : ALL");

  const handleChange = (selectedOption:any) => {
    setSelectedStatus(selectedOption);
  };

  return (
    <Dropdown
      label={selectedStatus}
      value={selectedStatus}
      onChange={handleChange}
    >
      <Dropdown.Header>
        <span className="block text-sm">DURUM</span>
      </Dropdown.Header>
      <Dropdown.Item onClick={() => handleChange("In Development")}>In Development</Dropdown.Item>
      <Dropdown.Item onClick={() => handleChange("Resolved")}>Resolved</Dropdown.Item>
      <Dropdown.Item onClick={() => handleChange("Complaint")}>Complaint</Dropdown.Item>
      <Dropdown.Item onClick={() => handleChange("In Management")}>In Management</Dropdown.Item>
      <Dropdown.Item onClick={() => handleChange("Loading")}>Loading</Dropdown.Item>
    </Dropdown>
  );
}
