// 1. Access the element with ID "title" and update its innerText to "Welcome to JavaScript!".
let a=document.getElementById("title")
let b=a.innerText
b="Welcome to JavaScript!"


// 2. Select all elements with class "card" and change the background color of the third one to "lightgray".
let cards =document.getElementsByClassName("card");
cards[2].style.backgroungColor="lightgray";


// const cards = document.getElementsByClassName("card");
// if (cards.length >= 3) {
//     cards[2].style.backgroundColor = "lightgray";
// }

// 3. Use querySelector to select the first <h2> element and make its text italic using style.fontStyle.
let heading =document.querySelector("h2")
heading.style.fontStyle="italic";

// const firstH2 = document.querySelector("h2");
// if (firstH2) {
//     firstH2.style.fontStyle = "italic";
// }

// 4. Change the innerHTML of an element with ID "info" to include a <u>Click here</u> link.
let info=document.getElementById("info")
let inside=info.innerHTML
inside = "<a href=\"#\"><u>Click here</u> </a>";

// document.getElementById("info").innerHTML = '<a href="#"><u>Click here</u></a>';

// 5. Write a function that sets the font size of an element with ID "heading" to 40px when called.
function heading1(){
    let h=document.getElementById("heading")
    h.style.fontSize="40px";
}



// function setHeadingFontSize() {
//     const heading = document.getElementById("heading");
//     if (heading) {
//         heading.style.fontSize = "40px";
//     }
// }

// 6. Add an event listener to a button with ID "hoverBtn" that changes 
// the background of a <div> with ID "box" to "orange" when hovered.


let button=document.getElementById("hoverBtn")
button.addEventListener("mouseover",function change() {
    let div=document.getElementById("box")
    div.style.backgroundColor="orange"

});


// document.getElementById("hoverBtn").addEventListener("mouseover", function() {
//     const box = document.getElementById("box");
//     if (box) {
//         box.style.backgroundColor = "orange";
//     }
// });

// 7. On clicking a button with ID "hideBtn", hide a paragraph
//  with ID "description" using style.display.
let btn=document.getElementById("hideBtn")
btn.addEventListener("click" ,function sty(){
    let para=document.getElementById("description")
    para.style.display="none";


});

// document.getElementById("hideBtn").addEventListener("click", function() {
//     const desc = document.getElementById("description");
//     if (desc) {
//         desc.style.display = "none";
//     }
// });

// 8. On clicking another button with ID "showBtn", show the hidden paragraph again.
// ans

let another=document.getElementById("showBtn")
another.addEventListener("click",function(){
    para.style.display="block";
});
// document.getElementById("showBtn").addEventListener("click", function() {
//     const desc = document.getElementById("description");
//     if (desc) {
//         desc.style.display = "block";
//     }
// });

// 9. Select all <li> elements using getElementsByTagName and 
// change the text of the last item to "Done".
// answer:
let list=document.getElementsByTagName("li");

const listItems = document.getElementsByTagName("li");
if (listItems.length > 0) {
    listItems[listItems.length - 1].innerText = "Done";
}

// 10. Using querySelectorAll, select all elements with class "highlight" and set their text color to "purple".
const highlights = document.querySelectorAll(".highlight");
highlights.forEach(function(el) {
    el.style.color = "purple";
});