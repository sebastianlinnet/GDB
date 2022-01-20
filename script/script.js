//Welcome message function
function getHello() {
    var text = "";
    const date = new Date();

    if (date.getHours() > 4 && date.getHours() <= 11) {
        text = "Good morning.";
    }
    else if (date.getHours() > 11 && date.getHours() <= 17) {
        text = "Good afternoon.";
    }
    else if (date.getHours() > 17 && date.getHours() < 23) {
        text = "Good evening.";
    }
    else {
        text = "Hello.";
    }
    document.getElementById("message").innerHTML = text;
}

getHello();

//fade-in columns functions
// const fade = document.querySelectorAll('.fade-in');
// const slide = document.querySelectorAll('.slide-in');
// const appear = {
//     threshold: 0.3
// };
// const scroll = new IntersectionObserver(function (entries, scroll) {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             return;
//         }
//         else {
//             entry.target.classList.add('show');
//             scroll.unobserve(entry.target);
//         }
//     })
// },
//     appear);

// fade.forEach(fader => {
//     scroll.observe(fader);
// })

// slide.forEach(slider => {
//     scroll.observe(slider);
// })

//fade-in columns functions bedre.
const faders = document.querySelectorAll('.fade-in');

const scroller = new IntersectionObserver( entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('show', entry.isIntersecting)
            if (entry.isIntersecting) scroller.unobserve(entry.target)
        })
    },
    {
        threshold: 0.3
    }
)

faders.forEach(fade => {
    scroller.observe(fade);
})

//carrousel
var slideIndex = 1;

function carousel(slideNo) {
  var allSlides = document.getElementsByClassName("carousel");
  if (slideNo > allSlides.length) {
      slideIndex = 1;
    }    
  if (slideNo < 1) {
      slideIndex = allSlides.length;
    }
  for (i = 0; i < allSlides.length; i++) {
      allSlides[i].style.display = "none";  
  }
  allSlides[slideIndex-1].style.display = "block";  
}

function nextSlide(slideNo) {
  carousel(slideIndex += slideNo);
}

function prevSlide(slideNo) {
carousel(slideIndex -= slideNo);
}

carousel(slideIndex);
