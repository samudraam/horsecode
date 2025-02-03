import "./styles.css";
import MorseToA from "./MorseToA";
export default function App() {
  return (
    <div className="App">
      <div style={{ transform: "scale(0.5)" }}>
        <MorseToA />
      </div>
    </div>
  );
}
