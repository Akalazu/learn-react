import { CORE_CONCEPTS } from "./data.js";
import Student from "./Student.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header/Header.jsx";
import TabContent from "./TabContent.jsx";
import { useState } from "react";

import { EXAMPLES } from "./data.js";

function CourseGoal(props) {
  return (
    <div className="course-goal">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

function MyComponents({ priority }) {
  return (
    <span>
      <p>Proiority: {priority}</p>
    </span>
  );
}

function App() {
  const [buttonContent, setButtonContent] = useState();

  function handleSelect(buttonId) {
    setButtonContent(EXAMPLES[buttonId]);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            <CoreConcepts props={CORE_CONCEPTS[0]} />
            <CoreConcepts props={CORE_CONCEPTS[1]} />
            <CoreConcepts props={CORE_CONCEPTS[2]} />
            <CoreConcepts props={CORE_CONCEPTS[0]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
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
          </menu>
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
        </section>
      </main>
    </div>
  );
}

export default App;
