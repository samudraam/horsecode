import "./styles.css";
import MorseToA from "./MorseToA";
import MorseToB from "./MorseToB";
import MorseToC from "./MorseToC";
import MorseToD from "./MorseToD";
import MorseToE from "./MorseToE";
import MorseToF from "./MorseToF";
import MorseToG from "./MorseToG";
import MorseToH from "./MorseToH";
import MorseToI from "./MorseToI";
import MorseToJ from "./MorseToJ";
import MorseToK from "./MorseToK";
import MorseToL from "./MorseToL";
import MorseToM from "./MorseToM";
import MorseToN from "./MorseToN";

const letterComponents = [
  MorseToA,
  MorseToB,
  MorseToC,
  MorseToD,
  MorseToE,
  MorseToF,
  MorseToG,
  MorseToH,
  MorseToI,
  MorseToJ,
  MorseToK,
  MorseToL,
  MorseToM,
  MorseToN,
];
console.log("Letter Components:", letterComponents);

const Specimen = ({ isMorseAll }) => {
  console.log("isMorseAll in Specimen:", isMorseAll); // Add logging here

  return (
    <div className="grid-container">
      {letterComponents.map((LetterComponent, idx) => (
        <div key={idx} className="grid-item">
          <LetterComponent isMorseAll={isMorseAll} color={"white"} />
        </div>
      ))}
    </div>
  );
};

export default Specimen;
