const dondon = {
  nickname: 'park',
};

//
// dondon.hello()
// '{ nickname: string; }' 형식에 'hello' 속성이 없습니다.ts(2339)

// [1,2,3,4]+false;
// '+' 연산자를 'number[]' 및 'boolean' 형식에 적용할 수 없습니다.ts(2365

// function divide(a,b){
//   return a / b;
// }
// divide("hello");
// 2개의 인수가 필요한데 1개를 가져왔습니다.ts(2554)
// example.ts(12, 19): 'b'의 인수가 제공되지 않았습니다.

const player = {
  age: 12,
};
// player.age = false;
// (property) age: number
// 'boolean' 형식은 'number' 형식에 할당할 수 없습니다.ts(2322)

let a = 'hello';
a = 'bye';
// a = 1; number' 형식은 'string' 형식에 할당할 수 없습니다.ts(2322)

// 좀더 구체적으로 말해준다. 진짜 Typescript 코드
// let b : boolean = "x"; type error
// ok
let b: boolean = false;
let c: number = 1;
let cc = [1, 2, 3];
// cc.push("1"); //'string' 형식의 인수는 'number' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)

let d: string = 'hello';
let e: any = 1;
let f: any = 'hello';
let g: any = false;
let h: any = [1, 2, 3];
let i: any = { a: 1, b: 2 };
let j: any = [1, 2, 3, 'hello'];
