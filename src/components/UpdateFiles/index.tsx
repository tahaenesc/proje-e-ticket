import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

export function UpdateFiles() {
  return (
    <>
      <Accordion className="m-6 w-90%">
        <AccordionPanel>
          <AccordionTitle>What happened in MONSTER today?</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              There were the following improvements in the MONSTER patch dated
              10.05.2024; - Since the libraries in the main file are cleaned,
              servers can forward data faster.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionTitle>Lorem ipsum dolor sit amet?</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nulla ipsa doloribus!
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionTitle>What will happen in the MONSTER patch dated 12.05.2024?</AccordionTitle>
          <AccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
            accusantium. Aperiam, odit.
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </>
  );
}
