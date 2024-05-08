import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
  Dropdown,
  DropdownItem,
} from "flowbite-react";
import { ClientIcon } from "../Icons";

export function ClientDropdown() {
  return (
    <div className="justify-start">
      <Accordion className="">
        <AccordionPanel className="">
          <AccordionTitle className="">
            <div className="flex gap-4 ">
              <ClientIcon />
              <div className=" ml-3">Clients</div>
            </div>
          </AccordionTitle>
          <AccordionContent className="gap-16">
            <div>
              <ul>
                <li>FAİK SÖNMEZ</li>
                <li>EVE</li>
                <li>MONSTER</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  );
}
