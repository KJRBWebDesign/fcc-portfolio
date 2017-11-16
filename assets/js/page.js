  var scroll = 0;
  setTimeout(function(){
  $(function(){
  $(window).scroll(function(){
    if(scroll == 0) {
      console.log("added");
      $(".abilities").addClass("active");
      scroll += 1;
    }
  });
});
}, 1500);
