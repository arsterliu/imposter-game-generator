// Main page interaction logic
document.addEventListener('DOMContentLoaded', function() {
    const nicknameInput = document.getElementById('nickname');
    const roomCodeInput = document.getElementById('roomCode');
    const startGameBtn = document.getElementById('startGameBtn');

    // Auto-focus on nickname input
    if (nicknameInput) {
        nicknameInput.focus();
    }

    // Dynamic button text logic
    function updateButtonText() {
        if (!startGameBtn) return;
        
        const hasRoomCode = roomCodeInput && roomCodeInput.value.trim().length > 0;
        const hasNickname = nicknameInput && nicknameInput.value.trim().length > 0;
        
        if (hasRoomCode) {
            startGameBtn.textContent = '▶️ Join Game';
        } else {
            startGameBtn.textContent = '▶️ Start Game';
        }
        
        // Enable/disable button
        startGameBtn.disabled = !hasNickname;
    }

    // Listen for input changes
    if (nicknameInput) {
        nicknameInput.addEventListener('input', updateButtonText);
    }
    
    if (roomCodeInput) {
        roomCodeInput.addEventListener('input', updateButtonText);
    }

    // Initialize button state
    updateButtonText();

    // Form submission logic
    if (startGameBtn) {
        startGameBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const nickname = nicknameInput ? nicknameInput.value.trim() : '';
            const roomCode = roomCodeInput ? roomCodeInput.value.trim() : '';
            
            // Basic validation
            if (!nickname) {
                alert('Please enter your nickname');
                nicknameInput.focus();
                return;
            }
            
            if (nickname.length > 20) {
                alert('Nickname cannot exceed 20 characters');
                nicknameInput.focus();
                return;
            }
            
            // Simulate navigation logic (in a real project, this would navigate to actual pages)
            if (roomCode) {
                // Join room logic
                console.log(`Joining room: ${roomCode}, Nickname: ${nickname}`);
                alert(`Simulating joining room: ${roomCode}\nNickname: ${nickname}\n\nIn actual project, would navigate to: /game/${roomCode}`);
            } else {
                // Create room logic
                const newRoomId = generateRoomId();
                console.log(`Creating room: ${newRoomId}, Nickname: ${nickname}`);
                alert(`Simulating room creation: ${newRoomId}\nNickname: ${nickname}\n\nIn actual project, would navigate to: /game/${newRoomId}`);
            }
        });
    }

    // Generate random room ID
    function generateRoomId() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < 6; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    // Enter key submission
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !startGameBtn.disabled) {
            startGameBtn.click();
        }
    });
});

// 通用工具函数
export function showModal(title, content, buttons = []) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    modal.innerHTML = `
        <h2>${title}</h2>
        <div class="modal-content">${content}</div>
        <div class="modal-buttons" style="margin-top: 24px; display: flex; gap: 12px; justify-content: center;">
            ${buttons.map(btn => `
                <button class="btn ${btn.class || 'btn-primary'}" onclick="${btn.onclick || ''}">${btn.text}</button>
            `).join('')}
        </div>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // 点击遮罩关闭
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
    
    return overlay;
}

export function hideModal(modalElement) {
    if (modalElement && modalElement.parentNode) {
        modalElement.parentNode.removeChild(modalElement);
    }
}

// 复制到剪贴板
export async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        // 降级方案
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            document.body.removeChild(textArea);
            return true;
        } catch (err) {
            document.body.removeChild(textArea);
            return false;
        }
    }
}

// 原生分享API
export async function shareContent(data) {
    if (navigator.share) {
        try {
            await navigator.share(data);
            return true;
        } catch (err) {
            console.log('分享取消或失败:', err);
            return false;
        }
    } else {
        // 降级到复制链接
        const success = await copyToClipboard(data.url || data.text || '');
        if (success) {
            alert('链接已复制到剪贴板');
        }
        return success;
    }
}