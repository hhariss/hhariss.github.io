let catButton = document.getElementById('cat-btn')

let descriptions = [
    "his name is sherbert",
    "he doesn't know basic math",
    "he has 1 and a half braincell",
    "his name is iphone 3",
    "meow",
    "u think he knows the pythagorean theorem?",
    "his name is stinky"
]

catButton.addEventListener("click", evt => {
    let catDiv = document.getElementById('cat-div');
    let descDiv = document.getElementById('description');

    fetch('https://api.thecatapi.com/v1/images/search?')
    .then(res => res.json())
    .then(cats => {
        cats.forEach(cat => {
            catDiv.innerHTML = `<img src="${cat.url}" alt="kitty" width=300px>`
            descDiv.innerHTML = `${descriptions[Math.floor(Math.random() * descriptions.length)]}`
        });
    })
})