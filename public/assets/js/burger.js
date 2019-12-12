$(function () {
    $.ajax("/", {
        type: "GET"
    }).then(function(result){
        console.log(result);
    });
});