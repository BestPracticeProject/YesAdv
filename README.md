#[startPoint](https://github.com/dimaspirit/sp/)
  **startPoint v.0.1** is a set of commonly agreed rules and techniques for front-end work.  
  It's a good starting point for modern web.

  >*Easy to customize — remove whatever you don't need, keep what you do.*

It contains:
- index.html;
  - IE-specific classes for simple CSS-targeting. [More info](http://www.paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/);
  - Meta tags:
    - main meta tags;
    - mobile optimization meta tags;
    - meta tags for [Open Graph protocol](http://ogp.me/) (uses Facebook);
    - Favicon: standart (16x16) + apple-touch-icon (x3). [More info](https://github.com/audreyr/favicon-cheat-sheet);
- [Modernizr](http://modernizr.com/) v2.7.2;
- [jQuery](http://jquery.com/) fallback calls - v.1.11.1;
- common.css:
  - [reset css](http://meyerweb.com/eric/tools/css/reset/ "Eric Meyer");
  - [Box model](http://www.paulirish.com/2012/box-sizing-border-box-ftw/ "* { Box-sizing: Border-box } FTW");
  - [normalize.css](necolas.github.io/normalize.css/) v3.0.1;
  - minimal grid;
  - helper classes;
- For IE:
  - [HTML5shiv](https://code.google.com/p/html5shim/ "Google CDN");
  - [Respond](https://github.com/scottjehl/Respond "respond.js");

##Ideology
  - Mobile-first;
  - [Responsive](http://alistapart.com/article/responsive-web-design "Responsive Web Design
by Ethan Marcotte");
  - Graceful degradation;
  - [BEM](http://bem.info/ "http://bem.info/").

##Browser & Device Support
  We support the idea of Graceful degradation, so try not to forget about dinosaurs.  
  For convenience, we use IE-specific classes. IE6+

##License:
  The code and design are released into public domain and are free to use under [Unlicense](http://unlicense.org/).


