function hide() {
    document.getElementById("nav").style.display = "none";
}











/* Elon Musk Show Card */
$(document).ready(function(){
    $(".elonMusk").click(function(){
        $(".elonCard").addClass("teamCardCenter");
        $(".rosie").removeClass("teamCardCenter");
        $(".rosie").removeClass("teamCardCenter");
        $(".rosie").removeClass("teamCardCenter");
        $(".rosie").removeClass("teamCardCenter");
    });
    
/* Rosie Musk Show Card */
$(document).ready(function(){
    $(".rosie").click(function(){
        $(".rosie").addClass("teamCardCenter");
        $(".elonMusk").removeClass("teamCardCenter");
        $(".rosie").removeClass("teamCardCenter");
        $(".rosie").removeClass("teamCardCenter");
        $(".rosie").removeClass("teamCardCenter");
    });