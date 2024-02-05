const buttonregistr = document.getElementById('registration')
const form = document.getElementById('form')
let visibilityofform = document.querySelector('.form_wrapper_modal')
let filter = document.querySelector('#filtermodal')
let sending = document.getElementById('send')
const arrInp = document.querySelectorAll('.form_enters')
buttonregistr.onclick = modal
function modal() {  
    filter.style.display = 'block'
    visibilityofform.style.display = 'block'
}
let modaloffclick = document.getElementById('closebutton')
modaloffclick.onclick = closemodal

filter.addEventListener ('click', (event) => {
    visibilityofform.style.display = 'none'   
    filter.style.display = 'none'
    console.log('fff')
});

function closemodal() {  
    visibilityofform.style.display = 'none'   
    filter.style.display = 'none'
    console.log('fff')
}





let showpass = document.getElementById('showpassword')

showpass.addEventListener('pointerdown', (event) => {
    password = document.getElementById('password')
    password.setAttribute('type', 'text')
});

showpass.addEventListener('pointerup', (event) => {
    password = document.getElementById('password')
    password.setAttribute('type', 'password')
    showpass.style.backgroundColor = '#fc0a7e'
});

addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    const name = formData.get('name');
    const email = formData.get('email');
    const getpassword = formData.get('password');
    console.log(`User name: ${name}\nUser email: ${email}\nUser password: ${getpassword}`) 
    sending.innerText = 'Data has been sent successfully!';
    setTimeout(() => {
        visibilityofform.style.display = 'none'
        filter.style.display = 'none'
    }, 2000)
    
});

for (const i of arrInp) {
    i.addEventListener('blur', (e) => { 
        if (e.target.validity.valueMissing) {
            e.target.setCustomValidity('Incorrect data!')
            e.target.nextElementSibling.lastChild.style.display = 'block'
        }
        else {
            e.target.setCustomValidity('')
            e.target.nextElementSibling.lastChild.style.display  = 'none'
          
        } 
    })
}