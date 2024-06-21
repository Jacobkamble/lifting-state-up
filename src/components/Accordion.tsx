import React, { useState } from "react";
import Panel from "./Panel";

interface PanelData {
  title: string;
  description: string;
}

const panelData: PanelData[] = [
  { title: "First", description: "First Panle Description" },
  { title: "Second", description: "Second Panel Description" },
];

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <h4>Accordion</h4>
      {panelData?.map(({ title, description }, index) => (
        <Panel
          title={title}
          isActive={activeIndex === index}
          onShow={() => setActiveIndex(index)}
        >
          {description}
        </Panel>
      ))}
    </>
  );
};

export default Accordion;
