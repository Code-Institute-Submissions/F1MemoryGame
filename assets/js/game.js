$(document).ready(function () {
    $('#start').click(function () {
        $(this).parent().removeClass('visible');
    });
    $("#your-scores").click(function(){
        $("#saved-scores").slideToggle("slow");
    });
    $("#how-to-play").click(function(){
        $("#instructions").slideToggle("slow");
    });
});
