/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////

// let arr = ["a", "b", "c", "d", "e"];

// //Hàm slice() dùng để cắt mảng rồi trả lại một mảng mới
// console.log(arr.slice(2)); //arr=['c', 'd', 'e']  cắt mảng tử vị trí thứ 2 trong mảng và trả về các phần tử đằng sau phần tử số 2 trong mảng
// console.log(arr.slice(2, 4)); //arr=['c','d'] cắt mảng từ phần tử thứ 2 đến phần tử thứ 4 trong mảng
// console.log(arr.slice(-2)); //arr=['d','e'] cắt 2 phần tử ở cuối mảng
// console.log(arr.slice(-1)); //arr=['e'] cắt lấy 1 phần tử ở cuối mảng
// console.log(arr.slice(1, -2)); //arr=['b','c'] bỏ một phần tử trong mảng và bỏ 2 phần tử cuối mảng
// ==========================//

//Hàm splice() dùng để xóa phẩn tử trong mảng
// arr.splice(-1);//xóa phần tử ở cuối mảng và trả về mảng mới
// console.log(arr);
// arr.splice(1,2);//tham số thứ nhất là phần tử bắt đầu phần tử thứ 2 là số phần tử muốn xóa
// console.log(arr)

// ==========================//
// hàm reverse() dùng để đảo ngược mảng
// arr = ["a", "b", "c", "d", "e"];
// const arr2 = ["j", "i", "h", "g", "f"];
// arr2.reverse(),//[ 'f', 'g', 'h', 'i', 'j' ]
// console.log(arr2);

// ============concat()==============//
//Hàm concat() dùng để nốt hai mảng với nhau và trả về một mảng mới
// const letters = arr.concat(arr2)
// console.log(letters)//['a', 'b', 'c', 'd','e', 'f', 'g', 'h','i', 'j']
// console.log([...arr,...arr2]);//cũng trả về kết quả giống hàm concat

// ============join()============== //
//Hàm join() dùng để biết một mảng thành một chuỗi mới bằng
//cách nốt các phần tử có trong mảng lại với nhau
// console.log(letters.join());//a,b,c,d,e,f,g,h,i,j// sẽ trả về một chuỗi ngăn cách nhau bằng dấu phẩy
// console.log(letters.join('-'))//a-b-c-d-e-f-g-h-i-j sẽ trả về một chuỗi ngăn cách nhau bằng đấu -
// console.log(letters.join(''))//a-b-c-d-e-f-g-h-i-j sẽ trả về một chuỗi không ngăn cách nhau bằng đấu gì cả

///////////////////////////////////////////////////////////

// ====================hàm at()==================//
//Hàm at() dùng để lấy giá trị của số nguyên trong mảng ra
// const array = [10, 22, 31, 4];
// console.log(array.at(0));// kết quả : 10,
// console.log(array.at(-1))// kết quả : 4,Với số âm sẽ trả về phần tử ở cuối mảng

////////////////////////////Looping Array ForEach///////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i} You deposied ${movement}`);
//   } else {
//     console.log(`Movement ${i} You withdrew ${Math.abs(movement)}`);
//   }
// }

// // cách viết 1;
// console.log("---- FOREACH ----");
// movements.forEach((movement, i, arr) => {
//   if (movement > 0) {
//     // console.log(`You deposied ${movement}`);
//     console.log(`Movement ${i} You deposied ${movement}`);
//   } else {
//     // console.log(`You withdrew ${Math.abs(movement)}`);
//     console.log(`Movement ${i} You withdrew ${Math.abs(movement)}`);
//   }
// });
// // cách viết 2;
// console.log("---- FOREACH ----");
// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     // console.log(`You deposied ${movement}`);
//     console.log(`Movement ${i} You deposied ${movement}`);
//   } else {
//     // console.log(`You withdrew ${Math.abs(movement)}`);
//     console.log(`Movement ${i} You withdrew ${Math.abs(movement)}`);
//   }
// });

////////////////////////////ForEach with maps and sets///////////////////////////////

// const currencies = new Map([
//   ["USD", "United States Dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// currencies.forEach((value, key, map) => {
//   console.log(`${value}: ${key}`);
// });

// const currenciesSet = new Set(["USD", "EUR", "GBP"]);

// console.log("--- forEach with set ---");
// currenciesSet.forEach((value, key, set) => {
//   console.log(`${value}: ${key}`);
// });

///////////////////////////////Project 'Bankist' app////////////////////////////

// ====================Map filter and reduce======================= //

//  Map // Tạo ra một mảng mới chứa kq của việc gọi hàm
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsUSD = movements.map((mov) => mov * eurToUsd);
// console.log(movementsUSD);

// const movementsDescriptions = movements.map((value, index) =>
//   value > 0
//     ? `Movement ${index} You deposied ${value}`
//     : `Movement ${index} You withdrew ${Math.abs(value)}`
// );
// console.log(movementsDescriptions);

// filter // Tạo ra một bản sao của một phần tử đã đc lọc qua bởi điều kiện logic

// const deposits = movements.filter((mov) => {
//   return mov > 0;
// });

// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrew = movements.filter((mov) => mov < 0);
// console.log(withdrew);

// const withdrewFor = [];
// for (const mov of movements) if (mov < 0) withdrewFor.push(mov);
// console.log(withdrewFor);

//reduce
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const balance = movements.reduce((acc, curr, i, arr) => acc + curr, 0);
// console.log(balance);

// //max value

// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// },movements[0]);
// console.log(max);

// ===find()=== //Trả về phần tử đầu tiên có trong mảng với điều kiện
// const firstWithdrawal = movements.find((mov) => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// ======================Some and every====================== //

// console.log(movements);

// console.log(movements.includes(-130));

// // condition
// console.log(movements.some((mov) => mov === -130));

// const anyDeposits = movements.some((mov) => mov > 1500);
// console.log(anyDeposits);

//=============================Flat and flatMap=========================== //

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(1))

//=========================Sorting Arrays================================//

//String
// const owners = ["Jonas", "Zach", "Adam", "Martha"];
// console.log(owners.sort());
// console.log(owners);

// //Number
// console.log(movements);
// // console.log(movements.sort());
// movements.sort((a, b) => b - a);
// console.log(movements);

// movements.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (a < b) {
//     return -1;
//   }
// });
// console.log(movements);

// ==================More way of creating and Filling Array================= //

const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
x.fill(1,3,5);
console.log(x);

const z = Array.from({length: 7},(_,i)=>i+1);
console.log(z);