document.addEventListener('DOMContentLoaded', () => {
    const categorySelectBtn = document.getElementById('categorySelectBtn');
    const categoryDrawer = document.getElementById('categoryDrawer');
    const closeCategoryDrawerBtn = document.getElementById('closeCategoryDrawerBtn');
    const categorySearchInput = document.getElementById('categorySearchInput');
    const categoryDrawerList = document.getElementById('categoryDrawerList');
    const categorySelect = document.getElementById('categorySelect');
    const categorySelectText = document.querySelector('.category-select-text');
    const categorySelectIconDisplay = document.querySelector('.category-select-icon-display');

    const options = Array.from(categorySelect.options);

    const categoryIcons = {
        'random': '🎲', 'fruits': '🍎', 'daily-items': '🏠', 'animals': '🐶', 'food': '🍔',
        'professions': '🎭', 'sports': '⚽', 'places': '📍', 'clothing': '👕',
        'transportation': '🚌', 'nature': '🌿', 'hobbies': '🎨', 'subjects': '📚',
        'body-parts': '🦵', 'fantasy-mythology': '👻', 'brands': '🏷️',
        'movies-tv': '🎬', 'video-games': '🎮', 'abstract-concepts': '💡',
        'landmarks': '🏛️', 'culture-art': '🖼️'
    };

    function renderList(filter = '') {
        categoryDrawerList.innerHTML = '';
        const fragment = document.createDocumentFragment();
        const lowerCaseFilter = filter.toLowerCase();

        options.forEach(option => {
            if (option.value && option.textContent.toLowerCase().includes(lowerCaseFilter)) {
                const li = document.createElement('li');
                li.dataset.value = option.value;
                li.setAttribute('role', 'option');

                const icon = categoryIcons[option.value] || '🎲';

                li.innerHTML = `
                        <span class="category-drawer-item-icon" aria-hidden="true">${icon}</span>
                        <span class="category-drawer-item-text">${option.textContent}</span>
                    `;

                if (option.value === categorySelect.value) {
                    li.classList.add('selected');
                    li.setAttribute('aria-selected', 'true');
                } else {
                    li.setAttribute('aria-selected', 'false');
                }
                fragment.appendChild(li);
            }
        });
        categoryDrawerList.appendChild(fragment);
    }

    function openDrawer() {
        renderList(categorySearchInput.value);
        categoryDrawer.hidden = false;
        document.body.style.overflow = 'hidden';
        categoryDrawer.classList.add('is-open');
        categorySelectBtn.setAttribute('aria-expanded', 'true');
        setTimeout(() => {
            // Only focus on non-touch devices to avoid popping up the keyboard on mobile
            if (!('ontouchstart' in window)) {
                categorySearchInput.focus();
            }
        }, 100);
    }

    function closeDrawer() {
        categoryDrawer.classList.remove('is-open');
        categorySelectBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        
        const handleTransitionEnd = () => {
            categoryDrawer.hidden = true;
            categoryDrawer.removeEventListener('transitionend', handleTransitionEnd);
        };
        categoryDrawer.addEventListener('transitionend', handleTransitionEnd);
    }

    categorySelectBtn.addEventListener('click', openDrawer);
    closeCategoryDrawerBtn.addEventListener('click', closeDrawer);
    categoryDrawer.addEventListener('click', (e) => {
        if (e.target === categoryDrawer) closeDrawer();
    });

    categorySearchInput.addEventListener('input', () => {
        renderList(categorySearchInput.value);
    });

    categoryDrawerList.addEventListener('click', (e) => {
        const li = e.target.closest('li');
        if (li) {
            const selectedValue = li.dataset.value;
            const selectedOption = options.find(opt => opt.value === selectedValue);
            
            if (selectedOption) {
                const selectedText = selectedOption.textContent;
                const selectedIcon = categoryIcons[selectedValue] || '';

                categorySelect.value = selectedValue;
                categorySelectText.textContent = selectedText;
                categorySelectIconDisplay.textContent = selectedIcon;

                const changeEvent = new Event('change', { bubbles: true });
                categorySelect.dispatchEvent(changeEvent);

                closeDrawer();
            }
        }
    });
});