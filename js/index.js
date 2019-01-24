/* Here goes your JS code */

$("#show-popup-form").click(function(){
    $("#show-popup-form").toggle();
    $(".popup").fadeIn();
});

$("#close").click(function(){
    $(".popup").fadeOut();
    $("#show-popup-form").fadeIn();
});

$('#form').submit(function(e) {
    e.preventDefault(); 
    setTimeout(function(){ 
        $(".popup").fadeOut();
        $("#show-thx").fadeIn();
    }, 3000);
});