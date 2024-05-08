import React, { useState } from "react";
import { Dropdown } from "flowbite-react";

export function DropdownMenuClient() {
  const [selectedClient, setSelectedClient] = useState("CLIENT : ALL");

  const handleChange = (selectedOption:any) => {
    setSelectedClient(selectedOption);
  };

  return (
    <Dropdown
      label={selectedClient}
      value={selectedClient}
      onChange={handleChange}
    >
      <Dropdown.Header>
        <span className="">MÜŞTERİLER</span>
      </Dropdown.Header>
      <Dropdown.Item onClick={() => handleChange("AHMET XXXX")}>
        AHMET XXXX
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleChange("MEHMET XXXX")}>
        MEHMET XXXX
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleChange("ESRA XXXXX")}>
        ESRA XXXXX
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleChange("AYŞE XXXXX")}>
        AYŞE XXXXX
      </Dropdown.Item>
    </Dropdown>
  );
}
