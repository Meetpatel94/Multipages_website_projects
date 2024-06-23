let sidemenu = document.getElementById('sidemenu');

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
// 
const scriptURL = 'https://script.google.com/macros/s/AKfycbz5MOB9f75mcf0J10Ufobcz1V63rb1cm6UmJOhXayR6C44p5VvXqehKtxnDS5mQ5tGi/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Send Successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 1000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
gsap.from('.bounce', { opacity: 0, duration: 1, delay: 1, y: 10 })
gsap.from('.nav .delay_bounce', { opacity: 0, duration: 1, delay: 1, y: 30, stagger: 0.2 })
gsap.from('#about .user_bounce', { opacity: 0, duration: 1, delay: 1, y: 30 })
gsap.from('.header-text', { opacity: 0, duration: 1.8, delay: 1, y: 30 })
