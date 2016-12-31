$(function() {
$(".codepen-able").each(function() {

    // andersbc modified the examples in to work with jekyll/github pages:
    // https://blog.codepen.io/documentation/api/prefill/
    // http://codepen.io/chriscoyier/pen/FKxjB
    
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
        HTML = codeInside.html();
      } else {
        HTML = el.html();
      }
    } else if (type == "css") {
      if (codeInside) {
        CSS = codeInside.html();
      } else {
        CSS = el.html();
      }
    } else if (type == "js") {
      if (codeInside) {
        JS = codeInside.html();
      } else {
        JS = el.html();
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
        '<input type="image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-1/cp-arrow-right.svg" width="40" height="40" value="Create New Pen with Prefilled Data" class="codepen-mover-button">' +
      '</form>';

    el.append(form);

  });
  
});
