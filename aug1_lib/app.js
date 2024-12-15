$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })

// const abilities = document.querySelector('#abilities');

// console.dir(abilities);

// console.log(abilities.children);


// const abilities = document.getElementsByClassName('ability');
const abilities = document.querySelectorAll('.ability');

console.log(abilities);

// Array.from(abilities).forEach(p => {
abilities.forEach(p => {
    p.addEventListener('click', () => {
        console.log(p.textContent);
    })
});

// abilities[0].addEventListener
