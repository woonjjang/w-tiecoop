/*
Theme Name: aa-test for w-tiecoop
Author: css3studio
Version:1.0
*/
(function ($) {
  $(document).ready(function () {
 
   //사이드메뉴 제어
    $(".ng01 li.expanded:not(.opened) > ul").hide();
    $(".ng01 li.expanded > a").bind("click", function () {
      if ($(this).parent().hasClass("opened")) {
        $(this).parent().removeClass("opened");
        $(this).siblings().slideUp();
      } else {
        $(this).parent().addClass("opened");
        $(this).siblings().slideDown();
      }
      return false;
    });

   });

})(jQuery);
