
let body = document.querySelector('body');
let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');
let fourth = document.querySelector('.fourth');
let fifth = document.querySelector('.fifth');
let header = document.querySelector('#header');
let btno = document.querySelector('.mode')
let sun = document.querySelector('.sun')
let moon = document.querySelector('.moon')
let about = document.querySelector('.sub-title')
let mode = "dark";

btno.addEventListener("click", () => {
    if (mode === "dark") {
        mode = "light";
        body.style.background = "white";
        body.style.color = "black";
        first.style.color = "black"
        second.style.color = "black"
        third.style.color = "black"
        fourth.style.color = "black"
        fifth.style.color = "black"
        about.style.color = "black";
        moon.style.display = "block";
        moon.style.color = "blue";
        sun.style.display = "none";
    } else {
        mode = "dark";
        body.style.background = "black";
        body.style.color = "white";
        first.style.color = "white"
        second.style.color = "white"
        third.style.color = "white"
        fourth.style.color = "white"
        fifth.style.color = "white"
        about.style.color = "white";
        sun.style.display = "block";
        sun.style.color = "orange";
        moon.style.display = "none";
    }
    console.log(mode);
});
