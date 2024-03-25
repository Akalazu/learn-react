import TabContent from "./TabContent";
import { EXAMPLES } from "../data";
import { useState } from "react";
import Section from "./Section";
import Tab from "./Tab";

export default function Examples() {
  const [buttonContent, setButtonContent] = useState();

  function handleSelect(buttonId) {
    setButtonContent(EXAMPLES[buttonId]);
  }

  return (
    <Section title="Examples" id="examples">
      <Tab
        buttonContainer="menu"
        buttons={
          <>
            <TabContent
              isSelected={
                buttonContent &&
                buttonContent.title.toLowerCase() === "components"
              }
              onClickAction={() => handleSelect("components")}
            >
              Component
            </TabContent>
            <TabContent
              isSelected={
                buttonContent && buttonContent.title.toLowerCase() === "jsx"
              }
              onClickAction={() => handleSelect("jsx")}
            >
              JSX
            </TabContent>
            <TabContent
              isSelected={
                buttonContent && buttonContent.title.toLowerCase() === "props"
              }
              onClickAction={() => handleSelect("props")}
            >
              Props
            </TabContent>
            <TabContent
              isSelected={
                buttonContent && buttonContent.title.toLowerCase() === "state"
              }
              onClickAction={() => handleSelect("state")}
            >
              State
            </TabContent>
          </>
        }
      />
      <div id="tab-content">
        {!buttonContent ? (
          "Please click a button"
        ) : (
          <span>
            <h3>{buttonContent.title}</h3>
            <p>{buttonContent.description}</p>
            <code>{buttonContent.code}</code>
          </span>
        )}
      </div>
    </Section>
  );
}
