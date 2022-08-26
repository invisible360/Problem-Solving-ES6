//Practice Problem: map(), filter(), find ()
/* 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number. */
/* 
const oddNumber = [1, 3, 5, 7, 9];

//for loop:
const evenNumber = [];
for (let i = 0; i < oddNumber.length; i++) {
    const element = oddNumber[i];
    evenNumber.push (element+1);
}
console.log (evenNumber);

//using map
const evenNumberMap = oddNumber.map (x=>x+1);
console.log (evenNumberMap);
 */
// ============================

/* 2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method. */
/* 
const array = [33, 50, 79, 78, 90, 101, 30, 50];
const divisibleBy10 = array.filter(x => x % 10 === 0)
console.log (divisibleBy10);
 */
// ============================

/* 3) Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3. */
/* 
const array = [33, 50, 79, 78, 90, 101, 30, 50];
const divisibleBy10UsingFind = array.find(x => x % 10 === 0)
console.log (divisibleBy10UsingFind);
*/
// Comments: find return only one value and it is the first element that match the condition
// ============================

//practice problem: reduce ()
/* 1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method. */
/* 
//for loop
const number = [2, 9, 17, 22];
let sum = 0;
for (let i = 0; i < number.length; i++) {
    sum += number[i];
}
console.log (sum);

//.reduce () methods
const reduceSum = number.reduce ((x,y) => x+y, 0);// 2 parameter, current and previous, initial value=0
console.log (reduceSum);
 */
// ============================

/* 1) Challenging: Follow below array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method. */
/* 
const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'tina', age: 22 },
    { name: 'rina', age: 20 },
]

//for loop
let sum = 0;
for (let i = 0; i < people.length; i++) {
    sum += people[i].age;
}
console.log (sum);

//.reduce ()
const reduceSum = people.reduce ((x,y) => x + y.age, 0);
console.log (reduceSum);

 */
// ============================
//practice Problem: Access Object Values
//1
/* 
let data = {
    location: [
        {
            latitude: '34.5 , 37.8',
            longitude: '98.77, 58.7',
            city: 'Hyderabad',
            country: 'India',
        }
    ]
};

console.log (data.location[0].city);
 */
//2
/* 
const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  }

  //Console the value of email
  console.log (user.email);

  //Console the value of address
  console.log (user.address);
  
  //Console the value of city
  console.log (user.address.city);
  
  //Console the value of lat
  console.log (user.address.geo.lat);
  
  //Console the value of company name
  console.log (user.company.name);
 */
  