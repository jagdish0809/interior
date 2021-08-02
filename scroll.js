console.log('hello')

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 150){
            $(".navbar").css({"background-color":"#0D362E"});
        }
        else{
            $(".navbar").css({"background-color":""});
        }
    })
})