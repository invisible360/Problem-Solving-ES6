const url = 'https://api.kanye.rest/'

const loadData = () => {
    fetch(url)
    .then (res => res.json())
    .then (data => passData (data))
}

const passData = data => {
    // console.log (data);
    const {quote}=data;
    // console.log (quote)

    const blockQuote = document.getElementById ('quote')
    blockQuote.innerText = quote;
}