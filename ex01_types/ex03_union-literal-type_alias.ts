

console.log("UNION ==================");
function combine(n1: number | string, n2: number | string) {
  if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
  else return n1;
}

const combinedAges = combine(30, 27);
console.log(combinedAges);

console.log("Literal ==================");

// resultConversion: only as-number and as-text is allowed
function combineLiteral(
  n1: number | string,
  n2: number | string,
  resultConversion: 'as-number' | 'as-text'
) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") result = n1 + n2;
  else result = n1;

  if (resultConversion === 'as-number') { 
      return +result;
  } else {
      return result.toString();
  }
}

console.log("Type alias ==================");

type Combinable = number | string; 
type WhichType = 'as-number' | 'as-text'

function combineLiteralAlias(
  n1: Combinable,
  n2: Combinable,
  resultConversion: WhichType
) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") result = n1 + n2;
  else result = n1;

  if (resultConversion === 'as-number') { 
      return +result;
  } else {
      return result.toString();
  }
}


console.log(combineLiteral(3, 6, 'as-number'))
console.log(combineLiteral('5', 5, 'as-text'))