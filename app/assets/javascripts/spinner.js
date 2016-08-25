$( document ).ready(function() {

  // hide spinner
  $(".spinner").hide(3000).hide(0);


  // show spinner on AJAX start
  $(document).ajaxStart(function(){
    $(".spinner").show();
  });

  // hide spinner on AJAX stop
  $(document).ajaxStop(function(){
    $(".spinner").hide(3000).hide(0);
  });

});