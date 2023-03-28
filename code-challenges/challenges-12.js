'use strict';
// Important Note: 
// Kindly use filter instead of for in all of your solutions

// Resource:
// Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
// 
// Given an array of values use filter to extract odd values.
//
// Input:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200] 
// Output:
// [89, 41, 31, 111, 31]
// 

const oddFiltration = (arr) => {
    const result =arr.filter(element=>element%2 !== 0);
    return result;

}

// Challenge 02:
// optional:
// 
// Given data of candidates return the candidates CVs that have more than 4 years of experience 
// and works as JS developer 

// Input:
// var cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 4,
//         tech: "Java"
//     }
// ]
//
// Output:
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name

const cvsFiltration = (arr) => {

//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].yearsOfExperience > 4) {
//             if (arr[i].LastName == null) {
//                 newArr.push({
//                     fullName: arr[i].firstName,
//                     tech: arr[i].tech
//                 })
//             } else {
//                 newArr.push({
//                     fullName: arr[i].firstName + " " + arr[i].LastName,
//                     tech: arr[i].tech
//                 })
//             }
//         }
//     }
//     const result =newArr.filter((object)=> object.tech=="JS");
//     return result;
// } 
const result =arr.filter((object)=>object.yearsOfExperience >4 && object.tech=="JS");

let newArr=[];
for(let i=0;i<result.length;i++){
     newArr.push({
            fullName: arr[i].firstName+" "+arr[i].LastName,
            tech: arr[i].tech
        })
}
return newArr;
}
   
    


// Challenge 03:
// optional:
// 
// Given an array of words filter out the words that contain one of the vowels (a, e, i, o, u)

// Input: ['car', 'boy', 'spy', 'building', 'why', 'dry' ]
// Output: ['spy', 'why', 'dry']
// 

const vowelsFiltration = (arr) => {
   
const newArr=arr.filter((element)=>element.match(/[aeiou]/ig)==null);
return newArr;

}




const skillComparison = (arr1, arr2) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------


module.exports = { oddFiltration, cvsFiltration, vowelsFiltration, skillComparison };