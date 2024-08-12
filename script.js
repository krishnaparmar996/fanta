 var tl=gsap.timeline({
    scrollTrigger:{
          trigger:'.two',
          start:"0% 95%",
          end:"70% 50%",
          scrub:true,
        //  markers:true
    }
} )  
tl.to("#fanta",{
    top:"120%",
    left:"0%",
},'orange'  )

tl.to("#orange-cut",{
       top:"160%",
       left:"15%",
},'orange')
tl.to("#orange22",{
    top:"150%",
    right:"10%",
},'orange')

tl.to("#leaf1",{
    top:"110%",
    left:"70%",
},'orange')

tl.to("#leaf31",{
    top:"130%",
    left:"20%",
},'orange')



var tl2=gsap.timeline({
    scrollTrigger:{
          trigger:'.three',
          start:"0% 95%",
          end:"50% 50%",
          scrub:true,
        //  markers:true
    }
} )  


tl2.from("#lemon",{
     top:'10%',
    left:"-50px",
    width:'30px',


},'cocacola1')
tl2.from("#cocacola",{
    rotate:"-40deg",
    top:'100%',
    left:"-80px",

},'cocacola1')


tl2.from(".mlemon",{
    top:'10%',
    right:"-10px",
     rotate:'-40deg',
     width:'10 px',

},'cocacola1')
tl2.from("#pepsi",{
    top:'100%',
   right:"10px",
   rotate:"90deg",

},'cocacola1')




tl2.to("#orange-cut",{
    top:'200%',
    left:"470px",
  
},'cocacola1')
tl2.to("#fanta",{
    top:'197%',
   left:"410px",
   width:'20%',
 
},'cocacola1')