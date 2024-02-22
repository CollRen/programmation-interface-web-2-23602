/**
 * valideFormatEtats
 * Valider la structure de données oEtats
 */

import { oEtats } from "../scripts/oEtats.js";
import { test, affirme } from "./test.test.js";

export function valideFormatEtats() {
  for (const cle in oEtats) {
    test(`'Valide le format de la structure de l'état ${cle}`, function () {
      // console.log('execute ce qu\'il ya dans cette fonction de calback');

      let estPresent = true;
      let clesAbsentes = [];

      if (!oEtats[cle].hasOwnProperty("capitale")) {
        estPresent = false;
        clesAbsentes.push("capitale");
      }

      if (!oEtats[cle].hasOwnProperty("population")) {
        estPresent = false;
        clesAbsentes.push("population");
      }

      if (!oEtats[cle].hasOwnProperty("superficie")) {
        estPresent = false;
        clesAbsentes.push("superficie");
      }

      if (!oEtats[cle].hasOwnProperty("langue")) {
        estPresent = false;
        clesAbsentes.push("langue");
      }

      if (!oEtats[cle].hasOwnProperty("monnaie")) {
        estPresent = false;
        clesAbsentes.push("monnaie");
      }

      if (!oEtats[cle].hasOwnProperty("img")) {
        estPresent = false;
        clesAbsentes.push("img");
      }
      let nbCles = clesAbsentes.length,
        msg = `L${nbCles > 1 ? "es" : "a"} clé${
          nbCles > 1 ? "s" : ""
        } ${clesAbsentes.join(", ")} de l'etat ${cle} ${
          nbCles > 1 ? "sont" : "est"
        } absente${nbCles > 1 ? "s" : ""}`;
      affirme(estPresent, msg);
    });
  }
}
