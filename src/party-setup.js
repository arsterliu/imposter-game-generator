// Party mode setup page logic
import { wordBank } from './word-generator.js';

document.addEventListener('DOMContentLoaded', function() {
    // Environment guard: only run on the setup page
    if (!document.getElementById('generateRolesBtn')) return;

    const totalPlayersInput = document.getElementById('totalPlayers');
    const imposterCountInput = document.getElementById('imposterCount');
    const categorySelect = document.getElementById('categorySelect'); // The hidden select
    const generateRolesBtn = document.getElementById('generateRolesBtn');
    const validationMessage = document.getElementById('validationMessage');
    
    const decreasePlayersBtn = document.getElementById('decreasePlayers');
    const increasePlayersBtn = document.getElementById('increasePlayers');
    const decreaseImpostersBtn = document.getElementById('decreaseImposters');
    const increaseImpostersBtn = document.getElementById('increaseImposters');

    // --- New Category Drawer Elements ---
    const categorySelectBtn = document.getElementById('categorySelectBtn');
    const categoryDrawer = document.getElementById('categoryDrawer');
    const categoryDrawerCloseBtn = document.getElementById('categoryDrawerCloseBtn');
    const categorySearchInput = document.getElementById('categorySearchInput');
    const categoryDrawerList = document.getElementById('categoryDrawerList');
    const categorySelectText = categorySelectBtn.querySelector('.category-select-text');
    const categorySelectIconDisplay = categorySelectBtn.querySelector('.category-select-icon-display');

    // Initialize
    updateValidation();
    populateCategoryDrawer();

    // --- Category Drawer Logic ---

    function populateCategoryDrawer() {
        const options = Array.from(categorySelect.options);
        categoryDrawerList.innerHTML = ''; // Clear existing items
        options.forEach(option => {
            const li = document.createElement('li');
            li.setAttribute('role', 'option');
            li.dataset.value = option.value;
            
            const iconSpan = document.createElement('span');
            iconSpan.className = 'category-drawer-item-icon';
            iconSpan.textContent = option.dataset.icon || '📄';
            
            const textSpan = document.createElement('span');
            textSpan.className = 'category-drawer-item-text';
            textSpan.textContent = option.textContent;
            
            li.appendChild(iconSpan);
            li.appendChild(textSpan);

            if (option.selected) {
                li.classList.add('selected');
                li.setAttribute('aria-selected', 'true');
            }

            li.addEventListener('click', () => {
                handleCategorySelect(option.value);
            });

            categoryDrawerList.appendChild(li);
        });
    }

    function handleCategorySelect(selectedValue) {
        // Update the hidden select
        categorySelect.value = selectedValue;

        // Update the button appearance
        const selectedOption = categorySelect.querySelector(`option[value="${selectedValue}"]`);
        categorySelectText.textContent = selectedOption.textContent;
        categorySelectIconDisplay.textContent = selectedOption.dataset.icon || '📄';

        // Update the active state in the drawer list
        const listItems = categoryDrawerList.querySelectorAll('li');
        listItems.forEach(item => {
            if (item.dataset.value === selectedValue) {
                item.classList.add('selected');
                item.setAttribute('aria-selected', 'true');
            } else {
                item.classList.remove('selected');
                item.setAttribute('aria-selected', 'false');
            }
        });

        // Close the drawer
        closeCategoryDrawer();
    }

    function openCategoryDrawer() {
        categoryDrawer.hidden = false;
        document.body.style.overflow = 'hidden'; // Prevent background scroll
        setTimeout(() => {
            categoryDrawer.classList.add('is-open');
            categorySelectBtn.setAttribute('aria-expanded', 'true');
            // Only focus on non-touch devices to avoid popping up the keyboard on mobile
            if (!('ontouchstart'in window)) {
                categorySearchInput.focus();
            }
        }, 10);
    }

    function closeCategoryDrawer() {
        categoryDrawer.classList.remove('is-open');
        categorySelectBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = ''; // Restore background scroll
        setTimeout(() => {
            categoryDrawer.hidden = true;
        }, 400); // Match CSS transition duration
    }

    categorySelectBtn.addEventListener('click', openCategoryDrawer);
    categoryDrawerCloseBtn.addEventListener('click', closeCategoryDrawer);
    
    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && categoryDrawer.classList.contains('is-open')) {
            closeCategoryDrawer();
        }
    });

    // Search functionality
    categorySearchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const listItems = categoryDrawerList.querySelectorAll('li');
        listItems.forEach(item => {
            const itemText = item.textContent.toLowerCase();
            if (itemText.includes(searchTerm)) {
                item.hidden = false;
            } else {
                item.hidden = true;
            }
        });
    });


    // --- Existing Logic ---

    // Player count control
    decreasePlayersBtn.addEventListener('click', function() {
        const current = parseInt(totalPlayersInput.value);
        if (current > 3) {
            totalPlayersInput.value = current - 1;
            updateValidation();
        }
    });

    increasePlayersBtn.addEventListener('click', function() {
        const current = parseInt(totalPlayersInput.value);
        if (current < 20) {
            totalPlayersInput.value = current + 1;
            updateValidation();
        }
    });

    // Imposter count control
    decreaseImpostersBtn.addEventListener('click', function() {
        const current = parseInt(imposterCountInput.value);
        if (current > 1) {
            imposterCountInput.value = current - 1;
            updateValidation();
        }
    });

    increaseImpostersBtn.addEventListener('click', function() {
        const current = parseInt(imposterCountInput.value);
        const maxImposters = Math.floor((parseInt(totalPlayersInput.value) - 1) / 2);
        if (current < 5 && current < maxImposters) {
            imposterCountInput.value = current + 1;
            updateValidation();
        }
    });

    // Listen for input changes
    totalPlayersInput.addEventListener('input', updateValidation);
    imposterCountInput.addEventListener('input', updateValidation);

    // Validation logic
    function updateValidation() {
        const totalPlayers = parseInt(totalPlayersInput.value) || 0;
        const imposterCount = parseInt(imposterCountInput.value) || 0;
        const civilianCount = totalPlayers - imposterCount;

        // Update button states
        decreasePlayersBtn.disabled = totalPlayers <= 3;
        increasePlayersBtn.disabled = totalPlayers >= 20;
        decreaseImpostersBtn.disabled = imposterCount <= 1;
        increaseImpostersBtn.disabled = imposterCount >= 5 || imposterCount >= Math.floor((totalPlayers - 1) / 2);

        // Validation rules
        let isValid = true;
        let message = '';
        let messageType = '';

        if (totalPlayers < 3) {
            isValid = false;
            message = 'At least 3 players are required to start the game';
            messageType = 'error';
        } else if (imposterCount >= civilianCount) {
            isValid = false;
            message = 'Number of imposters must be strictly less than number of civilians';
            messageType = 'error';
        } else if (imposterCount === civilianCount - 1) {
            message = 'The game will be intense with current settings!';
            messageType = 'warning';
        }

        // Show validation message
        if (message) {
            validationMessage.textContent = message;
            validationMessage.className = `validation-message ${messageType}`;
            validationMessage.classList.remove('hidden');
        } else {
            validationMessage.classList.add('hidden');
        }

        // Update generate button state
        generateRolesBtn.disabled = !isValid;
    }

    // Generate roles button click event
    generateRolesBtn.addEventListener('click', function() {
        const totalPlayers = parseInt(totalPlayersInput.value);
        const imposterCount = parseInt(imposterCountInput.value);
        let category = categorySelect.value;

        // If 'Random' is selected, pick a random category from the wordBank
        if (category === 'random') {
            const availableCategories = wordBank.map(cat => cat.category_name).filter(name => name !== 'random'); // Exclude 'random' itself
            const randomIndex = Math.floor(Math.random() * availableCategories.length);
            category = availableCategories[randomIndex];
        }

        // Final validation
        if (totalPlayers < 3 || imposterCount >= (totalPlayers - imposterCount)) {
            alert('Incorrect parameter settings, please check');
            return;
        }

        // Generate game data
        const gameData = generateGameData(totalPlayers, imposterCount, category);
        
        // Save to localStorage
        localStorage.setItem('partyGameData', JSON.stringify(gameData));
        
        // Navigate to role reveal page
        window.location.href = 'reveal';
    });

    // Generate game data
    function generateGameData(totalPlayers, imposterCount, categoryName) {
        // Get word bank
        const category = wordBank.find(cat => cat.category_name === categoryName);
        if (!category || !category.pairs || category.pairs.length === 0) {
            console.error(`Word bank data is unavailable for category: ${categoryName}`);
            // Fallback to a default category if possible, or show an error
            alert('Error: Could not find words for the selected category.');
            return;
        }

        // Randomly select word pair
        const randomIndex = Math.floor(Math.random() * category.pairs.length);
        const wordPair = category.pairs[randomIndex];

        // Generate player list
        const players = [];
        for (let i = 1; i <= totalPlayers; i++) {
            players.push({
                id: i,
                name: `Player ${i}`,
                role: 'civilian', // Default to civilian
                word: wordPair.civilian,
                viewed: false
            });
        }

        // Randomly select imposters
        const imposterIndices = [];
        while (imposterIndices.length < imposterCount) {
            const randomIndex = Math.floor(Math.random() * totalPlayers);
            if (!imposterIndices.includes(randomIndex)) {
                imposterIndices.push(randomIndex);
            }
        }

        // Set imposter roles and words
        imposterIndices.forEach(index => {
            players[index].role = 'imposter';
            players[index].word = wordPair.imposter;
        });

        // Add teammate information for imposters
        const imposterNames = imposterIndices.map(index => players[index].name);
        imposterIndices.forEach(index => {
            players[index].teammates = imposterNames.filter(name => name !== players[index].name);
        });

        return {
            totalPlayers,
            imposterCount,
            category: category.display_name,
            categoryName,
            wordPair,
            players,
            createdAt: new Date().toISOString()
        };
    }
});