/* // console.log('hello')
const division = (num1, num2) => console.log (num1/num2);
division(4,2);

function min(nums) { 
    return Math.min(nums) 
    }
    console.log(min( [1,3,2 ]))

    const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);

const {x, y, z} = {x: 1, y1: 2, z: 3};
console.log (y);

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);

const product = {
    name: 'Laptop', 
    model:'Yoga 3',
    price:49000, 
    dusk: '512SSD'
    }

    const {price} =product;
    console.log (price); */

/*     const person = [
        {
          name: "rahim",
          age: 22,
          friends: ["rahim,karim,jabbar"],
        },
        {
          name: "rahim2",
          age: 22,
          friends: ["rahim,karim,jabbar"],
        },
        {
        name: "rahim3",
        age: 22,
        friends: ["rahim,karim,jabbar"],
      },
      ];

      console.log (person.slice(1,2))
    //   console.log (person.slice(1,2))
 */


const dreamGirl = [
    {
        sokina: {
            name: "bbu",
            height: "5.4",
            family: [{ father: "rock", mother: "shila", sister: "chinki" }],
            age: undefined,
            contactInfo: [
                {
                    facebook: {
                        link: "https://www.facebook.com/",
                        followers: "12545",
                        status: "single",
                        friendsList: [{ name: "rofik" }, undefined],
                    },
                },
                { instagram: "https://www.instagram.com/" },
            ],
        },
    },
];

console.log (dreamGirl[0].sokina.contactInfo[1].instagram)