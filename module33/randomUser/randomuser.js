// https://randomuser.me/

const url = 'https://randomuser.me/api/?results=51'
const loadData = () =>{
    fetch (url)
    .then (res => res.json())
    .then (data => passingData (data))
}

const passingData = data => {
    // console.log (data.results);
    const userContainer = document.getElementById ('user-container');
    data.results.forEach(element => {
        // console.log(element);
        
        //destructuring
        const {picture, name, email, gender, location, nat: nationality} = element;
        const {title, first, last} = name;
        const {city} = location;
        const {large: photo} = picture;

        const div = document.createElement ('div');
        div.classList.add ('user-profile');
        div.innerHTML = `
        <img src=${photo} height="128px" alt="">
            <div style="line-height: 10px; padding: 5px;">
                <h3>Name: ${title} ${first} ${last}</h3>
                <p>Email: ${email}</p>
                <p>Gender: ${gender}</p>
                <p>Location: ${city}</p>
                <p>Nationality: ${nationality}</p>
            </div>
        `
        userContainer.appendChild(div)

    });

}

loadData ();