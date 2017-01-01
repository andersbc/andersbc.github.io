/*
    
    Auto enables codepen editing of markdown js, html or css code blocks
    credit:
    - https://blog.codepen.io/documentation/api/prefill/
    - http://codepen.io/chriscoyier/pen/FKxjB
    
    andersbc modified the examples in to work with jekyll/github pages
    
    Markdown usage example:
    
    ```js
    console.log('it works');
    // more javascript here
    ```
    {: .codepen-able}

*/

$(function() {
$(".codepen-able").each(function() {
    var el = $(this),
        type = "",
        preEl = el.find("pre"),
        codeInside = el.find("code"),
        isCodeInside = codeInside.length,
        editors = "111", 
        HTML = "",
        CSS = "",
        JS = "";

    // editors: controls which editors are open in codepen. "101" = In this example HTML open, CSS closed, JS open
        
    // determine language type
    if (el.hasClass( "language-js" )) {
        type = "js"; 
        editors = "001"
    } else if (el.hasClass( "language-html" )) {
        type = "html"; 
        editors = "100"
    } else if (el.hasClass( "language-css" )) {
        type = "css"; 
        editors = "010"
    }
    
    if (type == "html") {
      if (codeInside) {
        HTML = codeInside.text();
      } else {
        HTML = el.text();
      }
    } else if (type == "css") {
      if (codeInside) {
        CSS = codeInside.text();
      } else {
        CSS = el.text();
      }
    } else if (type == "js") {
      if (codeInside) {
        JS = codeInside.text();
      } else {
        JS = el.text();
      }
    }

    var data = {
      title              : "",
      description        : "",
      editors            : editors,                 
      html               : HTML,
      html_pre_processor : "none",
      css                : CSS,
      css_pre_processor  : "none",
      css_starter        : "neither",
      css_prefix_free    : false,
      js                 : JS,
      js_pre_processor   : "none",
      js_modernizr       : false,
      js_library         : "",
      html_classes       : "",
      css_external       : "",
      js_external        : ""
    };

    var JSONstring = 
      JSON.stringify(data)
      // Quotes will screw up the JSON
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

    var form = 
      '<form action="http://codepen.io/pen/define" method="POST" target="_blank">' + 
        '<input type="hidden" name="data" value=\'' + 
          JSONstring + 
          '\'>' + 
        '<input type="image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-1/cp-arrow-right.svg" width="40" height="40" value="Open in codepen" class="codepen-mover-button">' +
      '</form>';

    preEl.append(form);

  });
  
});
