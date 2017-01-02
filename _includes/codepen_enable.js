/*
    
    Auto enables codepen editing of markdown js, html or css code blocks
    credit:
    - https://blog.codepen.io/documentation/api/prefill/
    - http://codepen.io/chriscoyier/pen/FKxjB
    
    andersbc modified the examples in to work with jekyll/github pages
    and clipboard.js (copy to clipboard) functionality.
    
    Markdown usage example:
    
    ```js
    console.log('it works');
    // more javascript here
    ```
    {: .codepen-able}
    
    Assumes this structure in the hmtl: <div><pre><code> ..inside here is the code .. 
    (as is generated by the back ticks in markdown/jekyll)

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
        JS = "",
        copyToClipboard = "";
    
    // editors: controls which editors are open in codepen. "101" = In this example HTML open, CSS closed, JS open
        
    // Determine language type by the element class add by jekylls rouge highlighter
    if (el.hasClass( "language-js" )) {
        JS = codeInside.text();
        editors = "001"
    } else if (el.hasClass( "language-html" )) {
        HTML = codeInside.text();
        editors = "100";
    } else if (el.hasClass( "language-css" )) {
        CSS = codeInside.text();
        editors = "010";
    }
    
    // Just concatenate to get the text to copy to clipboard
    copyToClipboard = JS + HTML + CSS;
    
    // data for CodePen
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
        '<div class="code-example-actions">' +
            '<button class="clipboard-copy" data-clipboard-text ="' + copyToClipboard + '">Copy code | </button>' + 
            '<input type="submit" value="View in CodePen" class="codepen-mover-button">' +
        '</div>' +
      '</form>';
    preEl.append(form);

  });
  
});
