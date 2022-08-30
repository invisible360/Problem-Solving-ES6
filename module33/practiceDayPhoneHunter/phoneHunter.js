const loadData = async (search) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;

    const res = await fetch(url);
    const data = await res.json();
    passingData(data.data);
}

const toogleSpinner = (isLoading) => {
    const spinnerField = document.getElementById('spinner');
    if (isLoading) {
        spinnerField.classList.remove('hidden');
    }
    else {
        spinnerField.classList.add('hidden')
    }
}

const passingData = (data) => {
    // no phone found message
    if (data.length === 0) {
        document.getElementById('not-found-field').classList.remove('hidden');
        toogleSpinner(false);
    }
    else {
        document.getElementById('not-found-field').classList.add('hidden');
        toogleSpinner(false);
    }
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = ``;
    data.forEach(phone => {
        const { image, phone_name, slug } = phone;

        const divPhone = document.createElement('div');
        divPhone.innerHTML = `
        <div class="card bg-base-100 shadow-xl">
            <figure><img src=${image} alt="Shoes" /></figure>
            <div class="card-body flex items-center justify-between flex-row">
                <div>
                    <h2 class="card-title">${phone_name}</h2>
                </div>

                <!-- The button to open modal -->
                <div>
                    <label onclick = "openDetails('${slug}')" for="my-modal-6" class="btn modal-button">Details</label>
                </div>
            </div>
        </div>
        `
        toogleSpinner(false);
        phoneContainer.appendChild(divPhone);

    });
}

const openDetails = async (phoneId) => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`

    const res = await fetch(url);
    const data = await res.json();
    openModal(data.data);
}

const openModal = (phoneDetails) => {
    // destructuring
    const { name, brand, releaseDate, mainFeatures, others } = phoneDetails;
    const { storage, displaySize, chipSet, memory, sensors } = mainFeatures;
    const { WLAN, Bluetooth, GPS, NFC, Radio, USB } = others;

    const specsContainer = document.getElementById('specs');
    specsContainer.innerHTML = `
    <h3 class="font-bold text-2xl">${name}</h3>
    <p class="py-1"><span class="font-bold">Brand: </span>${brand}</p>
    <p class="py-1"><span class="font-bold">Release Date: </span>${releaseDate}</p>
    <p class="py-1"><span class="font-bold">Main Features: </span></p>
    <ul>
        <li>Storage: ${storage}</li>
        <li>Display Size: ${displaySize}</li>
        <li>Chipset: ${chipSet}</li>
        <li>Memory: ${memory}</li>
        <li>Sensors: ${sensors.join (', ')}</li>
        
    </ul>
    <p class="py-1"><span class="font-bold">Other Features: </span></p>
    <ul>
        <li>WLAN: ${WLAN}</li>
        <li>Bluetooth: ${Bluetooth}</li>
        <li>GPS: ${GPS}</li>
        <li>NFC: ${NFC}</li>
        <li>Radio: ${Radio}</li>
        <li>USB: ${USB}</li>
    </ul>
    <div class="modal-action">
        <label for="my-modal-6" class="btn">Okay</label>
    </div>
    `
}


const takeSearchValue = () => {
    const searchTextField = document.getElementById('search-field');
    const searchText = searchTextField.value
    toogleSpinner(true);
    loadData(searchText);
    searchTextField.value = ''
}

const searchText = (event) => {

    if (event.key === 'Enter') {
        takeSearchValue();
    }
}

const searchBtn = () => {
    takeSearchValue();
}
