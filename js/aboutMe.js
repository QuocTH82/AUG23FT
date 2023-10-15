

$("document").ready(function() {
    $("p:contains('Something about me')").text("I am a backend student, I like to watch fotball"); 
    $("h3:contains('student name')").text("Hello! I am Quoc Trinh, the code master");
 
    
});

$(".about p").click(
    function(){
        $(this).css("background","powderblue").css("color","white");
    }
  )