$(function(){
    let userID = 7;
    $.ajax(`/api/${userID}/projects`, {
        type: "GET"
    }).then(result => {
        console.log(result)
        $("#portfolio-append").append(result)
    })


    console.log("live in the portfolio page")
    
    
    })