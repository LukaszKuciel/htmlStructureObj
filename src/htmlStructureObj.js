//creates array of all elements in document//
let htmlDOM = [...document.querySelectorAll('*')];

let htmlRecursion = (nodes, parent) => {
  let structure = {};
  nodes
    .filter(n => n.parentNode === parent)
    .map((n,i) => structure[i+1+'.'+n.localName] = htmlRecursion(htmlDOM, n));
  return structure;
}

//logs JSON object with html structure//
console.log( JSON.stringify( htmlRecursion(htmlDOM, document), null, 2 ));

//logs Js object with html structure//
console.log( htmlRecursion(htmlDOM, document));
