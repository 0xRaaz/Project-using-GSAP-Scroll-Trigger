var tLine = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
        // markers: true,
    }
})

tLine.to( "#fanta", {
    top: "120%",
    left: "5%",
} ,'orange')

tLine.to( "#slice", {
    top: "160%",
    left: "22%",
}, 'orange')

tLine.to( "#orange", {
    width: "15%",
    top: "165%",
    right: "10%",
}, 'orange')

tLine.to( "#leaf", {
    rotate:"150deg",
    top: "100%",
    left: "70%",
}, 'orange')

tLine.to( "#leaf2", {
    rotate:"150deg",
    top: "100%",
    left: "0%",
}, 'orange')

var tLine2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "20% 50%",
        scrub: true,
        // markers: true,
    }
})

tLine2.from( "#cocacola", {
    rotate:"-100deg",
    top: "100%",
}, 'ca')

tLine2.from( "#pepsi", {
    rotate:"100deg",
    top: "100%",
}, 'ca')

tLine2.to( "#slice", {
    left: "50%",
    top: "200%",
}, 'ca')

tLine2.to( "#fanta", {
    left: "36%",
    top: "210%",
    width: "425",
}, 'ca')