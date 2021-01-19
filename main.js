$(document).ready(function () {
  $('.home-content').hide();

  $('.home-content').fadeIn(1500);
});

$(document).ready(function () {
  $('.social').hide();

  $('.social').fadeIn(2000);
});

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 1125){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

$(document).ready(function(){

    $(' .navbar .menu.active li a smoothscroll').click(function(){
      $('.navbar.sticky .menu.active').collapse("hide");
    });
    
});

// Scroll down 


jQuery(document).ready(function($) {

  $('.smoothscroll').on('click',function (event) {
     event.preventDefault();

     var target = this.hash,
     $target = $(target);

     $('html, body').stop().animate({
         'scrollTop': $target.offset().top
     }, 800, 'swing', function () {
         window.location.hash = target;
     });
 });
 
});

//View details 

(function($) {
    
  var panel = $('.details').hide();
  $('.btn1').click(function() 
  {
    $(this).toggleClass( "active" );
    panel.slideUp(500);
    $(this).next('.details').show();
  });                               

})(jQuery);

window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("contact-form");
    var button = document.getElementById("submit-btn");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Thanks!";
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

  //reveal image

  window.sr = ScrollReveal();
  sr.reveal('.content-image');