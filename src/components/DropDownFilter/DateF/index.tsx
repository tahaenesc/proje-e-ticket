"use client";

import React, { useState } from "react";
import { Datepicker, Dropdown } from "flowbite-react";

export function DropdownMenuDate() {
  const [selectedDate, setSelectedDate] = useState("DATE : ALL TİME");

  const handleChange = (date:any) => {
    setSelectedDate(date);
  };

  return (
    <Dropdown
      label={selectedDate}
      value={selectedDate}
      onChange={handleChange}
    >
      <Dropdown.Header>
        <span className="block text-sm">ZAMAN</span>
      </Dropdown.Header>
      <Datepicker
        language="tr-TR"
        labelTodayButton="Hoje"
        labelClearButton="Limpar"
        onChange={handleChange}
      />
    </Dropdown>
  );
}
