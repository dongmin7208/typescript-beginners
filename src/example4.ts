//  overloading
//여러개의 함수를 만들어서 이름이 같은 함수를 만들어서 사용하는 것
//함수의 이름이 같아도 파라미터의 타입이나 개수가 다르면 다른 함수로 인식한다.
// 여러 call signature를 가지는 함수가 overloading이다.

type Add3 = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};
const add3: Add3 = (a, b) => {
  if (typeof b === 'string') return a;
  return a + b;
};

type Config = {
  path: string;
  state: object;
};
type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === 'string') {
    // console.log(config);
  } else {
    // console.log(config.path, config.state);
  }
};
