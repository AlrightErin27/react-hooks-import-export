import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
// import { trees, wildlife, elevation } from "./parks/RockyMountain";
import {
  trees as rockyMtnTrees,
  wildlife as rockyMtnWildlife,
  elevation as rockyMtnElevation,
} from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  rockyMtnWildlife();
  rockyMtnElevation();
  return (
    <div>
      <h1>Colorado State Parks!</h1>
      <MesaVerde />
      {rockyMtnTrees}
    </div>
  );
}
export default ColoradoStateParks;
