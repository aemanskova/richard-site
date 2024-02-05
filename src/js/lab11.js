// задача 1
const bag = document.getElementById('button_bag');
function bagclick(){
    document.getElementById('number_of_products').innerText = Number(document.getElementById('number_of_products').textContent) + 1
};
bag.onclick = bagclick;
let modalclick = document.getElementById('modalbutton')
modalclick.onclick = modal
// задача 2
function modal () {
    let visibilityofform = document.querySelector('.form_modal')
    visibilityofform.style.display = 'block'
    let filter = document.querySelector('.filter')
    filter.style.display = 'block'
}
let modaloffclick = document.getElementById('closebutton')
modaloffclick.onclick = closemodal
function closemodal (){
    let visibilityofform = document.querySelector('.form_modal')
    visibilityofform.style.display = 'none'
    let filter = document.querySelector('.filter')
    filter.style.display = 'none'
}

// задача 3
let card = document.querySelector('.card')
card.addEventListener('mousemove', (e) => {
    console.log(e.offsetX)
    console.log(e.offsetY)
    const h = e.target.offsetHeight / 2;
    const w = e.target.offsetWidth / 2;
    e.target.style.transform = `rotateX(${-(e.offsetY - h) / 6}deg) rotateY(${(e.offsetX - w) / 6}deg)`
   
})

card.addEventListener('mouseout', (e) => {
   
    e.target.style.transform = 'rotate(0)'
})
// задача 4
let show_error = document.querySelector('.show_error')
show_error.onclick = disappearingerror
function disappearingerror() {
let error = document.querySelector('.error')
error.style.display = 'block'
setTimeout(() => {
    error.style.display = 'none';
}, 3000)

}


