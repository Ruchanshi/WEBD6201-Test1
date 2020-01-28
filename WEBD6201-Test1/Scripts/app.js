/*
    Student Name  :  Ruchanshi Desai        
    StudentID     :  100729822
    Date Completed:  28 Jan 2020
*/

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
let h3;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")
  
    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {

        // replacing large button to learn more
        document.getElementById("largeButton").innerHTML="Learn More";

        document.getElementById("firstParagraph").innerHTML="JavaScript is a prototype-based language, and every object in JavaScript has a hidden internal property called Prototype that can be used to extend object properties and methods."
        
        
        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {

    }



    window.addEventListener("load", Start);
})(app || (app = {}));

