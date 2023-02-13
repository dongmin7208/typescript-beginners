//추상 클래스 만들기.
abstract class User {
  constructor(
    protected fistName2: string,
    protected lastName2: string // private fistName2: string, // private lastName2: string,
  ) {}
  abstract sayHi2(name2: string): string;
  abstract fullName2(): string;
}
class Player3 extends User {
  fullName2() {
    return `${this.fistName2} ${this.lastName2}`;
  }
  sayHi2(name2: string): string {
    return `Hello ${name2}. My name is ${this.fistName2} ${this.lastName2}`;
  }
}

// -----> interface Change

interface User3 {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}
class Player5 implements User3 {
  constructor(public firstName: string, public lastName: string) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.firstName} ${this.lastName}`;
  }
}

// interface vs type
// interface는 extends를 사용할 수 있지만 type은 사용할 수 없다.
// interface는 implements를 사용할 수 있지만 type은 사용할 수 없다.
// type vs interface
// type-> primitive type, union type, tuple type
// type-> extends, implements
// type-> alias
// type-> computed property
// type-> union type
// type-> intersection type
// type-> tuple type
// type-> conditional type
// type-> indexed access type
// type-> mapped type
// type-> type guard
// type-> type inference
// type-> type aliasing
// type-> type assertion
// type-> type compatibility
// type-> type parameter
// type-> type query
// type-> type reference
// type-> type widening
// type-> type narrowing
// type-> type predicate
// type-> type inference
