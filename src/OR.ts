type Team = 'red' | 'blue' | 'green' | 'yellow';
type health = 1 | 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50;
type Friend = {
  name: string;
  age: number;
  health: health;
};

/////////////////////////////////////////////////////
interface Player4 {
  nickname: string;
  healthBar: number;
  team: Team;
}
// =================================================
type Player2 = {
  nickname: string;
  healthBar: number;
  team: Team;
};
/////////////////////////////////////////////////////
const dondon3: Player2 = {
  nickname: 'dondon',
  healthBar: 10,
  team: 'red',
};

type Food = {
  name: string;
  price: number;
};
const pizza: Food = {
  name: 'pizza',
  price: 10,
};

type Drink = {
  name: string;
  price: number;
};

type Menu = Food | Drink;
// OR
