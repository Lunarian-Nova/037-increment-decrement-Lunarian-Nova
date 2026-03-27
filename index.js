let counter = 100;
let prefixIncrement = ++counter;
let postfixIncrement = counter++;
let prefixDecrement = --counter;
let postfixDecrement = counter--;

document.getElementById('result').innerHTML = counter;

// Export for the test envronment (puppeteer page.evaluate() can access global vars)
window.counter = counter;
window.prefixIncrement = prefixIncrement;
window.postfixIncrement = postfixIncrement;
window.prefixDecrement = prefixDecrement;
window.postfixDecrement = postfixDecrement;
