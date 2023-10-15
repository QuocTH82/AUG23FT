$("document").ready(function() {
    $("#liveToastBtn").click(
        function() {
            $("#liveToast").removeClass("hide");
        }
    )
});

/*
$("document").ready(setupPage);

function setupPage(){
$("#liveToastBtn").click(toasty);
}
function toasty(){
$("#liveToast").removeClass("hide");
}
*/

/* execute a GET resquest to API, when button is clicked
the respons are logged to the console
*/

$("document").ready(function() {
    $("#boredBtn").click(function() {
        fetch("https://www.boredapi.com/api/activity/").then(console.log);
    })

});


    /*
$("document").ready(setupBoredBtn);

function setupBoredBtn(){
    $("#boredBtn").click(hentData);
}

function hentData(){
fetch("https://www.boredapi.com/api/activity/").then(console.log);
}
*/