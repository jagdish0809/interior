console.log('hello')

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 150){
            $("nav").css({"background-color":"#0D362E"});
        }
        else{
            $("nav").css({"background-color":""});
        }
    })
})