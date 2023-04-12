const sourceImage = "https://api.thecatapi.com/v1/images/search";

const button = document.querySelector(".container button");
const image = document.querySelector(".container img");

button.addEventListener("click", function() {
    fetch(sourceImage)
        .then(response => response.json())
        .then(data => image.setAttribute("src", data[0].url))
});


