var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
     blur.style.left=dets.x-250+"px"
    blur.style.top=dets.y-250+"px"
})

let h4all=document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale=3
        crsr.style.border="1px solid white"
        crsr.style.backgroundColor="transparent"
    })

    elem.addEventListener("mouseleave", function(){
        crsr.style.scale=1
        crsr.style.border="0px solid #95c11e"
        crsr.style.backgroundColor="#95c11e"
    })
});

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height: "110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        // markers:false,
        end:"top -11%",
        scrub:1
    }
}) ;

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
});

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
});

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.8,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1,
    }
});


gsap.from("#colone1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colone1",
        scroller:"body",
        start:"top 40%",
        end:"top 45%",
        scrub:4,
    }
});

gsap.from("#colone2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colone2",
        scroller:"body",
        start:"top 95%",
        end:"top 100%",
        scrub:4,
    }
});

gsap.from("#page h1",{
    y:80,
    trigger:"#page4 h1",
    scroller:"body",
    start:"top 75%",
    end:"top 70%",
    scrub:3,
})


