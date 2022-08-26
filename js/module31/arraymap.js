const doubleIt = x => x * 2;
// console.log (doubleIt(2)); 
const numbers = [2,3,4,5,6]

const makeDouble = numbers.map (doubleIt);
// console.log (makeDouble);

const add2 = numbers.map (x => x + 2)
// console.log (add2);

const triple = [4,2,4,3,1].map(x => x*3)
// console.log (triple);

const names = ['zakir', 'rakib', 'zadid', 'niloy', 'emon'];
const nameLength = names.map (x => x.length);
// console.log (nameLength);

const products = [
    {id: 1, name: 'laptop', price: 450},
    {id: 2, name: 'Ipone', price: 900},
    {id: 3, name: 'tablet', price: 200},
    {id: 4, name: 'play Station', price: 650}
]

const items = products.map (x => x.name); 
const price = products.map (x => x.price) 
// console.log (items);
// console.log (price);

const friends = ['imran', 'nishu', 'peal', 'noor a rabbi', 'opu', 'abeer', 'osru']

const mayFriend = friends.forEach (x => x+'-fx' )
console.log (mayFriend);