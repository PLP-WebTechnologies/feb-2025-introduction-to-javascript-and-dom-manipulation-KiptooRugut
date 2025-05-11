// script.js

// Function to change the text content of the paragraph
function changeText() {
    const textElement = document.getElementById('dynamicText');
    textElement.textContent = "The text has been changed! 🎉";
}

// Function to add a new item to the list
function addItem() {
    const itemList = document.getElementById('itemList');
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemList.children.length + 1}`;
    itemList.appendChild(newItem);
}