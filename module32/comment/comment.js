const url = 'https://jsonplaceholder.typicode.com/comments'
const loadData = () => {
    fetch(url)
        .then(res => res.json())
        .then(data => passData(data))
}

const passData = data => {
    console.log (data);
    const commentContainer = document.getElementById('comment-container');
    data.forEach(element => {
        console.log(element);
        const { name, email, body } = element;
        // console.log (body);

        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <p><span>Name:</span>${name}</p>
        <p><span>Email:</span>${email}</p>
        <p><span>Body:</span>${body}</p>
        `
        commentContainer.appendChild (div)
    });
}

loadData();