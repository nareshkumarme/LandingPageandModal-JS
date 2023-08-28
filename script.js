const toggle = document.getElementById('toggle')
const close = document.getElementById('close')
const open = document.getElementById('open')
const modal = document.getElementById('modal')



//Style side nav and modal

toggle.addEventListener('click',()=>{
    document.body.classList.toggle('show-nav')
})

//functionality to make menu open/close on button click

open.addEventListener('click',() => {
    modal.classList.add('show-modal')
})

// functionality to make modal open/close on button click

close.addEventListener('click',()=> {
    modal.classList.remove('show-modal')
})