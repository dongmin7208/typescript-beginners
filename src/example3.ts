function add(a: number, b: number): number {
  return a + b;
}
const add1 = (a: number, b: number): number => a + b;

type Add = (a: number, b: number) => number;
// call signature
// const add:Add =

function add2(a: number, b: number) {
  return a + b;
}
