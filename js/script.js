// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", intervalQuote, false);

// Array & Object definition
var quotes = [
  {quote: "Laughing at our mistakes can lengthen our own life. Laughing at someone else’s can shorten it", source: "Cullen Hightower", citation: "", year: "", tag: "Humor Quotes"},
  {quote: "The richest man is not he who has the most, but he who needs the least", source: "Unknown Author", citation: "", year: "", tag: "Wisdom Quotes"},
  {quote: "You must be the change you wish to see in the world", source: "Gandhi", citation: "", year: "1932", tag: "Wisdom Quotes"},
  {quote: "What the world needs is more geniuses with humility, there are so few of us left", source: "Oscar Levant", citation: "",  year: "", tag: "Humor Quotes"},
  {quote: "Believe those who are seeking the truth. Doubt those who find it", source: "André Gide", citation: "", year: "", tag: "Otherwise Intelligent Quotes"},
  {quote: "Billetera mata galán", source: "Jacobo Winograd", citation: "Las epopeyas de Jacobo", year: "2001", tag: "Humor Quotes"},
];
var quotesViewed =[];


// Functions
  // This function generate a random number using as parameters the quotes object length
  function getRandomQuote() {

    var rNumber = Math.floor(Math.random() * quotes.length); // Random number generator

    // Manage random number repeat
    var quoteSplice = quotes.splice(rNumber, 1)[0];
    quotesViewed.push(quoteSplice);
    if (quotes.length === 0) {
      quotes = quotesViewed;
      quotesViewed = [];
    }

    return quoteSplice;
  }

  // printQuote function is used for print the quote in page with document.write
  function printQuote() {

      var quote = getRandomQuote(); // Call getRandomQuote function and put the return into a variable

      // presentation structure
      var html = '<p class="quote">' + quote.quote + '</p>';
      html += '<p class="source">' + quote.source;
      if (quote.citation !== "") {
        html += '<span class="citation">' + quote.citation + '</span>';
      }
      if (quote.year !== "") {
        html += '<span class="year">' + quote.year + '</span>';
      }
      html += '</p>';
      if (quote.tag !== "") {
        html += '<h3>' + quote.tag + '</h3>';
      }

    	randomColor();
    	document.getElementById('bgcolor').style.backgroundColor = randomColor(); //Update background with new random color
      document.getElementById('quote-box').innerHTML = html; // Show in page the random quote
  }

  // This function make quotes dinamic with 30sec interval
  function intervalQuote() {
      var intervalID = window.setInterval(printQuote, 3000);
  }

  // This function generates a random color for quote presentation
  function randomColor() {
      var rColor;
      var red = Math.floor(Math.random() * 256 );
    	var green = Math.floor(Math.random() * 256 );
    	var blue = Math.floor(Math.random() * 256 );

      rColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

      return rColor;
  }
