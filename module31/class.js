class Cards {
    name;
    goal;
    assist;
    constructor (name, goal, assist) {
        this.name = name;
        this.goal = goal;
        this.assist = assist;
    }
}

const p1 = new Cards ('Messi', 120, 150);
const p2 = new Cards ('Ronaldo', 110, 140);
const p3 = new Cards ('Neymar', 100, 120);
const p4 = new Cards ('Suarez', 60, 20);

const array = [p1, p2, p3, p4]

const cardsPlayer = obj => {
    const body = document.getElementById ('body');
    const div = document.createElement ('div');
    div.innerHTML = `
    <h3>Name:${obj.name}</h3>
    <h3>GOALS:${obj.goal}</h3>
    <h3>Assist:${obj.assist}</h3>
    <hr>
    `
    body.appendChild (div);
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    cardsPlayer (element);    
}
