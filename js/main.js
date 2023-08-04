$(document).ready(function () {
    var isMenuOpen = false;
    $('.overlay').hide();
    $('.site-menu ul').hide();
    $('.site-menu').hover(function (e) {
        e.preventDefault();
      if (isMenuOpen) {
        $('.site-menu .menu').html('<span>MENU</span> <img src="images/assests/logo-navbar.png" alt="">');
        $('.site-menu .menu').css("background", "#F39800");
        $('.site-menu ul').hide();
        $('body').css('overflow', 'auto');
        $('.overlay').hide();
      } else {
        $('.site-menu .menu').html('<span>CLOSE</span> <i class="fas fa-times"></i>');
        $('.site-menu .menu').css("background", "#000");
        $('.site-menu ul').show();
        $('body').css('overflow', 'hidden');
        $('.overlay').show();
      }
      isMenuOpen = !isMenuOpen;
    });
  
});