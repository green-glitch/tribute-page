const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#quote-author");

const quotes = [
    {
        qt:"He is a poet who awakened the nation to fight for freedom.",
        qa:"Ignacy Jan Paderewski"
    },
    {
        qt:"Mickiewicz is a genius whose creative power knew no bounds. His words still resonate in the hearts of Poles, inspiring successive generations.",
        qa:"Henryk Sienkiewicz"
    },
    {
        qt:"Adam Mickiewicz is a poet who made the Polish language more beautiful and richer through his works. His poetry is a true national treasure.",
        qa:"Czesław Miłosz"
    },
    {
        qt:"Mickiewicz is a poet of heart and soul, whose verses carry extraordinary emotional strength. His works move and touch everyone fortunate enough to know them.",
        qa:"Maria Konopnicka"
    },
    {
        qt:"Adam Mickiewicz is a master of words who could capture both the beauty of nature and the depth of human feelings in his works. His poetry is a true feast for the spirit",
        qa:"Zygmunt Krasiński"
    },
    {
        qt:"He is a poet who awakened the nation to fight for freedom.",
        qa:"Ignacy Jan Paderewski"
    },
]

function quoteUpdate(){
    const random = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = '"' + quotes[random].qt + '"';
    quoteAuthor.textContent = "- " + quotes[random].qa;
}

quoteUpdate();