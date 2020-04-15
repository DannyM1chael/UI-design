let timeline = new TimelineMax({orUpdate: updatePercentage});
let timeline2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

timeline.from("blockquote", .5, {x:200,opacity: 0});
timeline.from("span", 1, {width:200}, "=-.5");
timeline.from("#office", 1, {x:-200,opacity: 0}, "=-1");
timeline.from("#building", 1, {x:-200,opacity: 0}, "=.7");

timeline2.from("#box", 1, {opacity:0, scale:0});
timeline2.to("#box", .5, {
    left:"20%", 
    scale:1.3, 
    borderColor: "#fff", 
    borderWidth: 12, 
    boxShadow: "1px 1px 0px 0px rgba(0,0,0,0.09)"
});


const scene = new ScrollMagic.Scene({
    triggerElement: ".sticky",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setPin(".sticky")
    .setTween(timeline)
        .addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: "blockquote"
})
    .setTween(timeline2)
        .addTo(controller);

        
function updatePercentage(){
    timeline.progress();
}