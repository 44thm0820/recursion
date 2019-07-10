// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  
  let arrElementsWithClassName = [];
  node = node || document.body;

  let parts = node.className.split(' ');
  if ( parts.includes( className ) ) {
    arrElementsWithClassName.push(node);
  }

  for (let child of node.children) {
    let childResults = getElementsByClassName(className, child);
    arrElementsWithClassName = arrElementsWithClassName.concat(childResults);
  }
  
  return arrElementsWithClassName;
};

