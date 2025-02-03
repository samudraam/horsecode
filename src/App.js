import "./styles.css";
import MorseToA from "./MorseToA";
import MorseToB from "./MorseToB";
import MorseToC from "./MorseToC";
export default function App() {
  return (
    <div className="App">
      <div className="flex-container">
        <div className="flex-item">
          <MorseToA />
        </div>
        <div className="flex-item">
          <MorseToB />
        </div>
        <div className="flex-item">
          <MorseToC />
        </div>
      </div>
    </div>
  );
}
