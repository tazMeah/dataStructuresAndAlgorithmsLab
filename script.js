"use strict";
let bugs = [];

function Bug(title, details, priority) {
    this.title = title;
    this.details = details;
    this.priority = priority;
}


$(document).on("click", "#bugSubmit", function(){
    let title = $("form input").val();
    let details = $("form textarea").val();
    let priority = $("#check").prop("checked");
    let bug = new Bug(title, details, priority);
    bugs.push(bug);
    // send to DOM
    $("#allBugs").append(`<h4>${bugs[0].title}</h4>`);
    // clear the form
    $("form input, form textarea").val("");
    $("input#check").prop("checked", "");
    
    
    
    
})