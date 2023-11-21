import satData from "./satData";
import {id} from "react";


const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
      
      {displaySats.map((sat, id) => {
  return (
    <button onClick={() => filterByType(sat)} key={id}>
      {sat} Orbit
    </button>
  );
})}
      <button>All Orbits 
      
      <button onClick= {() => setSat(satData)} key={id}>
      </button>

    
      </button>
    </div>
  );
};

export default Buttons;