# jQuery Selectors

## Instructions

### Selector Challenge

 Let’s use the selector technique to select the following:

* All images, based on the element type
* The card_image class
* The footer, using its id
* All paragraph tags within the footer
* All header elements (&lt;h1 through &lt;h6&gt;)
* The first element on the page
* The last div on the page
* The last image on the page
* All elements with an href attribute

### Challenge 1

From the example we have been working on: 
* Try changing the content of all the paragraphs on the page in one go.

### Challenge 2

Continuing from Challenge 1: 
* Append a span element to every paragraph already on the page. (Some lorem ipsum text will be ok) 
* Remove all links from the page. 
* Empty all divs with class .card

### Challenge 3

We can also use the console to temporarily enable jQuery on pages that don’t already have it loaded. Run the following three commands in the console, to manually add jQuery to the page’s DOM:

``` javascript
    var script = document.createElement('script');
    script.src = "//code.jquery.com/jquery-latest.min.js";
    document.head.appendChild(script);
```

* Go to eir.ie Load jQuery and use it to:
    * find out the font-family used for paragraphs
    * find out the font-family used for &lt;h2&gt;’s
    * change the text of each paragraph (i.e. the &lt;p&gt; element) to your name
* Go to Stack Overflow:
    * Load jQuery and use it to change the following:
        * background-color
        * font-family for paragraph 