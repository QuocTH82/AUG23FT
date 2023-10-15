$(document).ready(function(){
    $("#contactBtn").click(function(){
        const email=prompt("what is your email?");
        console.log(email)
        console.log(email.indexOf("@"))
        const contact=prompt("what is your phone number?");
        const address=prompt("what is your address?")
        
        if(email.indexOf("@") > 0){
            if(email.indexOf(".") > 0) {
                $("#contactDetails p:eq(0)").text(contact) ; 
                $("#contactDetails p:eq(1)").text(email);
                $("#contactDetails p:eq(2)").text(address);
                
        console.log("From: "+email)
        console.log("contact: "+contact)
        console.log("adress: "+address)
            }
        }
    })
});