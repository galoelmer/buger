$(function () {
    // Validate input. Prevent empty input
    $('.form').form({
        fields: {
            name: {
                identifier: "burgerName",
                rules: [
                    {
                        type: "empty"
                    }
                ]
            }
        }
    });

    // Create new burger and store it in DB
    $("#submitButton").on("click", function (event) {
        event.preventDefault();
        // Check if input is not empty
        if ($(".form").form("is valid")) {
            let newBurger = {
                newBurger: $("#burgerName").val().trim()
            };
            // Sent POST request
            $.ajax("/new", {
                type: "POST",
                data: newBurger
            }).then(function (result) {
                console.log(result);
                // Reload the page to get the updated list
                location.reload();
            });
        }
    });

    // Update burger status
    $(".burgers-list").on("click", "button", function () {
        $(this).parent().parent().transition("fade");
        let id = $(this).data("id");
        $.ajax("/update/" + id, {
            type: "PUT"
        }).then(function (result) {
            location.reload();
        });
    });

    $(".burger-item").on("mouseenter", function () {
        $(this).find("button")
            .transition("stop")
            .transition('horizontal flip');
    });

    $(".burger-item").on("mouseleave", function () {
        $(this).find("button")
            .transition("stop")
            .transition('horizontal flip');
        $(".devour-button").css("display", "none");
    });

    // Get all burgers from DB and render index page
    $.ajax("/", {
        type: "GET"
    }).then(function (result) {
        console.log("");
    });
});