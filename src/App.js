import { useState } from "react";
import "./styles.css";
import Specimen from "./Specimen";
import ToggleSwitch from "./Toggle";

export default function App() {
  const [isMorseAll, setIsMorseAll] = useState(false);

  const toggleAll = () => {
    setIsMorseAll((prev) => !prev);
  };

  console.log("isMorseAll:", isMorseAll); // Add logging here

  return (
    <div className="App">
      <div className="header-container">
        <h1>telegraphy</h1>
        <ToggleSwitch isMorseAll={isMorseAll} toggleAll={toggleAll} />
      </div>
      <Specimen isMorseAll={isMorseAll} />
    </div>
  );
}
