// practice problem -1
/* 1) Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.
*/
/* 
const multiply = (num1, num2, num3) => num1 * num2 * num3 ;
const multiplyResult = multiply (2,3,4);
console.log (multiplyResult);
*/

// =================
/* 2) Write the following sentence in three lines and print the result: I am a web developer. I love to code. I love to eat biryani. */
/* 
const threeLines = `I am a web developer.
I love to code.
I love to eat biryani`;
console.log (threeLines);
*/
// =================
/* 3) Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result. */
/* 
const addDefaultParameter = (num1, num2 = 12) => num1 + num2;
const result = addDefaultParameter (20);
console.log (result);
*/
// =================
// =================
// practice problem -2
/* Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result. */
/* 
const myEveneLengthFriends = nameOfArray => {
    const evenFriends = [];
    for (let i = 0; i < nameOfArray.length; i++) {
        const nameLength = nameOfArray[i].length;
        if (nameLength % 2 === 0) {
            evenFriends.push(nameOfArray[i]);
        }
    }
    return evenFriends;
}

const newEvenFriendList = myEveneLengthFriends(['mohammad', 'rakib', 'imran', 'sima', 'zakir']);
console.log(newEvenFriendList);
*/
// =================
// =================
// practice problem -3
/* Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result. */
/* 
const sumOfSquare = arrayOfNumbers => {
    const squaredElement = [];
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        squaredElement.push(arrayOfNumbers[i] * arrayOfNumbers[i])
    }
    let sum = 0;
    for (let i = 0; i < squaredElement.length; i++) {
        sum = sum + squaredElement[i];
    }
    const avg = sum / squaredElement.length;
    return avg;
}
const numberOfArray = [2, 3, 3, 2, 4];
const result = sumOfSquare(numberOfArray);
console.log(result);
*/
// =================
// =================
// practice problem -4
/* Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the result
Print the result. */
/* 
const findMaximum = (numberOfArray1, numberOfArray2) => {
    const combineArray = [...numberOfArray1, ...numberOfArray2]; // spread operator
    const maximum = Math.max(...combineArray);
    return maximum;
}
const array1 = [2,3,4,56,74,87,3];
const array2 = [24,35,45,546,754,8,35];

const result = findMaximum (array1, array2);
console.log (result);
 */
