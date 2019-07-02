// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  let arrElementsWithClassName = [];
  //above will not become an array but an HTMLCollection object when filled
  //The HTMLCollection interface represents a generic collection
  //(array-like object similar to arguments) of elements (in document order)
  //and offers methods and properties for selecting from the list.
  //Properties: HTMLCollection.length returns the number of items in the collection
  //Methods:
  //  HTMLCollection.item() returns the specific node at the given zero-based
  //   index into the list. 

  function findElementsWithClassName(element) {
    //Element.classList is a read-only property that returns
    //a live DOMTokenList collection of the class attributes of the element.
    
    //The DOMTokenList interface represents a set of space-separated tokens.
    //Such a set is returned by Element.classList, HTMLLinkElement.relList,
    //HTMLAnchorElement.relList, HTMLAreaElement.relList, 
    //HTMLIframeElement.sandbox, or HTMLOutputElement.htmlFor.
    //It is indexed beginning with 0 as with JavaScript Array objects.
    //DOMTokenList is always case-sensitive.
    if (element.classList && element.classList.contains(className)) {
      arrElementsWithClassName.push(element);
    }
    //childNodes is a NodeList - loop using a for loop, forEach, for...of
    //Don't use for...in  per MDN
    // element.childNodes.forEach( child => findElementsWithClassName(child) );
    for (let child of element.childNodes) {
      findElementsWithClassName(child);
    }
  }

  findElementsWithClassName(document.body);
  return arrElementsWithClassName;
};

/* 
Bare minimum Requirements
-Replace stringifyJSON with your own
function in src / stringifyJSON.js, and make the specs pass.

-Implement getElementsByClassName with your own
function in src / getElementsByClassName.js, and make the specs pass.
You should use document.body, element.childNodes, and element.classList
*/