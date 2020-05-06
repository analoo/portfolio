$(function (){

    let userid = 1;
    $("#project-submit").on("click", function(event){
        event.preventDefault();
        let newProject = {
            title: $("#project-title").val(),
            description: $("#project-description").val(),
            githubRep: $("#project-githubRep").val(),
            deployedLink: $("#project-deployedLink").val(),
            associatedImage: $("#project-associatedImage").val(),
            language: $("#project-language").val(),
        }

        $.ajax(`/api/${userid}/project/new`, {
            type: "POST",
            data: newProject
        }). then(res => {
            console.log(res)
        })
        
    })

console.log("Live from the projects profile")
    
})