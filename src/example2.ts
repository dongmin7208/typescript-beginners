const Player2: {
  name: string;
  age?: number;
} = {
  name: 'park',
};

if (player.age < 10) {
}

type Age = number;
type Name = string;
type Player = {
  name: string;
  age?: Age;
};
const don: Player = {
  name: 'park',
};
const dondon2: Player = {
  name: 'park',
  age: 12,
};

// ex
function playerMaker(name: string) {
  return {
    name,
  };
}
const dong = playerMaker('dondon'); //ok
// dong.age = 12 //{ name: string; }' 형식에 'age' 속성이 없습니다.ts(2339)
// ex2
function playerMaker2(name: string): Player {
  return {
    name,
  };
}
const dong2 = playerMaker2('dondon'); //ok
dong2.age = 12; //{ name: string; }' 형식에 'age' 속성이 없습니다.ts(2339)

// const playerMaker = (name:string) : Player => ({name})
