// Async and await in js

// setTimeout(function () {
//   console.log("1");
// }, 3000);
// console.log("2");

// async means if we see the compiler if we write the two console.log
// statements then it prints line after another line because compiler executes
//  the first line and which is in ready

//  exactly async if i put time out in first line and compiler wont
//  wait for the timout completion it goes to another statement and executes after then it goes to time out
//  one like taht asynchronous

//  await we will wait the computer to some time time on the statement then only we will pass that to
//  the another statemtent

// var myPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("success");
//   }, 4000);
// });

// var Getourpromise = async () => {
//   var Getourpromiseresult = await myPromise;
//   console.log(Getourpromiseresult);
// };

// Getourpromise();

// var myPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("success");
//   }, 4000);
// });

// let Getourpromiseresult;

// var Getourpromise = async () => {
//   Getourpromiseresult = await myPromise;

//   console.log(Getourpromiseresult);
// };

// Getourpromise();

// console.log("out of promise");

// var myPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("done with promise");
//   }, 5000);

//   setTimeout(function () {
//     reject("err");
//   }, 1000);
// });

// var getOurPromise = async () => {
//   try {
//     let getOurPromiseResult = await myPromise;
//     console.log(getOurPromiseResult);
//   } catch (error) {
//     // throw new Error(error);
//     // console.log(error);
//     console.error(error);
//   }
// };

// getOurPromise();

// dom
