"use strict";
let bugs = [];
$(document).ready(function(){

    

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
        $("#allBugs").append(`
        <div>
            <h4>${bugs[bugs.length-1].title}</h4>
            <p>${bugs[bugs.length-1].details}</p>
            <button id="fixed">Fixed</button>
        </div>
        `);
        // clear the form
        $("form input, form textarea").val("");
        $("input#check").prop("checked", "");
    
    })

    $("body").on("click", "#allBugs button", function(e){
       console.log( $(e.target).parent().index() ) // says the number of the parent div
       let index = $(e.target).parent().index();
       bugs.splice(index, 1); // removes from array
       $("#allBugs div").eq(index).remove(); //removes from DOM
    })

})