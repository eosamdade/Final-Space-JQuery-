var otherChars = $("#mainChars")

$(".indChar").on("click",function(){
    $("#player").append(this);
    $("#enemy-char").append(otherChars);
});