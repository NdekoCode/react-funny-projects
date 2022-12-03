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
export const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];
