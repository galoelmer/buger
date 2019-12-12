$(function () {
    // Create new burger and store it in DB
    $("#submitButton").on("click", function(event){
        event.preventDefault();
        let newBurger = {
            newBurger: $("#burgerName").val().trim()
        };
        // Sent POST request
        $.ajax("/new", {
            type: "POST",
            data: newBurger
        }).then(function(result){
            console.log(result);
            // Reload the page to get the updated list
            location.reload();
        });
    });

    // Update burger status
    $(".burgerList").on("click", "button", function(){
        let id = $(this).data("id");
        $.ajax("/update/" + id, {
            type: "PUT"
        }).then(function(result){
            location.reload();
        });
    });

    // Get all burgers from DB and render index page
    $.ajax("/", {
        type: "GET"
    }).then(function(result){
        console.log("");
    });
});