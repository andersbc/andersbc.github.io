$(function() {
$(".codepen-able").each(function() {

    /*
    
    Auto enables codepen editing of markdown js, html or css code blocks
    
    andersbc modified the examples in to work with jekyll/github pages:
    https://blog.codepen.io/documentation/api/prefill/
    http://codepen.io/chriscoyier/pen/FKxjB
    
    Markdown usage example:
    
    ```js
    console.log('it works');
    // more javascript here
    ```
    {: .codepen-able}

*/
    
    var el = $(this),
        type = "",
        codeInside = el.find("code"),
        isCodeInside = codeInside.length,
        HTML = "",
        CSS = "",
        JS = "";
        
    // determine language type
    if (el.hasClass( "language-js" )) {
        type = "js"; 
    } else if (el.hasClass( "language-html" )) {
        type = "html"; 
    } else if (el.hasClass( "language-css" )) {
        type = "css"; 
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
        '<input type="sumbit" value="Edit in codepen" class="codepen-mover-button">' +
      '</form>';

    el.append(form);

  });
  
});
