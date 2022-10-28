//step 1: declare the variable

const preloadWrap = document.querySelector ('.preloader-wrapper');

    // const - constant - not a reassignable variable
    // querySelector - returns the 1st element that matches a css selector

//step 2: Create an event listener

    //Event listener - attaches an event handler to a document

    /*
        Syntax: window.addEventlistener(event, function)
        event - eliminates the use of prefix "on"
        function - runs when an event occurs
         
    */

window.addEventListener('load', function () {

    preloadWrap.classList.add ('fade-out-animation');

        /*
            class list - HTML DOM (Document Object Model) Element
                - programming API for HTML and XML
                - logical structure of the document and the way a document is accessed and manipulated

        */

})