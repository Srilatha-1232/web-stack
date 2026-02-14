// // strings

// var data = "hey THIS is just test purpose";

// console.log("data :", data);
// // lower case
// console.log("lower case:", data.toLowerCase());
// // upper case
// console.log("upper case:", data.toUpperCase());
// // slicing
// // console.log(data.slice(2, 6));
// console.log("slice : ", data.slice(2, 6));
// console.log("slice : ", data.slice(2, -2));

// // slice operation in data variable starting index at o and
// // what ever end point we gives it takes as "n-1"

// //  the starting index is of 2 and the ending is of 6 means 5 is the end value.
// // hey THIS is just test purpose - this is the string
// //  note space is also included as a indexed number
// //  op : y TH

// // here negative index means from 2nd index to from reverse it is negative index

// // here y is the 2 nd index and the o is the -2 index , so from y to purpo
// //op : y THIS is just test purpo

// // length
// // console.log(data.length);
// // console.log("length :", data.length);

// // replace
// console.log(data.replace("hey", "hi this"));
// // console.log("replace :", data.replace("hey", "hi"));

// // updation of data length
// // console.log("updated:", data);
// // console.log("updated length:", data.length);

// // includes
// // console.log(data.includes("THIS"));
// console.log("includes :", data.includes("rk"));
// // if we pass data in includes then it check the variable and
// //  if it present then it displays true
// //  if it not present then it displays false

// // slcicng in arrays

// arr1 = ["rk", "pk", "sk", "lk", "dk", "fk"];
// console.log(arr1);

// console.log("slice in array :", arr1.slice(2, 4));

// // parse

// var var1 = "2710";
// console.log(var1);
// console.log(parseInt(var1));

// //  it converts the string to int

// // fi we give string int and strtin then
// var varinvalid = "rk2710p";
// console.log(parseInt(varinvalid));

// // it just give nan it means not a number
// // if we start wit number and end with string then it
// // it prints out the number part and ignores the string part
// // if we start with the string then it ignores the complete element.
// // that's why it shows "nan"

// var var2 = 2710;
// console.log(var2.toString());
// console.log(var2.toLocaleString());

// // split operator

// var demo = "Good Morning";
// console.log(demo.split(" "));

// objects

var obj1 = {
  firstname: "ramakrishna",
  lastname: "gopavarapu",
  age: 21,
  address: "pdrl",
  height: 6,
};

obj1.newkey = 123;
obj1.fure = "rko";
console.log(obj1);

// arrays (map, find, filter, reduce)
//promises
//async
//await
//try and catch
//obj with multiple concepts
//functions (normal/named func, anonyomous func, arrow func)
// classes
