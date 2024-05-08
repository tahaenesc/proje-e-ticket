"use client";

import React, { useState } from "react";
import { Dropdown } from "flowbite-react";

export function DropdownMenuProject() {
  const [selectedProject, setSelectedProject] = useState("PROJECT : SELECT A PROJECT");

  const handleChange = (selectedOption:any) => {
    setSelectedProject(selectedOption);
  };

  return (
    <Dropdown
      label={selectedProject}
      value={selectedProject}
      onChange={handleChange}
      className="mb-10"
    >
      <Dropdown.Header>
        <span className="block text-sm">PROJELER</span>
      </Dropdown.Header>
      <Dropdown.Item onClick={() => handleChange("E - TİCKET")}>E - TİCKET</Dropdown.Item>
      <Dropdown.Item onClick={() => handleChange("MONSTER")}>MONSTER</Dropdown.Item>
      <Dropdown.Item onClick={() => handleChange("FAİK SÖNMEZ")}>FAİK SÖNMEZ</Dropdown.Item>
      <Dropdown.Item onClick={() => handleChange("KORAY SPOR")}>KORAY SPOR</Dropdown.Item>
      <Dropdown.Item onClick={() => handleChange("HUAWEİ")}>HUAWEİ</Dropdown.Item>
      <Dropdown.Item onClick={() => handleChange("EVE")}>EVE</Dropdown.Item>
    </Dropdown>
  );
}
