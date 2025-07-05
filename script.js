const loadQuoteButton = document.getElementById('loadButton');

async function loadRandomQuote() {
    const quotePara = document.getElementById('quotePara');
    const quoteAuthor = document.getElementById('authorName');
    quotePara.innerText = "Loading...";
    quoteAuthor.innerText = "";
    quotePara.classList.remove('fade-in');
    quoteAuthor.classList.remove('fade-in');

    const random = quotes[Math.floor(Math.random() * quotes.length)];
    quotePara.innerText = `"${random.text}"`;
    quoteAuthor.innerText = `— ${random.author}`;

    console.log(random);
    quotePara.classList.add('fade-in');
    quoteAuthor.classList.add('fade-in');
}

loadQuoteButton.addEventListener('click', loadRandomQuote);
loadRandomQuote(); // Load one quote on page load
