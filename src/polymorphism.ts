type SuperPrint = {
  (arr: number[]): void;
  (arr: string[]): void;
  (arr: boolean[]): void;
  (arr: (number | string | boolean)[]): void;
};

const superPrint: SuperPrint = (arr: (number | string | boolean)[]) => {
  arr.forEach((i) => console.log(i));
  console.log(arr);
};

superPrint([1, 2, 3]);
superPrint(['a', 'b', 'c']);
superPrint([true, false, true]);
superPrint([1, 'a', true]);
