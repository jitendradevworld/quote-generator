const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterButton = document.getElementById('twitter');
const newQuoteButton = document.getElementById('new-quote');

// Get quote from API
async function getQuote(){
    const proxyUrl = 'https://cors-anywhere.herokuapp.com';
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
try {

    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    authorText.innerText = data.quoteAuthor;
    //If author is blank, add unknown
    if(data.quoteAuthor===''){
       authorText.innerText = 'Unknown';
    }else{
        authorText.innerText = data.quoteAuthor;
    }
    //Reduce font size for long quotes
    if(data.quoteText.length > 120){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    //console.log(data);
} catch (error) {
    getQuote();
    console.log('whoops','no error', error);
}

}
function tweetQuote(){
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
}
// Onload
getQuote();