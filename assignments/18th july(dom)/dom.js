// 1. Access the element with ID "title" and update its innerText to "Welcome to JavaScript!".
document.getElementById("title").innerText = "Welcome to JavaScript!";

// 2. Select all elements with class "card" and change the background color of the third one to "lightgray".
const cards = document.getElementsByClassName("card");
if (cards.length >= 3) {
    cards[2].style.backgroundColor = "lightgray";
}

// 3. Use querySelector to select the first <h2> element and make its text italic using style.fontStyle.
const firstH2 = document.querySelector("h2");
if (firstH2) {
    firstH2.style.fontStyle = "italic";
}

// 4. Change the innerHTML of an element with ID "info" to include a <u>Click here</u> link.
document.getElementById("info").innerHTML = '<a href="#"><u>Click here</u></a>';

// 5. Write a function that sets the font size of an element with ID "heading" to 40px when called.
function setHeadingFontSize() {
    const heading = document.getElementById("heading");
    if (heading) {
        heading.style.fontSize = "40px";
    }
}

// 6. Add an event listener to a button with ID "hoverBtn" that changes the background of a <div> with ID "box" to "orange" when hovered.
document.getElementById("hoverBtn").addEventListener("mouseover", function() {
    const box = document.getElementById("box");
    if (box) {
        box.style.backgroundColor = "orange";
    }
});

// 7. On clicking a button with ID "hideBtn", hide a paragraph with ID "description" using style.display.
document.getElementById("hideBtn").addEventListener("click", function() {
    const desc = document.getElementById("description");
    if (desc) {
        desc.style.display = "none";
    }
});

// 8. On clicking another button with ID "showBtn", show the hidden paragraph again.
document.getElementById("showBtn").addEventListener("click", function() {
    const desc = document.getElementById("description");
    if (desc) {
        desc.style.display = "block";
    }
});

// 9. Select all <li> elements using getElementsByTagName and change the text of the last item to "Done".
const listItems = document.getElementsByTagName("li");
if (listItems.length > 0) {
    listItems[listItems.length - 1].innerText = "Done";
}

// 10. Using querySelectorAll, select all elements with class "highlight" and set their text color to "purple".
const highlights = document.querySelectorAll(".highlight");
highlights.forEach(function(el) {
    el.style.color = "purple";
});