'use strict';


// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {

    // Take empty array revArray
    const revArray = [];
    const length = string.length - 1;
      
    // Looping from the end
    for(let i = length; i >= 0; i--) {
        revArray.push(string[i]);
    }
      
    // Joining the array elements
    return revArray.join('');
    
    // return str.split('').reverse().join('')
    }
// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

const detectFace = (arr) => {
    //write your code here ...
    // const arr1=arr.split("^_^");
    // let face="^_^";

    const newArr=arr.filter((element)=>element.match(/\w+ (\^\_\^)/ig)!= null);
    return newArr;
    



    // return arr.match(/\w+ (\^\_\^)/ig);

   
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"

const eveCharacter = (str) => {
    //write your code here ...
    var newString = str.split("");
    // for(let i=0;i<=newString.length;i++){
    // if(newString.indexOf(i)%2 == 0){
    //   return newString.indexOF(i);
    // }
    const newArr=[];
    for (let i = 0; i < newString.length-1; i++) {
        
     if(i==0 || i%2==0){
        newArr.push(newString[i]);
     }
      // this line doesn't work properly
      
    }
    return newArr.join('');
    
    }

// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.

// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];


const chickenGradients = (arr) => {
    //write your code here ...
}
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };
