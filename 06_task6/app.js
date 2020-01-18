document.addEventListener('DOMContentLoaded', function(){
   let ul = document.getElementById('movies');
   console.log(ul);

   let moviesUrl = 'https://fe-api-jquery.firebaseio.com/fe-api-jquery.json';


});

function insertMovies (movies, productionDates) {
    let newLi = document.createElement('li');

    titles.forEach(movie => {
        let newH2 = document.createElement('h2');
        newH2.innerText = movie.title;
        newLi.append(newH2);
    });

    productionDates.forEach(date => {
        let newH3 = document.createElement('h3');
        newH3.innerText = date.date;
    });
}