$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { 
            //change yes to no
            $('.head2').html('contact us'),$('.head1').html('FOR YOUR FREE ESTIMATE!');
        } else {
            //set h1 text to yes
            $('.head2').html('we specialize in'),$('.head1').html('EXTERIOR & INTERIOR PAINTING');
        }
    });
});


$('#mylinks a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});
/*  to top button*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myLinks").style.top = "0";
  } else {
    document.getElementById("myLinks").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}