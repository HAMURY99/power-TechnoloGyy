//jquery-click-scroll
//by syamsul'isul' Arifin
//================================================
//function sendToWohatsapp(){
   // let number = "+967770801691"

  //  let name = document.getElementById('name').value;
    //let email = document.getElementById('email').value;
    //let password = document.getElementById('passeord').value;
    //let message = document.getElementById('message').value;

   // var url = "https://wa.me/967770801691" + number + "?text="
   // + "name : " +name+ "%0a"
   // + "Email :" +email+ "%0a"
   // + "password :" +password+ "%0a%0a"
   // + "message : " +message+ "%0a%0a";

   // window.open(url, '_blank').focus();
//}

var sectionArray = [1, 2, 3, 4, 5];

$.each(sectionArray, function(index, value){
          
     $(document).scroll(function(){
         var offsetSection = $('#' + 'section_' + value).offset().top - 75;
         var docScroll = $(document).scrollTop();
         var docScroll1 = docScroll + 1;
         
        
         if ( docScroll1 >= offsetSection ){
             $('.navbar-nav .nav-item .nav-link').removeClass('active');
             $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');  
             $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
             $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
         }
         
     });
    
    $('.click-scroll').eq(index).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top - 75;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 300)
    });
    
});

$(document).ready(function(){
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');    
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
});