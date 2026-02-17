// arrow function
// var sum = (a, b) => {
//   console.log(a + b);
// };

// sum(4, 5);

// no nedd {} for single function
// var sum = (a, b) => console.log(a + b);
// sum(4, 6);

// array methodologies
// var array = [1, 2, 3, 4, 5];
// console.log("current array: ", array);

// // 1.map
// var newArray = array.map((data, index) => console.log(data * 2, "=>", index));
// console.log("new array => with map =>", newArray);

// o/p : [2,4,6,8,10]

// filter
// const newArray2 = array.filter((data) => data <= 3);
// console.log("filter =>", newArray2);

// o/p : [1,2,3]

// find
// var newarray3 = array.find((data) => data < 5);
// console.log(newarray3);

// 4. How it works internally
// Step	data	data < 4	Result
// 1	1	true	return 1 (stop)
// 2	2	true	not checked
// 3	3	true	not checked
// 4	4	false	not checked
// 5	5	false	not checked

// Because find() returns the first match only, it stops at 1.

// this i i should learn
// reduce
// var sum = array.reduce((accumulation, currentValue) => {
//   return accumulation * currentValue;
// }, 0);
// console.log(sum);

// var flipcart = [
//   {
//     price: 200,
//     quantity: 7,
//   },
//   {
//     price: 400,
//     quantity: 9,
//   },
//   {
//     price: 600,
//     quantity: 2,
//   },
//   {
//     price: 100,
//     quantity: 2,
//   },
// ];

// var totalcost = flipcart.reduce((accumulator, currentvalue) => {
//   return accumulator + currentvalue.price * currentvalue.quantity;
// }, 0);

// console.log(totalcost);

var myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 3000);

  setTimeout(() => {
    reject("error");
  }, 700);
});

myPromise.then((suc) => console.log(suc)).catch((err) => console.log(err));

// myPromise
// .then((suc) => console.log(suc))
// .catch((err) => console.log(err));

// var          → create variable
// myPromise    → variable name
// new Promise  → create promi se
// resolve()    → success
// reject()     → failure
// then()       → handle success
// catch()      → handle failure
