$(function(){
    let userID = 2;
    $.ajax(`/api/${userID}/projects`, {
        type: "GET"
    }).then(result => {
        console.log(result)
        $("#portfolio-append").append(result)
    })


    console.log("live in the portfolio page")
    
    
    })