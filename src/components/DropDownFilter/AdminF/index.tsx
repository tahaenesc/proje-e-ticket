import React, { useState } from "react";
import { Dropdown } from "flowbite-react";

export function DropdownMenuAdmin() {
  const [selectedAdmin, setSelectedAdmin] = useState("ADMIN : ALL");

  const handleChange = (selectedOption:any) => {
    setSelectedAdmin(selectedOption);
  };

  return (
    <Dropdown
      label={selectedAdmin}
      value={selectedAdmin}
      onChange={handleChange}
    >
      <Dropdown.Header>
        <span className="block text-sm">YÖNETİCİLER</span>
      </Dropdown.Header>
      <Dropdown.Item onClick={() => handleChange("ALİ OSMAN POLATOĞLU")}>ALİ OSMAN POLATOĞLU</Dropdown.Item>
      <Dropdown.Item onClick={() => handleChange("TAHA ENES CİNLİ")}>TAHA ENES CİNLİ</Dropdown.Item>
      <Dropdown.Item onClick={() => handleChange("MUSTAFA KAHRAMAN")}>MUSTAFA KAHRAMAN</Dropdown.Item>
    </Dropdown>
  );
}
