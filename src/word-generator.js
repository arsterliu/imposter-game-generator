// Word bank data - Based on PRD 5.1 JSON structure
const wordBank = [
    {
        "category_name": "fruits",
        "display_name": "Fruits",
        "pairs": [
            { "civilian": "Apple", "imposter": "Banana" },
            { "civilian": "Watermelon", "imposter": "Winter Melon" },
            { "civilian": "Grape", "imposter": "Raisin" },
            { "civilian": "Orange", "imposter": "Lemon" },
            { "civilian": "Strawberry", "imposter": "Cherry" },
            { "civilian": "Pineapple", "imposter": "Coconut" },
            { "civilian": "Peach", "imposter": "Apricot" },
            { "civilian": "Pear", "imposter": "Apple" },
            { "civilian": "Mango", "imposter": "Papaya" },
            { "civilian": "Lychee", "imposter": "Longan" },
            { "civilian": "Pomelo", "imposter": "Orange" },
            { "civilian": "Grapes", "imposter": "Wine" }
        ]
    },
    {
        "category_name": "daily-items",
        "display_name": "Daily Items",
        "pairs": [
            { "civilian": "Toothbrush", "imposter": "Comb" },
            { "civilian": "Phone", "imposter": "Tablet" },
            { "civilian": "Slippers", "imposter": "Sandals" },
            { "civilian": "Backpack", "imposter": "Handbag" },
            { "civilian": "Charger", "imposter": "Cable" },
            { "civilian": "Headphones", "imposter": "Speaker" },
            { "civilian": "Desk Lamp", "imposter": "Flashlight" },
            { "civilian": "Trash Can", "imposter": "Storage Box" },
            { "civilian": "Mirror", "imposter": "Picture Frame" },
            { "civilian": "Soap", "imposter": "Shampoo" },
            { "civilian": "Scissors", "imposter": "Knife" }
        ]
    },
    {
        "category_name": "animals",
        "display_name": "Animals",
        "pairs": [
            { "civilian": "Cat", "imposter": "Dog" },
            { "civilian": "Lion", "imposter": "Tiger" },
            { "civilian": "Penguin", "imposter": "Panda" },
            { "civilian": "Elephant", "imposter": "Rhinoceros" },
            { "civilian": "Rabbit", "imposter": "Squirrel" },
            { "civilian": "Bee", "imposter": "Wasp" },
            { "civilian": "Bear", "imposter": "Wolf" },
            { "civilian": "Deer", "imposter": "Sheep" },
            { "civilian": "Bird", "imposter": "Bat" },
            { "civilian": "Crab", "imposter": "Lobster" },
            { "civilian": "Seal", "imposter": "Sea Lion" },
            { "civilian": "Butterfly", "imposter": "Moth" },
            { "civilian": "Alligator", "imposter": "Crocodile" }
        ]
    },
    {
        "category_name": "food",
        "display_name": "Food",
        "pairs": [
            { "civilian": "Pizza", "imposter": "Burger" },
            { "civilian": "Rice", "imposter": "Noodles" },
            { "civilian": "Coffee", "imposter": "Tea" },
            { "civilian": "Bread", "imposter": "Cake" },
            { "civilian": "Milk", "imposter": "Soy Milk" },
            { "civilian": "Egg", "imposter": "Duck Egg" },
            { "civilian": "Juice", "imposter": "Soda" },
            { "civilian": "Yogurt", "imposter": "Milkshake" },
            { "civilian": "Biscuit", "imposter": "Cookie" },
            { "civilian": "Hot Pot", "imposter": "Spicy Hot Pot" },
            { "civilian": "Fried Rice", "imposter": "Risotto" }, // Changed from Rice Bowl
            { "civilian": "Sandwich", "imposter": "Hot Dog" },
            { "civilian": "Waffle", "imposter": "Pancake" }
        ]
    },

    // --- Start of Expanded Categories ---

    {
        "category_name": "professions",
        "display_name": "Professions",
        "pairs": [
            { "civilian": "Doctor", "imposter": "Nurse" },
            { "civilian": "Teacher", "imposter": "Professor" },
            { "civilian": "Police Officer", "imposter": "Firefighter" },
            { "civilian": "Musician", "imposter": "DJ" },
            { "civilian": "Athlete", "imposter": "Coach" },
            { "civilian": "Photographer", "imposter": "Cameraman" },
            { "civilian": "Waiter", "imposter": "Butler" },
            { "civilian": "Mechanic", "imposter": "Plumber" },
            { "civilian": "Librarian", "imposter": "Curator" },
            { "civilian": "Architect", "imposter": "Builder" },
            { "civilian": "Dancer", "imposter": "Gymnast" },
            { "civilian": "Barber", "imposter": "Hair Stylist" }
        ]
    },
    {
        "category_name": "sports",
        "display_name": "Sports",
        "pairs": [
            { "civilian": "Soccer", "imposter": "Basketball" },
            { "civilian": "Swimming", "imposter": "Diving" },
            { "civilian": "Tennis", "imposter": "Badminton" },
            { "civilian": "Running", "imposter": "Cycling" },
            { "civilian": "Surfing", "imposter": "Skateboarding" },
            { "civilian": "Archery", "imposter": "Shooting" },
            { "civilian": "Bowling", "imposter": "Curling" },
            { "civilian": "Rugby", "imposter": "American Football" },
            { "civilian": "Hockey", "imposter": "Ice Skating" },
            { "civilian": "Karate", "imposter": "Taekwondo" },
            { "civilian": "Ping Pong", "imposter": "Squash" }
        ]
    },
    {
        "category_name": "places",
        "display_name": "Places",
        "pairs": [
            { "civilian": "School", "imposter": "Library" },
            { "civilian": "Hospital", "imposter": "Clinic" },
            { "civilian": "Restaurant", "imposter": "Cafe" },
            { "civilian": "Park", "imposter": "Beach" },
            { "civilian": "Airport", "imposter": "Train Station" },
            { "civilian": "Cinema", "imposter": "Theater" },
            { "civilian": "Mountain", "imposter": "Volcano" },
            { "civilian": "River", "imposter": "Lake" },
            { "civilian": "Desert", "imposter": "Oasis" },
            { "civilian": "Castle", "imposter": "Palace" },
            { "civilian": "Playground", "imposter": "Amusement Park" }
        ]
    },
    {
        "category_name": "clothing",
        "display_name": "Clothing",
        "pairs": [
            { "civilian": "T-shirt", "imposter": "Sweater" },
            { "civilian": "Jeans", "imposter": "Shorts" },
            { "civilian": "Suit", "imposter": "Tuxedo" },
            { "civilian": "Button", "imposter": "Zipper" },
            { "civilian": "Hoodie", "imposter": "Vest" },
            { "civilian": "Mittens", "imposter": "Gloves" },
            { "civilian": "Sneakers", "imposter": "Cleats" },
            { "civilian": "Uniform", "imposter": "Costume" },
            { "civilian": "Ring", "imposter": "Bracelet" },
            { "civilian": "Necklace", "imposter": "Choker" }
        ]
    },
    {
        "category_name": "transportation",
        "display_name": "Transportation",
        "pairs": [
            { "civilian": "Car", "imposter": "Bus" },
            { "civilian": "Bicycle", "imposter": "Motorcycle" },
            { "civilian": "Train", "imposter": "Subway" },
            { "civilian": "Airplane", "imposter": "Helicopter" },
            { "civilian": "Boat", "imposter": "Ship" },
            { "civilian": "Ferry", "imposter": "Cruise Ship" },
            { "civilian": "Jeep", "imposter": "SUV" },
            { "civilian": "Monorail", "imposter": "Tram" },
            { "civilian": "Rickshaw", "imposter": "Tuk-tuk" },
            { "civilian": "Sailboat", "imposter": "Jet Ski" },
            { "civilian": "School Bus", "imposter": "Public Bus" }
        ]
    },
    {
        "category_name": "nature",
        "display_name": "Nature",
        "pairs": [
            { "civilian": "River", "imposter": "Ocean" },
            { "civilian": "Mountain", "imposter": "Hill" },
            { "civilian": "Star", "imposter": "Planet" },
            { "civilian": "Tree", "imposter": "Forest" },
            { "civilian": "Desert", "imposter": "Dune" },
            { "civilian": "Glacier", "imposter": "Iceberg" },
            { "civilian": "Root", "imposter": "Branch" },
            { "civilian": "Stone", "imposter": "Rock" },
            { "civilian": "Sunrise", "imposter": "Sunset" }
        ]
    },
    {
        "category_name": "hobbies",
        "display_name": "Hobbies",
        "pairs": [
            { "civilian": "Painting", "imposter": "Drawing" },
            { "civilian": "Cooking", "imposter": "Baking" },
            { "civilian": "Gardening", "imposter": "Farming" },
            { "civilian": "Magic", "imposter": "Juggling" },
            { "civilian": "Guitar", "imposter": "Piano" },
            { "civilian": "Pottery", "imposter": "Sculpture" },
            { "civilian": "Blogging", "imposter": "Vlogging" },
            { "civilian": "Collecting", "imposter": "Antiquing" }
        ]
    },
    {
        "category_name": "subjects",
        "display_name": "Subjects",
        "pairs": [
            { "civilian": "Math", "imposter": "Physics" },
            { "civilian": "Computer Science", "imposter": "IT" },
            { "civilian": "Drama", "imposter": "Public Speaking" },
            { "civilian": "Geometry", "imposter": "Algebra" },
            { "civilian": "Astronomy", "imposter": "Astrology" },
            { "civilian": "Geology", "imposter": "Archaeology" },
            { "civilian": "Statistics", "imposter": "Calculus" },
            { "civilian": "Anatomy", "imposter": "Physiology" },
            { "civilian": "Architecture", "imposter": "Engineering" },
            { "civilian": "Political Science", "imposter": "Law" },
            { "civilian": "Journalism", "imposter": "Creative Writing" }
        ]
    },
    {
        "category_name": "body-parts",
        "display_name": "Body Parts",
        "pairs": [
            { "civilian": "Finger", "imposter": "Toe" },
            { "civilian": "Knee", "imposter": "Elbow" },
            { "civilian": "Tooth", "imposter": "Tongue" },
            { "civilian": "Vein", "imposter": "Artery" },
            { "civilian": "Eyebrow", "imposter": "Eyelash" },
            { "civilian": "Lip", "imposter": "Cheek" },
            { "civilian": "Wrist", "imposter": "Ankle" },
            { "civilian": "Palm", "imposter": "Sole" },
            { "civilian": "Neck", "imposter": "Chin" },
        ]
    },
    {
        "category_name": "fantasy-mythology",
        "display_name": "Fantasy & Mythology",
        "pairs": [
            { "civilian": "Dragon", "imposter": "Dinosaur" },
            { "civilian": "Wizard", "imposter": "Witch" },
            { "civilian": "Ghost", "imposter": "Zombie" },
            { "civilian": "Vampire", "imposter": "Werewolf" },
            { "civilian": "Angel", "imposter": "Demon" },
            { "civilian": "Unicorn", "imposter": "Pegasus" },
            { "civilian": "Elf", "imposter": "Fairy" },
            { "civilian": "King", "imposter": "Emperor" },
            { "civilian": "Magic", "imposter": "Miracle" },
            { "civilian": "Potion", "imposter": "Poison" },
            { "civilian": "Sword", "imposter": "Shield" },
            { "civilian": "Prophecy", "imposter": "Curse" },
            { "civilian": "Medusa", "imposter": "Hydra" },
            { "civilian": "Zeus", "imposter": "Odin" }
        ]
    },
    {
        "category_name": "brands",
        "display_name": "Brands",
        "pairs": [
            { "civilian": "Coke", "imposter": "Pepsi" },
            { "civilian": "McDonald's", "imposter": "Burger King" },
            { "civilian": "Nike", "imposter": "Adidas" },
            { "civilian": "Apple", "imposter": "Samsung" },
            { "civilian": "Google", "imposter": "Microsoft" },
            { "civilian": "Amazon", "imposter": "eBay" },
            { "civilian": "Toyota", "imposter": "Honda" },
            { "civilian": "Marvel", "imposter": "DC" },
            { "civilian": "Starbucks", "imposter": "Costa" },
            { "civilian": "Disney", "imposter": "Pixar" },
            { "civilian": "Facebook", "imposter": "Twitter" },
            { "civilian": "Visa", "imposter": "Mastercard" }
        ]
    },
    {
        "category_name": "movies-tv",
        "display_name": "Movies & TV",
        "pairs": [
            { "civilian": "Frozen", "imposter": "Moana" },
            { "civilian": "Harry Potter", "imposter": "Lord of the Rings" },
            { "civilian": "Friends", "imposter": "How I Met Your Mother" },
            { "civilian": "Spider-Man", "imposter": "Batman" },
            { "civilian": "The Avengers", "imposter": "Justice League" },
            { "civilian": "Titanic", "imposter": "Avatar" },
            { "civilian": "Inception", "imposter": "The Matrix" },
            { "civilian": "Sherlock", "imposter": "Detective Conan" },
            { "civilian": "Game of Thrones", "imposter": "The Witcher" },
            { "civilian": "Tom and Jerry", "imposter": "Looney Tunes" },
            { "civilian": "Documentary", "imposter": "Reality Show" },
            { "civilian": "Trailer", "imposter": "Movie Clip" }
        ]
    },
    {
        "category_name": "video-games",
        "display_name": "Video Games",
        "pairs": [
            { "civilian": "Mario", "imposter": "Sonic" },
            { "civilian": "League of Legends", "imposter": "Dota 2" },
            { "civilian": "Minecraft", "imposter": "Roblox" },
            { "civilian": "PlayerUnknown's Battlegrounds", "imposter": "Fortnite" },
            { "civilian": "World of Warcraft", "imposter": "Final Fantasy XIV" },
            { "civilian": "The Legend of Zelda", "imposter": "Genshin Impact" },
            { "civilian": "Controller", "imposter": "Joystick" },
            { "civilian": "NPC", "imposter": "Boss" },
            { "civilian": "Health Potion", "imposter": "Mana Potion" },
            { "civilian": "Single-player", "imposter": "Multiplayer" }
        ]
    },
    {
        "category_name": "abstract-concepts",
        "display_name": "Abstract Concepts",
        "pairs": [
            { "civilian": "Love", "imposter": "Friendship" },
            { "civilian": "Dream", "imposter": "Memory" },
            { "civilian": "Freedom", "imposter": "Equality" },
            { "civilian": "Happiness", "imposter": "Excitement" },
            { "civilian": "Bravery", "imposter": "Confidence" },
            { "civilian": "Science", "imposter": "Art" },
            { "civilian": "Loneliness", "imposter": "Sadness" },
            { "civilian": "Truth", "imposter": "Fact" },
            { "civilian": "Time", "imposter": "Space" },
            { "civilian": "Luck", "imposter": "Destiny" }
        ]
    },
    {
        "category_name": "landmarks",
        "display_name": "Famous Landmarks",
        "pairs": [
            { "civilian": "Eiffel Tower", "imposter": "Statue of Liberty" },
            { "civilian": "Great Wall of China", "imposter": "Pyramids of Giza" },
            { "civilian": "The Colosseum", "imposter": "The Parthenon" },
            { "civilian": "Mount Fuji", "imposter": "Mount Everest" },
            { "civilian": "Taj Mahal", "imposter": "Sydney Opera House" },
            { "civilian": "Forbidden City", "imposter": "Buckingham Palace" },
            { "civilian": "Niagara Falls", "imposter": "Victoria Falls" }
        ]
    },
    {
        "category_name": "culture-art",
        "display_name": "Culture & Art",
        "pairs": [
            { "civilian": "Novel", "imposter": "Poem" },
            { "civilian": "Symphony", "imposter": "Opera" },
            { "civilian": "Oil Painting", "imposter": "Watercolor" },
            { "civilian": "Sculpture", "imposter": "Pottery" },
            { "civilian": "Ballet", "imposter": "Modern Dance" },
            { "civilian": "Comedy", "imposter": "Tragedy" },
            { "civilian": "Director", "imposter": "Screenwriter" },
            { "civilian": "Microphone", "imposter": "Headphones" },
            { "civilian": "Prose", "imposter": "Essay" },
            { "civilian": "Calligraphy", "imposter": "Graffiti" },
            { "civilian": "Auction", "imposter": "Exhibition" },
            { "civilian": "Chorus", "imposter": "Solo" }
        ]
    }
];


// Initialize after page load
document.addEventListener('DOMContentLoaded', function() {
    // Environment guard: only run on the word generator page
    if (!document.getElementById('generateBtn')) return;

    const categorySelect = document.getElementById('categorySelect');
    const generateBtn = document.getElementById('generateBtn');
    const resultSection = document.getElementById('resultSection');
    const civilianWord = document.getElementById('civilianWord');
    const imposterWord = document.getElementById('imposterWord');

    // Listen for category selection changes
    categorySelect.addEventListener('change', function() {
        const hasCategory = this.value.trim().length > 0;
        generateBtn.disabled = !hasCategory;
        
        if (!hasCategory) {
            hideResult();
        }
    });

    // Generate words button click event
    generateBtn.addEventListener('click', function() {
        const selectedCategory = categorySelect.value;
        generateWords(selectedCategory);
    });

    // Generate words function
    function generateWords(categoryName) {
        let categoryToUse = categoryName;
        // If 'Random' is selected, pick a random category from the wordBank
        if (categoryToUse === 'random') {
            const availableCategories = wordBank.map(cat => cat.category_name).filter(name => name !== 'random');
            const randomIndex = Math.floor(Math.random() * availableCategories.length);
            categoryToUse = availableCategories[randomIndex];
        }

        // Find the corresponding category
        const category = wordBank.find(cat => cat.category_name === categoryToUse);
        if (!category || !category.pairs || category.pairs.length === 0) {
            alert('No words available for this category');
            return;
        }

        // Randomly select a word pair
        const randomIndex = Math.floor(Math.random() * category.pairs.length);
        const selectedPair = category.pairs[randomIndex];

        // Display results
        showResult(selectedPair);

        // Add generation animation effect
        generateBtn.textContent = '🎲 Generating...';
        generateBtn.disabled = true;

        setTimeout(() => {
            generateBtn.textContent = '🎲 GENERATE WORDS';
            generateBtn.disabled = false;
        }, 500);
    }

    // Display results
    function showResult(wordPair) {
        civilianWord.textContent = wordPair.civilian;
        imposterWord.textContent = wordPair.imposter;
        
        resultSection.classList.remove('hidden');
        
        // Scroll to result area
        resultSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });

        // Add display animation
        resultSection.style.opacity = '0';
        resultSection.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            resultSection.style.transition = 'all 0.3s ease';
            resultSection.style.opacity = '1';
            resultSection.style.transform = 'translateY(0)';
        }, 50);
    }

    // Hide results
    function hideResult() {
        resultSection.classList.add('hidden');
        resultSection.style.opacity = '';
        resultSection.style.transform = '';
        resultSection.style.transition = '';
    }

    // Enter key generation
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !generateBtn.disabled) {
            generateBtn.click();
        }
    });
});

// Export word bank for use by other pages
export { wordBank };