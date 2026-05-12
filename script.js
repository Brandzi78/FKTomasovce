gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

gsap.from(".main-image", {
  duration: 2,
  scale: 0,
  delay: 1,
  ease: "power2",  
});

const tlTwo = gsap.timeline({ defaults: { duration: 0.8, ease: "power4.in" }});

tlTwo.to(".stroke-1-wrapper", {clipPath: "inset(0% 0% 0% 0%)",})
    .to(".stroke-2-wrapper", {clipPath: "inset(0% 0% 0% 0%)",}, "-=0.2");

let split = SplitText.create(".main-title", {type: "words"});
const tl = gsap.timeline({
    defaults: { duration: 2, ease: "power4.out" }
});

tl.from(split.words[0], {x: -200, autoAlpha: 0})
    .from(split.words[1], {y: -200, autoAlpha: 0}, "-=1.8")
    .from(split.words[2], {rotateX: 90, transformOrigin: "bottom center"}, "-=1.7")
    .from(split.words[3], {rotateX: 360, x: 200, autoAlpha: 0}, "-=1.6")
    .from(split.words[4], {scale: 0}, "-=1.5")
    .to(split.words[2], {duration: 1.3, x: 90,}, "-=1")
    .to(split.words[1], {duration: 1.3, x: 90,}, "-=0.9")
    .to(split.words[0], {duration: 1.3, x: 90,}, "-=0.8")
    .to(split.words[3], {duration: 1, y: 500, ease: "bounce.out"}, "-=0.8")
    .to(split.words[4], {duration: 1, y: 500, ease: "bounce.out"}, "-=1");


  window.addEventListener('load', function() {
    const nav = document.querySelector('.nav-wrapper');
    const match = document.querySelector('.match');
    const scrollTarget = document.querySelector('.main-title'); 
    const navOptions = {
        root: null,
        rootMargin: "-20px 0px 0px 0px",
        threshold: 0
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                nav.classList.add('shrunk');
                match.classList.add('shrunked');
            } else {
                nav.classList.remove('shrunk');
                match.classList.remove('shrunked');
            }
        });
    }, navOptions);

    navObserver.observe(scrollTarget);
});

const words = document.querySelectorAll('.menu');

words.forEach(word => {
  const text = word.textContent;
  const letters = text.split("");
  word.textContent = "";
  letters.forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.classList.add("char");
    span.style.transitionDelay = `${index * 0.05}s`;
    word.append(span);
  });
});

let splitSeason = SplitText.create(".season", {type: "chars"});

gsap.from(splitSeason.chars, {
    scrollTrigger: {
        trigger: ".table",
        start: "top bottom",
        end: "+=300",
        scrub: 3,
    },
    x: 20,
    y: -20,
    opacity: 0,
    stagger: 0.3,
});

gsap.from(".table", {
    scrollTrigger: {
        trigger: ".table",
        start: "top bottom",
        end: "+=500",
        scrub: 3,
    },
    x: 600,
    opacity: 0,
});