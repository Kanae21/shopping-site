
$(document).ready(function() {
  $("#click_here").click(function(){
    $("#text_here").text("クリックされました。");
    return false;
  });
});

// slider
$(window).load(function(){
  $("#list_img img").click(function(){
    var img_src = $(this).attr("src");
    $("#display_img img").attr("src", img_src);
  });
});
//slider


//humbergermenyu
$(document).ready(function(){
  $("#menu").click(function(){
    $(".sp_menu_toggle").slideToggle();
  });
});
//humbergermenyu
