var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left= dets.x+30+ "px"
    crsr.style.top= dets.y + "px"
    blur.style.left= dets.x-150 + "px"
    blur.style.top= dets.y -150+ "px"
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
   
  });
});




gsap.to("#nav",{
    
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    delay: 1,
    scrollTrigger:{
        trigger: "#nav",
        scroller:"body",
        // markers: true,
        start: "top -10%",
        end: " top -11%",
        scrub:1,
    }
})


gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers: true,
        start: "top -25%",
        end:"top -60%",
        scrub:2,
    }
})

gsap.from("#about-us img, #about-us-in",{
  y:90,
  opacity:0,
  duration:3,
  
  
  scrollTrigger:{
    trigger:"#about-us",
    
    scroller:"body",
    // markers:"body",
    start: "top 70%",
    end:"top 65%",
    scrub:2,
  }
} )

//js code override kr rhi thi css motion ko isliye abhi isko hata raha baad me iski jadd tk smjhenge!
//gsap.from(".cards",{
//   scale: 0.8,
//   opacity:0,
//   duration:1, 
//   scrollTrigger:{
//     trigger:".cards",
//     scroller:"body",
//     // markers:"body",
//     start: "top 70%",
//     end:"top 65%",
//     scrub:2,
//   }
// } )

gsap.from("#colon1",{
  y: -70,
  x: -70,
  scrollTrigger:{
    scroller:"body",
    trigger:"#colon1",
    start:"top 60%",
    end: "top 50%",
    scrub: 1,
  }
})

gsap.from("#colon2",{
  y: 80,
  x: 70,
  scrollTrigger:{
    scroller:"body",
    trigger:"#colon1",
    start:"top 55%",
    end: "top 45%",
    scrub: 4,
  }
})

gsap.from("#page4 h1",{
  y:50,
  scrollTrigger:{
    scroller:"body",
    trigger:"#page4 h1",
    start:"top 75%",
    end: "top 87%",
    scrub: 3,
  }

})
