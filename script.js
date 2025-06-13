const loadQuoteButton = document.getElementById('loadButton');
        
async function loadRandomQuote() {
    const quotePara = document.getElementById('quotePara');
    const quoteAuthor = document.getElementById('authorName');
    quotePara.innerText = "Loading...";
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();  // FIXED HERE
        quotePara.classList.remove('fade-in');
        quoteAuthor.classList.remove('fade-in');

        setTimeout(()=>{
            quotePara.innerHTML = `<span class="fade-in">"${data.content}"</span>`;
            quoteAuthor.innerHTML = `<span class="fade-in">— ${data.author}</span>`;

            quotePara.classList.add('fade-in');
            quoteAuthor.classList.add('fade-in');
        },100);
        } 
    catch (error) {
        console.log("Error:", error);
        quotePara.innerText = "ERROR!!";
    }
}

loadQuoteButton.addEventListener('click', loadRandomQuote);