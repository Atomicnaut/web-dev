const APILINK = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2ee9a25c5d7ff3fbc16ab6ec2d9c3ddd&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=2ee9a25c5d7ff3fbc16ab6ec2d9c3ddd&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK);

function returnMovies(url) {
    fetch(url).then(res => res.json())
    .then(function (data) {
        console.log(data.results);
        data.results.forEach(element => {
            const div_row = document.createElement("div");
            div_row.setAttribute("class", "row");
            // const div_column = document.createElement("div");
            // div_column.setAttribute("class", "column");
            const div_card = document.createElement("div");
            div_card.setAttribute("class", "card");
            const center = document.createElement("center");
            const image = document.createElement("img");
            image.setAttribute("class", "thumbnail");
            image.setAttribute("id", "image");
            const title = document.createElement("h3");
            title.setAttribute("id", "title");

            title.innerHTML = `${element.title}`;
            image.src = IMG_PATH + element.poster_path;
            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            // div_column.appendChild(div_card);
            // div_row.appendChild(div_card);
            main.appendChild(div_card);
        });
    })
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = "";

    const searchItem = search.value;

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = "";
    }
});