"use strict";
let bugs = [];
$(document).ready(function(){

    

    function Bug(title, details, priority) {
        this.title = title;
        this.details = details;
        this.priority = priority;
    }
    // adding a couple sample bugs
    let suggestion = new Bug("Suggestion Box Not Working", "I love the new suggestion box feature...in concept. Right now, the feature does not work. When I click the little lightbulb to submit an idea, nothing happens. Please fix this feature as I think it would be a great addition to the site. Thanks.", false);
    bugs.push(suggestion);
    // append to document
    $("#allBugs").append(`
        <div>
            <h4>${bugs[bugs.length-1].title}</h4>
            <p>${bugs[bugs.length-1].details}</p>
            <h6>Saturday Aug 04 2018 09:015:21 GMT-0400 (Eastern Daylight Time)</h6>
            <button id="fixed">Fixed</button>
        </div>
        `);

    let responsive = new Bug("Fix the iFrame", "When you go to the Videos page, there is an iFrame that looks wonderful on desktop, but it goes off of the screen on my mobile phone. Can someone fix this please?", true);
    bugs.push(responsive);
    // append to document
    $("#allBugs").append(`
        <div>
            <h4>${bugs[bugs.length-1].title}</h4>
            <p>${bugs[bugs.length-1].details}</p>
            <h6>Sun Aug 05 2018 12:39:47 GMT-0400 (Eastern Daylight Time)</h6>
            <button id="fixed">Fixed</button>
        </div>
        `);

    $(document).on("click", "#bugSubmit", function(){
        let timeStamp = new Date();
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
            <h6>${timeStamp}</h6>
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