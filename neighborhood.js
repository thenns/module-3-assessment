//this is for neighborhood.html
let restArr = [`Lomito's`, `Joe's Cafe`, `Kohinoor`, `Asa Ramen`];
let randomRestaurant = document.querySelector("#randomRestaurant");

randomRestaurant.addEventListener("click", function () {
    let rand = Math.floor(Math.random() * restArr.length);
    alert('you can try ' + restArr[rand] + '!');
});
