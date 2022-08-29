/* fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => res.json())
  .then(data => displayData(data))

  //function declaration
  const displayData = (data) => {
    console.log (data);

    for (const property in data) {
      // console.log (property);
    }
    const {userId, id, title, completed} = data;
    console.log (
    `
    userId: ${userId}
    id: ${id}
    title: ${title}
    completed: ${completed}
    `
    );
  } */

  const url = 'https://jsonplaceholder.typicode.com/users'
  
  const loadData = () => {
    fetch (url)
    .then (res => res.json())
    .then (data => displayData(data))
  }

  const displayData = (data) => {
    // console.log (data);
    const nameContainer = document.getElementById ('name-container');
    data.forEach(element => {
          console.log (element)
          const {name, id, email, username} = element; // destructuring 
          // console.log (name);
          const li = document.createElement ('li');
          // li.classList.add()// if want to add any style to the applend html tag
          li.classList.add('border')
          li.innerHTML = `
          <p>${id}.${name}</p>
          <p>Email: ${email}</P>
          Username: ${username}
          `;
          nameContainer.appendChild (li);
    });
  
  }