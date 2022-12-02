export const scaleName = {
  c: "Celcius",
  f: "Fahrenheit",
};
function tryConvert(temp) {
  if (isNaN(temp)) {
    return "";
  }
  return parseFloat(temp.toFixed(2));
}
export function fahrenheitToCelcius(tempFahr) {
  return tryConvert(((tempFahr - 32) * 5) / 9);
}
export function celciusToFahrenheit(tempCelc) {
  return tryConvert((tempCelc * 9) / 5 + 32);
}
