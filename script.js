//1st question 

// function power(a, b) {
//     let ans = 1;
//     for (let i = 1; i <= b; i++) {
//         ans = ans * a;
//     }
//     document.write(ans);
// }
// power(2, 3);


//2nd question 


// let year = prompt("Enter Year");
// function leapYear(year) {
//     if (year % 4 == 0) {
//         document.write("Leap Year");
//     }
//     else {
//         document.write("Not a Leap Year");
//     }
// }
// leapYear(year);


//3rd question

// function findS(a, b, c) {
//     return (a + b + c) / 2;
// }
// function area(a, b, c) {
//     let s = findS(a, b, c);
//     let result = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     document.write("Area = " + result);
// }
// area(3, 4, 5);

// 4th question

// function average(m1, m2, m3) {
//     return (m1 + m2 + m3) / 3;
// }
// function percentage(m1, m2, m3) {
//     let total = m1 + m2 + m3;
//     return (total / 300) * 100;
// }
// function mainFunction() {
//     let m1 = 80;
//     let m2 = 90;
//     let m3 = 70;
//     let avg = average(m1, m2, m3);
//     let per = percentage(m1, m2, m3);
//     document.write("Average = " + avg + "<br>");
//     document.write("Percentage = " + per + "%");
// }
// mainFunction();

// 5th question

// function myIndexOf(text, letter) {
//     for (let i = 0; i < text.length; i++) {
//         if (text[i] == letter) {
//             return i;
//         }
//     }
//     return -1;
// }
// document.write(myIndexOf("Azka", "k"));

// 6th question

// let text = prompt("Enter a sentence");
// function removeVowels(text) {
//     let newText = "";
//     for (let i = 0; i < text.length; i++) {
//         if (text[i] == "a" || text[i] == "e" || text[i] == "i" || text[i] == "o" || text[i] == "u") {
//         }
//         else {
//             newText = newText + text[i];
//         }
//     }
//     document.write(newText);
// }
// removeVowels(text);

// 7th question

// let text = prompt("Enter a sentence");
// function countVowels(text) {
//     let count = 0;
//     for (let i = 0; i < text.length - 1; i++) {
//         let pair = text[i] + text[i + 1];
//         switch (pair) {
//             case "ea":
//             case "ui":
//             case "ae":
//             case "ai":
//             case "ee":
//             case "oo":
//             case "ou":

//                 count = count + 1;
//                 break;

//             default:
//                 break;
//         }
//     }
//     document.write("Total = " + count);
// }
// countVowels(text);

// 8th question

// let km = prompt("Enter Distance");
// function meter() {
//     let m = km * 1000;
//     document.write("Meters = " + m + "<br>");
// }
// function feet() {
//     let f = km * 3280.84;
//     document.write("Feet = " + f + "<br>");
// }
// function inches() {
//     let i = km * 39370.1;
//     document.write("Inches = " + i + "<br>");
// }
// function centimeter() {
//     let c = km * 100000;
//     document.write("Centimeters = " + c);
// }
// meter();
// feet();
// inches();
// centimeter();

// 9th question

// let hours = prompt("Enter Working Hours");
// if (hours > 40) {
//     let extra = hours - 40;
//     let pay = extra * 12;
//     document.write("Overtime Pay = Rs. " + pay);
// }
// else {
//     document.write("No Overtime");
// }

// 10th question

// let amount = prompt("Enter Amount");
// let hundred = Math.floor(amount / 100);
// amount = amount % 100;
// let fifty = Math.floor(amount / 50);
// amount = amount % 50;
// let ten = Math.floor(amount / 10);
// document.write("100 Notes = " + hundred + "<br>");
// document.write("50 Notes = " + fifty + "<br>");
// document.write("10 Notes = " + ten);