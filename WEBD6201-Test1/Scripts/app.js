/*
    Student Name  :  Ruchanshi Desai        
    StudentID     :  100729822
    Date Completed:  28 Jan 2020
*/

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;

(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")
   
    /**
     * Variable initialization in this function
     *
     */
    let largeButton;
    function Start()
    {
       
        // replacing large button to learn more
        document.getElementById("largeButton").innerHTML="Learn More";
        // replacing the paragraph lines
        document.getElementById("firstParagraph").innerHTML="JavaScript is a prototype-based language, and every object in JavaScript has a hidden internal property called Prototype that can be used to extend object properties and methods."
        // hiding the paragraph
        document.getElementById("firstParagraph").style.display="none";
        
        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {
            //event 
            document.getElementById("largeButton").addEventListener("click", "Hide Details");
            
        
      

    }



    window.addEventListener("load", Start);
})(app || (app = {}));

