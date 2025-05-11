// DOM Elements
const elements = {
    dynamicText: document.getElementById('dynamicText'),
    changeTextBtn: document.getElementById('changeTextButton'),
    itemList: document.getElementById('itemList'),
    addItemBtn: document.getElementById('addItemButton'),
    removeItemBtn: document.getElementById('removeItemButton'),
    cardContainer: document.getElementById('cardContainer'),
    addCardBtn: document.getElementById('addCardButton')
};

// State
const state = {
    textVariants: [
        "The text has been changed! 🎉",
        "Now it's different! ✨",
        "Keep clicking for more changes! 🔄",
        "Final variation! 🏁"
    ],
    currentVariant: 0,
    itemCounter: 3,
    cardCounter: 0
};

// Initialize cards
function initializeCards() {
    const cardData = [
        { title: "Card Title One", text: "This is a brief description for card one.", img: "1" },
        { title: "Card Title Two", text: "This card highlights another interesting topic.", img: "2" },
        { title: "Card Title Three", text: "An informative card with a clear message.", img: "3" }
    ];
    
    cardData.forEach(data => {
        state.cardCounter++;
        createCard(data.title, data.text, data.img);
    });
}

// Create a new card
function createCard(title, text, imgNum) {
    const col = document.createElement('div');
    col.className = 'col';
    
    col.innerHTML = `
        <div class="card h-100 shadow-sm">
            <img src="https://via.placeholder.com/300x180?text=Card+${imgNum || state.cardCounter}" class="card-img-top" alt="Card">
            <div class="card-body">
                <h5 class="card-title">${title || `Card ${state.cardCounter}`}</h5>
                <p class="card-text">${text || `This is card number ${state.cardCounter}`}</p>
                <button class="delete-card-btn btn btn-sm btn-danger">Delete</button>
            </div>
            <div class="card-footer text-muted">Last updated just now</div>
        </div>
    `;
    
    elements.cardContainer.appendChild(col);
}

// Delete card
function deleteCard(event) {
    if (event.target.classList.contains('delete-card-btn')) {
        const card = event.target.closest('.col');
        card.classList.add('fade-out');
        setTimeout(() => card.remove(), 300);
    }
}

// Existing functions (changeText, addItem, removeItem) remain the same
function changeText() {
    state.currentVariant = (state.currentVariant + 1) % state.textVariants.length;
    elements.dynamicText.textContent = state.textVariants[state.currentVariant];
    elements.dynamicText.classList.add('text-changed');
    setTimeout(() => elements.dynamicText.classList.remove('text-changed'), 500);
}

function addItem() {
    state.itemCounter++;
    const newItem = document.createElement('li');
    newItem.className = 'list-group-item';
    newItem.textContent = `Item ${state.itemCounter}`;
    elements.itemList.appendChild(newItem);
}

function removeItem() {
    if (elements.itemList.children.length > 0) {
        elements.itemList.removeChild(elements.itemList.lastChild);
        if (state.itemCounter > 0) state.itemCounter--;
    }
}

// Event Listeners
elements.changeTextBtn.addEventListener('click', changeText);
elements.addItemBtn.addEventListener('click', addItem);
elements.removeItemBtn.addEventListener('click', removeItem);
elements.cardContainer.addEventListener('click', deleteCard);
elements.addCardBtn.addEventListener('click', () => {
    state.cardCounter++;
    createCard();
});

// Initialize
document.addEventListener('DOMContentLoaded', initializeCards);