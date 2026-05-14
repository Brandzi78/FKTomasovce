gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MorphSVGPlugin);

gsap.from(".main-image", {
  duration: 2,
  scale: 0,
  delay: 1,
  ease: "power2",  
});

let split = SplitText.create(".main-title", {type: "words", mask: "words"});
gsap.from(split.words, {
    duration: 2,
    y: 80,
    opacity: 0,
    stagger: 0.1,
    ease: "power4.out"
});

gsap.from(".line", {
    duration: 1,
    drawSVG: 0,
    stagger: 0.8,
    delay: 2,
})

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