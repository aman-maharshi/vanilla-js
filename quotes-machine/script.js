let quotes = [  "Little by little, one travels far.",
                "Whatever you are, be a good one.",
                "Be prepared, someday your chance will come.",
                "Be the change you want to see in the world.",
                "I don't think of all the misery but of the beauty that still remains.",
                "Happiness only real when shared.",
                "The core of man's spirit comes from new experiences.",
                "The virture lies in the struggle not in the prize.",
                "Our life is what our thoughts make of it.",
                "How we spend our days is, of course, how we spend our lives.",
                "Happiness does not consist in pastimes and amusements but in virtuous activities.",
                "There are two things to aim at in life: first, to get what you want; and, after that, to enjoy it. Only the wisest of mankind achieve the second.",
                "Nobody made a greater mistake than he who did nothing because he could do only a little.",
                "Action is the antidoe to despair.",
                "If you want to achieve widespread impact and lasting value, be bold.",
                "Our main business is not to see what lies dimly at a distance but to do what lies clearly at hand.",
                "With the new day comes new strength and new thoughts.",
                "A strong positive self-image, is the best possible preparation for success.",
                "What one can be one must be.",
                "It is never too late to be what you might have been.",
                "Even the smallest victory is never to be taken for granted. Each victory must be applauded, because it is so easy not to battle at all, to just accept and call that acceptance inevitable.",
                "You can't ever reach perfection, but you can believe in an asymptote toward which you are ceaselessly striving.",
                "The greatest discovery of any generation is that a human can alter his life by altering his attitude.",
                "The most important thing about art is to work. Nothing else matters except sitting down every day and trying.",
                "Forget about being an expert or a professional, and wear your amateurism (your heart, your love) on your sleeve. Share what you love, and the people who love the same things will find you.",
                "Doubt kills more dreams than failure ever will.",
                "If it's important to you, you will find a way. If not, you will find an excuse.",
                "It is not the mountains we conquer but ourselves.",
                "There is no greater agony than bearing an untold story inside you.",
                "Don't wait. The time will never be just right.",
                "Most people work hard and spend their health trying to achieve wealth and once they retire, they spend their wealth trying to get back their health.",
                "One man practicing sportsmanship is better than a hundred teaching it.",
                "Success each day should be judged by the seeds sown, not the harvest reaped.",
                "We are the creative force of our life, and through our own decisions rather than our conditions, if we carefully learn to do certain things, we can accomplish those goals.",
                "He whose life has a why can bear almost any how.",
                "Set your house in perfect order before you criticize the world.",
                "Pursue what is meaningful (not what is expedient)."
        ];
let authors = ["J.R.R. Tolkien", "Abraham Lincoln", "Abraham Lincoln", "Mahatma Gandhi", "Anne Frank", "Christopher Mcandles", 
                "Christopher Mcandles", "Richard Monckton Milnes", "Marcus Aurelius", "Annie Dillard", "Aristrotle", 
                "Logan Pearsall Smith", "Edmund Burke", "Joan Baez", "Howard Schultz", "Thomas Carlyle", 
                "Eleanor Roosevelt", "Kamal Ravikant", "Abraham Maslow", "George Eliot", "Audre Lorde", "Paul Kalanithi",
                "William James", "Steven Pressfield", "Austin Kleon", "Suzy Kassem", "Ryan Blair", "Edmund Hillary",
                "Maya Angelou", "Napoleon Hill", "Unknown", "Knute Rockne", "John C. Maxwell", "Stephen Covey",
                "Friedrich Nietzshe", "Jordan B. Peterson", "Jordan B. Peterson"
        ];

// console.log(quotes.length, authors.length)

let newQuote = document.getElementById('new-quote'),
        quoteDiv = document.getElementById('text'),
        authorDiv = document.getElementById('author'),
        random, quote, author;


document.addEventListener('DOMContentLoaded', loadQuote);
newQuote.addEventListener('click', loadQuote);

function loadQuote() {
        random = Math.floor(Math.random() * quotes.length);
        quote = quotes[random];
        author = authors[random];
        author = "- "+author;
        quoteDiv.textContent = quote;
        authorDiv.textContent = author;
}

