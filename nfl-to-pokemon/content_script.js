var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes)
        {
            [].slice.call(mutation.addedNodes).forEach(function(node) {
                walk(node);
            });
        } 
    });
});

observer.observe(document, {
    childList: true,
    subtree:   true
});

function walk(node) 
{
  // I stole this function from here:
  // http://is.gd/mwZp7E
  
  var child, next;
  
  switch ( node.nodeType )  
  {
    case 1:  // Element
      if (node.tagName.toLowerCase() == "script" || node.tagName.toLowerCase() == "input" || node.tagName.toLowerCase() == "textarea" ||
          node.classList.contains("ace_editor"))
      {
        return;
      }
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) 
      {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      handleText(node);
      break;
  }
}

function handleText(textNode) 
{
  if (textNode.parentNode.tagName.toLowerCase() == "script")
  {
    return;
  }
  
  var v = textNode.nodeValue;
  
  for (var i = 0; i < replacements.length; i++)
  {
    var rv = v.replace(replacements[i][0], replacements[i][1]);
    if (rv != v)
    {
      if (replacements[i][3] == 1)
      {
        replacements[i][3] = 0;
        var alts = replacements[i][2];
        for (var j = 0; j < alts.length; j++)
        {
          replacements.push([buildRegExp(alts[j]), replacements[i][1], [], 0]);
        }
      }      
      v = rv;
    }
  }
  textNode.nodeValue = v;
}


