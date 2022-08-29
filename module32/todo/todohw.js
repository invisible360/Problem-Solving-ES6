const url = 'https://jsonplaceholder.typicode.com/todos'
const loadData = () => {
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = data => {
    // console.log (data);
    const todoContainer = document.getElementById('todo-container')
    data.forEach(element => {
        // console.log(element);
        const { id, title, completed: done } = element;

        const div = document.createElement('div');
        div.classList.add ('border')
        div.innerHTML = `
        <h1>Id: ${id}</h1>
        <p>Title: ${title}</p>
        <p>Completed: ${done === true ? 'Completed-' : 'Not Completed-'} (${done})</p>
        `
        todoContainer.appendChild (div);
    });
}
loadData()