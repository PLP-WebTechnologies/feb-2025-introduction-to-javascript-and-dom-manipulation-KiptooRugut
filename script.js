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

 // Function to remove the last item from the list
function removeItem() {
    const itemList = document.getElementById('itemList');
    if (itemList.children.length > 0) {
        itemList.removeChild(itemList.lastChild);
    }
}