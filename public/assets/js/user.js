$(function (){

    $("#user-submit").on("click", function(event){
        event.preventDefault();
        let newUser = {
            email: $("#user-email").val(),
            name: $("#user-name").val(),
            phone: $("#user-phone").val(),
            github: $("#user-github").val(),
            linkedIn: $("#user-linkedIn").val(),
            aboutMe: $("#user-aboutMe").val(),
        }
        $.ajax("/api/users/new", {
            type: "POST",
            data: newUser
        }). 
        then(res => {
            console.log(res)
        })
        
    })

console.log("Live from the user profile")
    
})