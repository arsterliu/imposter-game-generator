// Party mode role reveal page logic (simplified: removed test/debug code)
document.addEventListener('DOMContentLoaded', function() {
    // Environment guard: only run on the reveal page
    if (!document.getElementById('playerButtons')) return;

    const totalPlayersInfo = document.getElementById('totalPlayersInfo');
    const imposterCountInfo = document.getElementById('imposterCountInfo');
    const categoryInfo = document.getElementById('categoryInfo');
    const playerButtons = document.getElementById('playerButtons');
    const completionMessage = document.getElementById('completionMessage');
    const roleModal = document.getElementById('roleModal');

    // Get game data from localStorage
    const gameDataStr = localStorage.getItem('partyGameData');
    if (!gameDataStr) {
        alert('Game data not found, please reconfigure');
        window.location.href = 'setup.html';
        return;
    }

    let gameData;
    try {
        gameData = JSON.parse(gameDataStr);
    } catch (error) {
        alert('Game data format error, please reconfigure');
        window.location.href = 'setup.html';
        return;
    }

    // Initialize page
    initializePage();

    function initializePage() {
        // Display game information
        totalPlayersInfo.textContent = gameData.totalPlayers;
        imposterCountInfo.textContent = gameData.imposterCount;
        categoryInfo.textContent = gameData.category;

        // Generate player buttons
        generatePlayerButtons();

        // Initially ensure completion modal is hidden
        completionMessage.classList.add('hidden');

        // If someone has already viewed, check if all are done
        const hasViewedPlayers = gameData.players.some(player => player.viewed);
        if (hasViewedPlayers) {
            checkCompletion();
        }
    }

    function generatePlayerButtons() {
        playerButtons.innerHTML = '';

        // Find the index of the first player who hasn't viewed their role.
        const firstUnviewedIndex = gameData.players.findIndex(p => !p.viewed);

        gameData.players.forEach((player, index) => {
            const button = document.createElement('button');
            button.className = 'player-button';
            button.textContent = `View ${player.name}'s Role`;
            button.dataset.playerId = player.id;

            if (player.viewed) {
                // This player has already viewed their role.
                button.classList.add('viewed');
                button.disabled = true;
            } else {
                // This player has not viewed their role yet.
                // Enable the button only if it's their turn (i.e., they are the first un-viewed player).
                if (index === firstUnviewedIndex) {
                    button.disabled = false;
                    button.addEventListener('click', () => showPlayerRole(player));
                } else {
                    button.disabled = true;
                }
            }
            playerButtons.appendChild(button);
        });
    }

    function showPlayerRole(player) {
        // Show preparation confirmation modal
        showPreparationModal(player);
    }

    function showPreparationModal(player) {
        const modalContent = document.getElementById('modalContent');
        modalContent.innerHTML = `
            <div class="role-step preparation">
                <h3>It's <span class="player-name">${player.name}</span>'s turn</h3>
                <p class="warning-text">Please make sure no one else is looking at your screen—except the referee!</p>
                <button class="btn btn-primary btn-large" onclick="showRoleDetails(${player.id})">
                    Show My Role
                </button>
            </div>
        `;
        roleModal.classList.remove('hidden');

        // Bind function to global scope
        window.showRoleDetails = (playerId) => {
            const targetPlayer = gameData.players.find(p => p.id === playerId);
            if (targetPlayer) {
                showRoleDetailsModal(targetPlayer);
            }
        };
    }

    function showRoleDetailsModal(player) {
        const modalContent = document.getElementById('modalContent');
        const isImposter = player.role === 'imposter';
        const roleText = isImposter ? 'Imposter' : 'Civilian';
        const roleBadgeClass = isImposter ? 'imposter' : 'civilian';

        let teammatesHtml = '';
        if (isImposter && player.teammates && player.teammates.length > 0) {
            teammatesHtml = `
                <div class="teammates-info">
                    <span class="teammates-label">Your teammates are:</span>
                    <span class="teammates-list">${player.teammates.join(', ')}</span>
                </div>
            `;
        }

        modalContent.innerHTML = `
            <div class="role-display">
                <div class="role-badge ${roleBadgeClass}">${roleText}</div>
                <div class="word-display">
                    <span class="word-label">Your word is:</span>
                    <span class="word-value">${player.word}</span>
                </div>
                ${teammatesHtml}
                <button class="btn btn-primary btn-large" onclick="confirmViewed(${player.id})">
                    I Remember
                </button>
            </div>
        `;

        // Bind function to global scope
        window.confirmViewed = (playerId) => {
            markPlayerAsViewed(playerId);
        };
    }

    function markPlayerAsViewed(playerId) {
        const player = gameData.players.find(p => p.id === playerId);
        if (player) {
            player.viewed = true;
            localStorage.setItem('partyGameData', JSON.stringify(gameData));
            roleModal.classList.add('hidden');
            generatePlayerButtons();
            checkCompletion();
        }
    }

    function checkCompletion() {
        const allViewed = gameData.players.every(player => player.viewed);
        if (allViewed) {
            setTimeout(() => {
                completionMessage.classList.remove('hidden');
            }, 500);
        } else {
            completionMessage.classList.add('hidden');
        }
    }

    // Click modal overlay, only allow closing during preparation phase
    roleModal.addEventListener('click', function(e) {
        if (e.target === roleModal) {
            const prep = document.getElementById('modalContent').querySelector('.preparation');
            if (prep) {
                roleModal.classList.add('hidden');
            }
        }
    });
});