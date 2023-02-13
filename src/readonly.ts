interface User4 {
  // readonly name: string;
  name: string;
}
interface Player6 extends User4 {}
const dondon11: Player6 = {
  name: 'dondon',
};

dondon11.name = 'dondon2';
