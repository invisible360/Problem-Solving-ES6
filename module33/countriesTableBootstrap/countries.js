const loadData = () => {
    const url = 'https://restcountries.com/v3.1/all'
    fetch(url)
        .then(res => res.json())
        .then(data => passingData(data))
}
let count = 0;
const passingData = data => {
    // console.log (data.slice(0,10))
    const countryContainer = document.getElementById('country-container');
    data.forEach(element => {
        const tr = document.createElement('tr');
        count++;
        tr.innerHTML = `
        <th scope="row" class="border-0">${count}</th>
        <td class="border-0 text-center">${element.name.common}</td>
        <td class=" border-0 text-end d-flex align-items-center justify-content-center" onclick = "singleCountryDetails('${element.cca3}')"><button class="btn btn-info">Details</button></td>
        <td class="border-0 clear" id = "${element.cca3+'-info'}">Click Button For Details</td>
        `
        countryContainer.appendChild(tr);
        // document.getElementById (element.cca3+'-info').innerHTML = ``;
    });
}

const singleCountryDetails = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch (url)
    .then (res => res.json ())
    .then (data => {
        console.log (code);
        data = data[0];
        const detailsField = document.querySelectorAll ('.clear')
        // console.log (detailsField);
        for (const clear in detailsField) {
            detailsField[clear].innerHTML = ``
        }
        // for (let i = 0; i < detailsField.length; i++) {
        //     detailsField[i].innerHTML = ``;
        // }
        const singleCountry = document.getElementById (code+'-info');

        
        singleCountry.innerHTML = `
        <img class="img-fluid" src=${data.flags.png} alt="">
        <div>
            <p><span class="fw-bold">Name: </span>${data.name.common}</p>
            <p><span class="fw-bold">Capital: </span>${data.capital ? data.capital[0] : 'No Capital'}</p>
            <p><span class="fw-bold">Official-Name: </span>${data.name.official}</p>
            <p><span class="fw-bold">Continent: </span>${data.continents[0]}</p>
            <p><span class="fw-bold">Independent: </span>${data.unMember === true ? 'Yes' : 'No'}</p>
            <p><span class="fw-bold">UN-Member: </span>${data.independent === true ? 'Yes' : 'No'}</p>
            <button class = "btn btn-secondary"><a class="text-decoration-none text-white" href=${data.maps.googleMaps} target="_blank">Google-Map Link</a></button>
        </div>
        `
    })
}

loadData();