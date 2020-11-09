$(document).ready(()=>{
    $(window).scroll(function(){
        if(this.scrollY>30){
            $('.navbar').addClass("scrolled");
        }
        else{
            $('.navbar').removeClass("scrolled");
        }
    })
    $('.menu-btn').click(()=>{
        $('.navbar .menu').toggleClass('active');
    });
    var typed = new Typed(".typing",{
        strings:["Web Developer","Competitive Programmer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
});

