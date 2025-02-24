let navv = document.querySelectorAll(".nav-item a");
navv.forEach((e) => {
  e.onclick = () => {
    navv.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.classList.add("active");
  };
});
// -------------------------------------------------------------------------------------
let Video = document.querySelector(".Video");
let overlay = document.getElementById("overlay");
let overlay1 = document.querySelector(".overlay1");
let videoElement = document.getElementById("videoElement");
let closee = document.querySelectorAll(".close-btn");
let imgitem = document.querySelectorAll(".item img");
let imgoverlay = document.querySelector(".overlay1 img");

imgitem.forEach((e) => {
  e.onclick = () => {
    overlay1.classList.add("show");
    imgoverlay.src = e.src;
  };
});
Video.onclick = () => {
  overlay.classList.add("show");
};
closee.forEach((close) => {
  close.onclick = () => {
    overlay.classList.remove("show");
    overlay1.classList.remove("show");

    videoElement.pause();
    videoElement.currentTime = 0;
  };
});
// -------------------------------------------------------------------------------------
let contant = document.querySelectorAll(".main h1, .main p, .main .Booka");
let image = document.getElementById("hero-img");
let items = document.querySelectorAll(".item");
window.onload = () => visible();
function visible() {
  window.scrollTo({
    top : 0, 
    behavior : "smooth"
  });
  contant.forEach((event, index) => {
    setTimeout(() => visi(event), index * 300);
  });

  image.style.opacity = "1";
  image.style.transform = "scale(1)";
}
function visi(event) {
  event.style.opacity = "1";
  event.style.transform = "translateY(0px)";
}
items.forEach((e) => {
  e.classList.add("showitem");
});
// -------------------------------------------------------------------------------------
let BOOK = document.querySelector(".About .Book");
let old_text = document.querySelector(".About .Book .old-text");
let new_text = document.querySelector(".About .Book .new-text");
BOOK.onmouseenter = () => {
  old_text.style.opacity = "0";

  setTimeout(() => {
    new_text.style.opacity = "1";
  }, 200);
};
BOOK.onmouseout = () => {
  new_text.style.opacity = "0";
  setTimeout(() => {
    old_text.style.opacity = "1";
  }, 200);
};
// -------------------------------------------------------------------------------------
// Scrool
let Heade = document.querySelectorAll(".Heade, .menutext");
function checkScroll() {
  Heade.forEach((e) => {
    const position = e.getBoundingClientRect().top;
    if (position < window.innerHeight - 50) {
      e.classList.add("show");
    }
  });
}
window.addEventListener("scroll", checkScroll);
// -------------------------------------------------------------------------------------
// flip
let card_flip = document.getElementById("card-flip");
window.onclick = (e) => {
  e.stopPropagation();
  if (card_flip.contains(e.target)) {
    card_flip.classList.add("rotate");
  } else {
    card_flip.classList.remove("rotate");
  }
};
// -------------------------------------------------------------------------------------
// content
let content = document.querySelectorAll(".content h1");
let cards = document.querySelectorAll(".cards .card, .card-flip");
function Scroolcounter() {
  cards.forEach((e) => {
    const position = e.getBoundingClientRect().top;
    if (position < window.innerHeight - 50) {
      e.classList.add("show1");
    }
  });

  content.forEach((e) => {
    const position1 = e.getBoundingClientRect().top;
    if (position1 < window.innerHeight - 50) {
      e.style.opacity = "1";
      if (!e.dataset.started) {
        e.dataset.started = "true";

        let count = 0;
        let x = parseInt(e.innerHTML);

        let interval = setInterval(() => {
          if (count < x) {
            e.innerHTML = ++count;
          } else {
            clearInterval(interval);
          }
        }, 0);
      }
    }
  });
}
window.addEventListener("scroll", Scroolcounter);
// -------------------------------------------------------------------------------------
// Meal
let cata = document.querySelectorAll(".list-inline-item");
let cataname = document.querySelector(".cataname");
cata.forEach((C) => {
  C.onclick = () => {
    cata.forEach((ele) => {
      ele.classList.remove("MenuActive");
    });
    C.classList.add("MenuActive");

    let category = C.dataset.category;

    cataname.innerHTML = category;
    items.forEach((item) => {
      if (category === "Starters" || item.dataset.category === category) {
        item.classList.add("showitem");
      } else {
        item.classList.remove("showitem");
      }
    });
  };
});
// -------------------------------------------------------------------------------------
window.onscroll = () => {
  if (window.scrollY > 0) {
    document.querySelector(".scrool").classList.add("showscrool");
  } else {
    document.querySelector(".scrool").classList.remove("showscrool");
  }
};

document.querySelector(".scrool").onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};