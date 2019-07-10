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

