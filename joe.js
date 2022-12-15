const main = document.querySelector(".main_list");
const hamburger = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".close");

hamburger.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show(){
    main.style.display = "flex";
    main.style.top = "0";
    hamburger.style.display = "none";
};

function close(){
    main.style.top = "-300%";
    hamburger.style.display = "block";
};



const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
){
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);



sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});
