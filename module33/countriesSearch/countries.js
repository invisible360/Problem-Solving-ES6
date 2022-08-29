const loadData = () => {
    const url = `https://restcountries.com/v3.1/all`
    fetch(url)
        .then(res => res.json())
        .then(data => passData(data))
}

const passData = data => {
    console.log(data);
    const selectSingleCountry = document.getElementById('country');

    data.forEach(element => {
        const option = document.createElement('option')
        option.setAttribute('value', element.cca3)
        option.innerText = element.name.common;
        selectSingleCountry.appendChild(option)
    });

}

const countryCode = () => {
    const countryName = document.getElementById('country').value
    const url = `https://restcountries.com/v3.1/alpha/${countryName}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            data = data[0];
            const singleCountry = document.getElementById('single-country');
            singleCountry.innerHTML = ``
            const div = document.createElement('div');
            div.classList.add('single-country');
            div.innerHTML = `
            <img src=${data.flags.png} alt="">
                <div>
                    <p><span>Name: </span>${data.name.common}</p>
                    <p><span>Capital: </span>${data.capital ? data.capital[0] : 'No Capital'}</p>
                    <p><span>Official-Name: </span>${data.name.official}</p>
                    <p><span>Continent: </span>${data.continents[0]}</p>
                    <p><span>Independent: </span>${data.unMember === true ? 'Yes' : 'No'}</p>
                    <p><span>UN-Member: </span>${data.independent === true ? 'Yes' : 'No'}</p>
                    <p><a href=${data.maps.googleMaps} target="_blank">Google-Map Link</a></p>
                </div>
             `
            singleCountry.appendChild(div);
        })
}


loadData();