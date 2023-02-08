type Plus = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const plus: Plus = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

plus(1, 2);
plus(1, 2, 3);
