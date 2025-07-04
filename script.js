const loadQuoteButton = document.getElementById('loadButton');

async function loadRandomQuote() {
    const quotePara = document.getElementById('quotePara');
    const quoteAuthor = document.getElementById('authorName');
    quotePara.innerText = "Loading...";
    quoteAuthor.innerText = "";

    try {
        const proxyUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://zenquotes.io/api/random');
        const response = await fetch(proxyUrl);
        const proxyData = await response.json();
        const data = JSON.parse(proxyData.contents);

        quotePara.classList.remove('fade-in');
        quoteAuthor.classList.remove('fade-in');

        setTimeout(() => {
            quotePara.innerHTML = `<span class="fade-in">"${data[0].q}"</span>`;
            quoteAuthor.innerHTML = `<span class="fade-in">— ${data[0].a}</span>`;

            quotePara.classList.add('fade-in');
            quoteAuthor.classList.add('fade-in');
        }, 100);
    } catch (error) {
        console.error("Error:", error);
        quotePara.innerText = "ERROR!!";
    }
}

loadQuoteButton.addEventListener('click', loadRandomQuote);
