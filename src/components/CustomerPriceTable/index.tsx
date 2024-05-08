"use client";

import { Table } from "flowbite-react";

export function CustomerPriceTable() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>ÜRÜN VEYA HİZMET ADI</Table.HeadCell>
          <Table.HeadCell>SAATLİK FİYAT</Table.HeadCell>
          <Table.HeadCell>SAAT</Table.HeadCell>
          <Table.HeadCell>ADET BAŞI FİYAT</Table.HeadCell>
          <Table.HeadCell>KAÇ KİŞİYE BU HİZMET VERİLECEK ?</Table.HeadCell>
          <Table.HeadCell>TOPLAM MALİYET</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              GOOGLE REKLAM EĞİTİMİ
            </Table.Cell>
            <Table.Cell>2000 ₺</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                18.000 ₺
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              MESAJ BİLDİRİMİ
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>$25</Table.Cell>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                125 $
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              WEBSİTESİ İÇİN BOT EĞİTİMİ
            </Table.Cell>
            <Table.Cell>2000 ₺</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                18.000 ₺
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
