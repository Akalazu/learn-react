import { CORE_CONCEPTS } from "./data.js";
import Student from "./Student.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header/Header.jsx";
import TabContent from "./TabContent.jsx";
import { useState } from "react";

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
  const [buttonContent, setButtonContent] = useState("Please select a button");

  function handleSelect(buttonId) {
    setButtonContent(buttonId);
    console.log(buttonId);
    console.log(buttonContent + " selected");
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
            <TabContent onClickAction={() => handleSelect("Components")}>
              Component
            </TabContent>
            <TabContent onClickAction={() => handleSelect("JSX")}>
              JSX
            </TabContent>
            <TabContent onClickAction={() => handleSelect("Props")}>
              Props
            </TabContent>
            <TabContent onClickAction={() => handleSelect("State")}>
              State
            </TabContent>
          </menu>
          {buttonContent}
        </section>
      </main>
    </div>
  );
}

export default App;
