"use client";

import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

export function UpdateSidebar() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="monster" icon={HiInbox}>
            MONSTER
          </Sidebar.Item>
          <Sidebar.Item
            href="eve"
            icon={HiInbox}
            label="Pro"
            labelColor="dark"
          >
            EVE
          </Sidebar.Item>
          <Sidebar.Item href="faiksönmez" icon={HiInbox} label="3">
            FAİK SÖNMEZ
          </Sidebar.Item>
          <Sidebar.Item href="korayspor" icon={HiInbox}>
            KORAYSPOR
          </Sidebar.Item>
          <Sidebar.Item href="eticket" icon={HiInbox} label="E-MOS">
            E-TİCKET
          </Sidebar.Item>
          <Sidebar.Item href="vitra" icon={HiInbox} label="E-MOS" labelColor="dark">
            VİTRA
          </Sidebar.Item>
          <Sidebar.Item href="lescon" icon={HiInbox}>
            LESCON
          </Sidebar.Item>
          <Sidebar.Item href="gsstore" icon={HiInbox}>
            GS STORE
          </Sidebar.Item>
          <Sidebar.Item href="ipekyol" icon={HiInbox}>
            İPEKYOL
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
