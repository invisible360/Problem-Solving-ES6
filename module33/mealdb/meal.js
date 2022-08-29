const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => passingData(data.meals))
}

const passingData = meals => {
    // console.log (meals);
    const mealContainer = document.getElementById('meal-container')
    mealContainer.innerHTML = ``;// clear the previous body
    
    meals.forEach(element => {
        // console.log(element);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick = "selectedFood (${element.idMeal})" class="card h-100 home-card" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src=${element.strMealThumb} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.strMeal}</h5>
                <p class="card-text">${element.strInstructions.slice(0,200)}</p>
            </div>
        </div>
        `
        mealContainer.appendChild (div);
    });
    
}

const selectedFood = (idmeal) => {
    // console.log (idmeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`
    fetch (url)
    .then (res => res.json())
    .then (mealId => passingMealId(mealId.meals[0]))
}

const passingMealId = mealId => {
    // console.log(mealId);    
    const singleFoodContainer = document.getElementById ('single-food-container');
    singleFoodContainer.innerHTML = `
    <img src=${mealId.strMealThumb} class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${mealId.strMeal}</h5>
        <p class="card-text">${mealId.strInstructions.slice(0,200)}</p>
    </div>
    `   
}

document.getElementById ('search-btn').addEventListener ('click', function () {
    const textField = document.getElementById ('search-text');
    const text = textField.value
    loadMeals (text);
    textField.value = ''
})

loadMeals('');