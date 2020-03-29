import km from "./km.json";
import en from "./en.json";

export function getLocaleData(lang) {
  if(lang === "km") {
    return km;
  }

  return en;
}
