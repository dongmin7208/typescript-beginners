function last<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

function prepend<T>(arr: T[], item: T): T[] {
  arr.unshift(item);
  return arr;
}

function mix<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

function count<T>(arr: T[]): number {
  return arr.length;
}

function findIndex<T>(arr: T[], item: T): number | null {
  const index = arr.indexOf(item);
  return index >= 0 ? index : null;
}

function slice<T>(arr: T[], startIndex: number, endIndex?: number): T[] {
  return arr.slice(startIndex, endIndex);
}
