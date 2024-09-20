/* 1. Task 1: Working with elements via getElementById, textContent, and classList.add()
Create an HTML page with the elements:

<div id="status">Status: inactive</div>
<button id="toggleButton">Activate</button>
Task:

Make it so that when you click the button, the text in the div changes from
"Status: inactive" to "Status: active", and also adds the class active to this div. */

const statusDiv = document.getElementById("status");
const toggleButton = document.getElementById("toggleButton");
const infos = document.getElementsByClassName("infos")[0];


toggleButton.addEventListener("click", () => {
    if(statusDiv.classList.contains("activate")) {
        toggleButton.textContent = "Activate";
        statusDiv.textContent = "Status: deactivated";
        statusDiv.classList.remove("activate");
        infos.classList.add("infos-none");
    } else {
        toggleButton.textContent = "Deactivate";
        statusDiv.textContent = "Status: activated";
        statusDiv.classList.add("activate");
        infos.classList.remove("infos-none");
    }
});

/* 2. Task 2: Changing the structure with querySelector, createElement, and append
Create HTML with a block like this:

<div id="content"></div>
Task:

Add three new p elements with different texts inside the div with ID content using
createElement() and append() */

const contentDiv1 = document.getElementById("content");
const texts = ["Hello, its my first message here", "And that´s my second one", "and the last one"];

texts.forEach(text => {
    const p = document.createElement("p");
    p.textContent = text;
    contentDiv1.append(p);
});

/* 3. Task 3: Create a list with items.

Create HTML with an empty <ul> element. Using JavaScript, add 5 <li> elements
with the text "Item 1", "Item 2", etc. to the list. */

const ulList = document.getElementById("elements");
const elements = ["Element 1", "Element 2", "Element 3", "Element 4", "Element 5"];

elements.forEach(element => {
    const li = document.createElement("li");
    li.textContent = element;
    ulList.append(li);
})

/* 4. Task 4: Add a button and handle the click.

Create a button with the text "Add item". When the button is clicked, add a new
<li> element to the list from the previous task. The text of the element should 
be "New item".  */

const addElementButton = document.getElementById("addElement");

addElementButton.addEventListener("click", ()=> {
    const currentElements = ulList.getElementsByTagName("li").length;
    const newLi = document.createElement("li");
    newLi.textContent = `New Element ${currentElements + 1}`;
    ulList.append(newLi);
})

// 5. Task 5: add delete button.

const deleteElementButton = document.getElementById("deleteElement");

deleteElementButton.addEventListener("click", () => {
    if(ulList.lastElementChild) {
        ulList.removeChild(ulList.lastElementChild);
    }
})

const listItems = ulList.querySelectorAll("li");
listItems.forEach((li, index) => {
    li.textContent = `New Element ${index + 1}`;
})

// 6. Task 6: add button that will change the element color.
// 7. Task 7: add a input and use it, as a color for changing your "li".

const changeColorButton = document.getElementById("changeColor");
const colorInput = document.getElementById("colorInput");

changeColorButton.addEventListener("click", () => {
    const selectedColor = colorInput.value;
    const listItems = document.querySelectorAll("li");

    listItems.forEach(li => {
        li.style.color = selectedColor;
    })
})

/* Task 8: Creating a Modal Window
Task:

Create a "Open Modal Window" button. When the user clicks on this button, a modal window (centered on the screen) with a darkened background should appear on the page.
The modal window should have a "Close" button that will close it.
Inside the modal window, there should be an input field and an "Add Item" button. When the user types text in the input field and clicks the "Add Item" button, create a new <li> element with this text and add it to the list inside the modal window.
Implement the ability to close the modal window both by clicking the "Close" button and by clicking on the darkened area outside the window. */

const modal = document.getElementById("modal");
const windowButton = document.getElementById("openModal");
const closeWindowButton = document.getElementById("closeModal");
const inputWindow = document.getElementById("modalInput");
const addItemButton = document.getElementById("addItem");
const modalList = document.getElementById("modalList");
const modalContent = document.querySelector(".modal__content");

windowButton.addEventListener("click", () => {
    modal.classList.toggle("modal");
})

closeWindowButton.addEventListener("click", () => {
    modal.classList.toggle("modal");
})

modal.addEventListener("click", (event) => {
    if(event.target === modal) {
        modal.classList.toggle("modal");
    }
})

addItemButton.addEventListener("click", () => {
    const someItem = inputWindow.value;

    if(someItem.trim() !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = someItem;

        modalList.appendChild(listItem);
        inputWindow.value = "";
    }
})

/* Task 9: Adding and Removing Cards with Animation
Task:

Create an "Add Card" button. When clicked, a card (div) with custom text and a unique number should be added.
Each card should have a "Remove" button that removes the card.
Add a CSS animation that smoothly adds a card (e.g., fades in) and smoothly removes a card (e.g., fades out). */

const addCard = document.getElementById("addCard");
const cardContainer = document.getElementById("cardContainer");

// function that uptades the number
function updateCardNumbers() {
    const cards = cardContainer.querySelectorAll(".card__show");
    cards.forEach((card, index) => {
        const numberDiv = card.querySelector(".card__number");
        numberDiv.textContent = `Number of the Card: ${index + 1}`;
    });
}

// add a new card
addCard.addEventListener("click", () => {
    const currentCardNumber = cardContainer.querySelectorAll(".card__show").length + 1;

    // add div for a card
    const card = document.createElement("div");
    card.classList.add("card__show");

    // add div for a number
    const numberDiv = document.createElement("div");
    numberDiv.textContent = `Number of the Card: ${currentCardNumber}`;
    numberDiv.classList.add("card__number");

    // add div for text
    const textDiv = document.createElement("div");
    textDiv.textContent = "It´s some text";
    textDiv.classList.add("card__text");

    // create "delete" button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete the Card";
    deleteButton.classList.add("btn-cards");

    // delete the card with animation
    deleteButton.addEventListener("click", () => {
        card.classList.add("card__remove");
        setTimeout(() => {
            card.remove();
            updateCardNumbers();
        }, 500);
    });

    // append
    card.append(numberDiv);
    card.append(textDiv);
    card.append(deleteButton);

    cardContainer.append(card);
});

/* Task 10: Countdown Timer
Task:

This is the element where you can open the timer.
Press the water timer button.
When the timer arrives, the screen should show the message "Time's up!"
The timer should open every second. */

const divInterval = document.getElementsByClassName("set__interval")[0];
const timer = document.querySelector(".timer");
const startTimerButton = document.getElementById("startTimer");
let timerNumber = parseInt(timer.textContent);
let intervalId;

const congratulation = document.createElement("h4");
congratulation.classList.add("congratulation");
congratulation.textContent = "I congratulate you, you have successfully solved the 'SetInterval' task!";

function showTimer () {
    if(timerNumber > 0){
        timerNumber -= 1;
        timer.textContent = timerNumber;
    } else {
        divInterval.append(congratulation);
        clearInterval(intervalId);
    }
    
}

startTimerButton.addEventListener("click", () => {
    intervalId = setInterval(showTimer, 1000);
})












