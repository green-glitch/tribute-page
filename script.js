// MIT License

// Copyright (c) 2024 Krzysztof "green-glitch" Kalinowski

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

/**
 * Updates the quote text and author elements with a random quote from the quotes array.
 *
 * 
 * // Call the quoteUpdate function to update the quote text and author elements
 * quoteUpdate();
 *
 * // Output:
 * // Quote text element: "He is a poet who awakened the nation to fight for freedom."
 * // Quote author element: "- Ignacy Jan Paderewski"
 */
const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#quote-author");

/**
 * Array of quote objects, each containing a quote text (qt) and a quote author (qa)
 */
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
        qt:"Mickiewicz is a great poet whose works are an invaluable gift to Polish literature. His poems and epics continue to impress with their form and content, being immortal works of art.",
        qa:"Juliusz Słowacki"
    },
]

/**
 * Updates the quote text and author elements with a random quote from the quotes array.
 */
function quoteUpdate(){
    const random = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = '"' + quotes[random].qt + '"';
    quoteAuthor.textContent = "- " + quotes[random].qa;
}

// Call the quoteUpdate function to update the quote text and author elements
quoteUpdate();