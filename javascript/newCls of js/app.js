// let lastName = "Ali";
// let roll = 25;
// console.log("lastName:" + lastName + "Roll" + roll);

// let x = 5;
// let y = 10;
// let z = 20;
// let result = x + y + z;
// console.log(result);


//take meaning full words in virables

// let studentName;
// let studenRollNumber;
// let studentAge;

// console.log(2 + 4 - 5 - 8 + 5);

// let x = 5;
// let y = 20;

// let result = x * y;
// console.log( result);

// let x = 10;
// let y = 3;
// let result = 10 % 3;
// console.log(result);

// let firstNum = prompt("Enter First Num");
// let secondNum = prompt("Enter second Num");
// let result = firstNum % secondNum ;
// console.log(result);

// let populationCountry = 2400000;
// console.log(populationCountry);
// // let dividedIntoTwo = 2;
// let result = populationCountry / 2;
// console.log(result);

//Artimatic Operators

// let a = 8;
// let b = 8;
// console.log("a =", a, "& b =",b);
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b);
// console.log("a ** b =", a ** b);

//unary operators

// let a = 8;
// let b = 8;
// a = a + 1;
// a++;
//same for b
// b = b +2;
// b++;
// console.log("a =", a, "& b =",b);
// a = a - 1;
// a--;
//same for b 
// b = b-1;
// b--;
// console.log("b =",b);
// console.log("a =",a);

//unary operators

// let a = 4;
// let b = 8;
// console.log("a =",a, "&b =",b);
// console.log("++a =",++a);
// console.log("a =",a)
// console.log("a++ =",a++);
// console.log("a =",a)
// console.log("b++ =",b++);
// console.log("b =",b) 
// console.log("++b =",++b);
// console.log("b =",b)
// console.log("--a =",--a);
// console.log("b =",b)
// console.log("b-- =",b--);
// console.log("b =",b)

// Artimatic operators

// let num = 2 * 10 / 4;
// console.log(num);
// let num2 = (2 + 2)* 5;
// alert(num2);

// let num = 5;
// num++;

// let num = 5;
// console.log(num++);
// console.log(num);

// let num = 5;
// console.log(--num);
// console.log(num);

// let num = 5;
// console.log(num--);
// console.log(num);

// trick of post and pre

// let a = 3; //4//5//4
// let b = 2;//3//4
// let result = a++ + a++ + b++ - a-- + b++;
// console.log(result);


// let a = 3; //4//5//4
// let b = 2;//3//4
// let result2 = ++a + ++a + ++b - --a + ++b;
// console.log(result2);

// trick of post
// let p = 24;
// console.log(p++);
// console.log(p);

//trick of pre

// let p1 = 24;
// console.log(++p1);

// let a = 6;
// a++;
// console.log(a);

// let b = 4;
// ++b;
// console.log(b);

// let x = 9;
// x--;
// console.log(x);

// let y = 8;
// --y;
// console.log(y);

//let num = 5; //6//7//6//5
// num++;
// console.log(num);
// let result = num++ + ++num - num-- + --num;
// console.log(result);

// let username = "Ali";
// alert("Thanks " + username);

// alert(`Thanks ${username}`);

// let message = "Thanks,";
// let banger = "!";
// alert( message + banger);
// alert(`${message} ${banger}`);

// alert("2 plus 2 is equles " + 2 + 2);

// alert("2 plus 2 is equles " - 2 + 2);

// let num = prompt("Input the number");
// console.log(typeof num);

// let num = Number (prompt("Input the number"));
// console.log(typeof num);


// let x = prompt("Input your data");
// let y = prompt("Input your data");
//   let y = number(prompt("Input your data"));
// alert(x + y);


// let firstName = "Fawad";
// let lastName = "Afd";
// alert(`My Name is  ${firstName} ${lastName}`);


// let age = prompt("inter your Age ");
// if(age > 18){
//     alert("Your are able .... to CNIC");

// } else{
//     alert("Your are under 18");
// }

// let tem = prompt("Please inter room tem");
// if(tem < 20 ){
//     alert("Stay in the Room");
// } else{
//     alert("Getout From the Room");
// }

//Assigment
// let temp = prompt("Please Inter the Room Temprature");
// if(temp>20){
// alert("Please Leave the Room");
// } else if(temp<20){
//     alert("Plesae Stay in the Room");
// }
// else{
//     alert("Your Choice");
// }

// let a = 2;
// let b = "2";
// console.log( a === b)

// let age = 30;
// if(age< 20){
// console.log("small")
// }
// else if(age > 25){
// console.log("Over age")
// }
// else{
//     console.log("Some thing more")
// }


// let marks = prompt("Pleasse inter your Marks");
// if(marks >= 80){
// alert("your gread is A+");
// }else if(marks >= 70  ){
// alert("Your gread is B")
// }
// else if(marks >= 50){
// alert("your are just pass")
// } else{
//     alert("fail")
// }

// let a = "21";
// let b = "3";
// console.log(a > b);

// let button = document.getElementById('btn');
// button.addEventListener('click' , () => {
//     const height = parseInt(document.getElementById('height').value);
//     const weight = parseInt(document.getElementById('weight').value);
//     const result = document.getElementById('output');
//     let height_status = false, weight_status = false;
//     if(height === '' || isNaN(height) || (height <= 0)){
//         document.getElementById('height_error').innerHTML = 'Please Provided a valid height';
//     } else{
//         document.getElementById('height_error').innerHTML = '';
//         height_status = true;
//     }
//     if(weight === ''|| isNaN(weight) || (weight <= 0)){
//         document.getElementById('weight_error').innerHTML = 'Please Provided a valid height';
//     } else{
//         document.getElementById('weight_error').innerHTML = '';
//         weight_status = true;
//     }
//     if(height_status && weight_status){
//         const bmi = (weight / ((height*height)/10000)).toFixed(2);
//         if(bmi < 18.6){
//             result.innerHTML = 'Under weight' + bmi;
//         }else if(bmi >= 18.6 && bmi < 24.9){
//             result.innerHTML = 'Normal weight' + bmi;
//         }else{
//             result.innerHTML = 'Over weight' + bmi;
//         }
//     } else {
//         alert("The form has errors");
//         result.innerHTML = '';
//     }
// })

// let height = prompt("Enter your height CM");
// let weight = prompt("Enter your weight KG");
// let result = weight/(height*height)*10000;
// if(result < 18.6){
//     alert("your under weight");
// } else if(result >= 18.6 && result < 25 ){
//     alert("Normal weight");
// }else{
//     alert("Over weight");
// }

 // && 
     
    //  true && ture -> ture
    //  true && false -> false
    //  false && true -> false
    //  false &&  false -> false

    //  ||
    //  ture || ture -> ture
    //  false || true -> ture
    //  ture || false -> ture
    //  false || false -> false

    //  !
    //  !0 -> true
    //  !""-> ture
    //  !"abc"-> false

// let weight = 200;
// let time  = 5;
// if(weight > 300 && time < 6){
//     alert("Come to our tryout");
// } else{
//     alert("come to our cookoutD!");
// }



// let age = 20;
// let islic = true;
// if(age >= 18 && !islic ){
//     alert("now You can drive");
// } else{
//     alert("Sorry you can't drive");
// }

// let num = -50;
// let result = !num;
// console.log(result);

// let n = "fawad";
// let username = "khan";
// let result = n && username;
// console.log("Result ", result);

// let n = "fawad";
// let username = "khan";
// let result = n || username;
// console.log("Result ", result);

// let n = "fawad";
// let username = "khan";
// let result = n || username;
// console.log("Result ", !result);


// let height = 5.8;
// let edu = 16;
// if(height >= 5.8 || edu < 16){
    
//     if(height >= 5.8 || edu >= 16){
//         alert("Your are officer")
//     } else{
//         alert("Your are nothing");
//     }
// }

// Array

// let num = 1; //Variable

// let nums = [1,2,3,4,"car",true,[2,3,4,"cat",5]];//array

// console.log(nums[6][3]);

// let nums = [1,2,3,4,"car",true,[2,3,4,"cat",5]];
//  nums[3] += 6;
//  nums[5] = !nums[5]
//  console.log(nums[3])
//  console.log(nums[5]);

// let cities = ["Peshawar","Islamabad","lahor", "fata","texila"];
// console.log("wellcome to ", cities[0]);

// let m1 =[
//  [1,2,3], 
//  [2,3,4],
//  [1,2,8], 
// ];

//  let m2 =[
//     [2,4,5],
//     [7,3,7],
//     [2,3,5],
// ];

// let value1 = m1[0][0] + m2[0][0];
// console.log(value1);
// let value2 = m1[0][1] + m2[0][1];
// console.log(value2);
// let value3 = m1[0][2] + m2[0][2];
// console.log(value3);
// let value4 = m1[1][0] + m2[1][0];
// console.log(value4);
// let value5 = m1[1][1] + m2[1][1];
// console.log(value5);
// let value6 = m1[1][2] + m2[1][2];
// console.log(value6);
// let value7 = m1[2][0] + m2[2][0];
// console.log(value7);
// let value8 = m1[2][1] + m2[2][1];
// console.log(value8);
// let value9 = m1[2][2] + m2[2][2];
// console.log(value9);

//take two matrix 3 by 3 and add each row with the second matrix

// let m1 = [[1,2,3],
//           [4,6,3],
//           [5,4,2],
//         ];
// let m2 =[[2,5,8],
//          [4,7,9],
//          [6,3,8],
//         ];

// console.log(m1[0][0]+ m2[0][0]);
// console.log(m1[0][1] + m2[0][1]);        
// console.log(m1[0][2] + m2[0][2]);       
// console.log(m1[1][0] + m2[1][0]);       
// console.log(m1[1][1] + m2[1][1]); 
// console.log(m1[1][2] + m2[1][2]);
// console.log(m1[2][0] + m2[2][0]);
// console.log(m1[2][1] + m2[2][1]);
// console.log(m1[2][2] + m2[2][2]); 

// let fruits = ["Mango", "Apple","Banana","graps"];
// console.log(fruits);
// fruits.pop();
// let result = fruits.pop();
// console.log(result);


//Loops
//for loops
 
// for(let i = 100; i>0; i--){
//     console.log("Hi", i);
// }

// let i = 0;
// for(;i<99;i++) {
// console.log(i);
// }

// for(let i=0; i<10;i++){
//     console.log(i);
// }


// let array =[["car","cat","apple","Tv"],
//  [1,2,3],
//  [4,5,6],
// ];
// for( let i= 0;i<array.length;i++){
//     for(let j = 0;j<array[i].length;j++){
//         console.log(array[i][j]);
//     }
//     // alert(i);
// }


// let rollNum = [1,2,3,4,5,6,7,8,9,10];
// for(let i= 0;i<rollNum.length;i++){
//     if(i==5){
//         break
//     }
//     console.log((rollNum[i]),rollNum[i]*2);
// }


// let arrays =[[1,2,3],[6,5,4],[7,8,9]];
// for(let i=0;i<arrays.length;i++){
//     for(let j =0;j<arrays[i].length;j++){
//         console.log(arrays[i][j],(arrays[i][j]*arrays[i][j]),(arrays[i][j]*arrays[i][j]*2)
//         );
//     }
// }

// Ternary operater

// let isOpen = true;
// let res;
// if(isOpen){
//     res ="The Door is open";
// }else{
//     res="The Door is close";
// }
// console.log(res)
// Ternary operator

// let isOpen = true;
// let res = isOpen ? "The Door is Open" : "The Door is close";
// console.log(res);

// let isOpen = false;
// let res = `the Door is ${isOpen ? "Open" : "Close"}`;
// console.log(res);

// let isBall = ture;
// let res = ` Is ${isBall ? "six" : "out"}`;
// console.log(res);

// Targeting
// slice mean tukra and also it target the words in string

// let fName = "Fawad";
// console.log(fName.length)
// console.log(fName.slice(1,4));

// trim is use for removing space

// let fName = "   Fawad   ";
// console.log(fName.trim())
// console.log(fName.slice(1,4));


// let fName = "   Fawad   ";
// console.log(fName.toLocaleLowerCase())
// console.log(fName.slice(1,4));


// let fName = "   Fawad   ";
// console.log(fName.replace("w","a"))
// console.log(fName.slice(1,4));

//concat mean combing;

// let fName = "Fawad";
// console.log(fName.concat("aa","www"))
// console.log(fName.slice(1,4));

// let m = Math;
// console.log(m);

// let x=(Math.random() * 6 + 1);
// console.log(x);
// let z = Math.random(x)
// let y = Math.trunc(z);
// console.log(y);


// let x = 3.5;
// console.log(Math.floor(x));
// console.log(Math.ceil(a));
// console.log(Math.pow(2, 3));
// console.log(Math.sqrt(25));


// let x = (Math.random() * 10 + 11);
// console.log(Math.trunc(x));

// let num1 = "20";
// let num2 = "4";
// let num_1 = parseFloat(num1);
// let num_2 = parseFloat(num2);
// let total = num_1 + num_2;
// console.log(total);

// New Date is Object

// let nowDate = new Date ();
// console.log(nowDate);

// manualy date and years and seconds and Milliseconds

// const nowDate = new Date();
// console.log(nowDate.getFullYear());
// console.log(nowDate.getMonth());
// console.log(nowDate.getDay());
// console.log(nowDate.getHours());
// console.log(nowDate.getSeconds());
// console.log(nowDate.getMilliseconds())

//////////////////////////////////////////
// local Function

// function adding(num1, num2){
//     return num1 + num2;
// }
// adding(2, 2);
// console.log(adding(5, 5));

//////////////////////////////////////////
// Anonamus function

// let sub = function (num1, num2){
//     return num1 - num2;
// }
// console.log(sub(25,5));

/////////////////////////////////////////

// Arroy function

// let xyz2 = (num1 , num2)=>{
//     return num1 / num2;
// }
// console.log(xyz2(30, 3));

//////////////////////////////////////////

// let fawad = (num)=>{
//     return num*num;
// }
// console.log(fawad(6));


//////////////////////////////////////////

// let xyz3 = (num7) => num7*num7;
// console.log(xyz3(8));

/////////////////////////////////////////

// let xyz4 = num7 



let array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let arr =(vawal)=>{
     for( let i = 0; i<array.length; i++){
      if(array[i] === "a"||array[i]==="e"|| array[i]==="i" || array[i]==="o" || array[i]==="u")

      console.log(array(i));
    }
};
arr(array)












