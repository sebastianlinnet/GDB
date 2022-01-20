//Welcome message function
function getHello() {
    var text = "";
    const date = new Date();

    if (date.getHours() >= 4 && date.getHours() <= 10) {
        text = "Good morning.";
    }
    else if (date.getHours() >= 11 && date.getHours() <= 16) {
        text = "Good afternoon.";
    }
    else if (date.getHours() >= 17 && date.getHours() <= 23) {
        text = "Good evening.";
    }
    else {
        text = "Hello.";
    }
    document.getElementById("message").innerHTML = text;
}

getHello();

//fade-in columns functions.
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