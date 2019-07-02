// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// adapted from alexhawkins/stringifyJSON.js Github Gist

var stringifyJSON = function(obj) {
  
  // if (this === global || this === window && obj === 'function') {
  //       return undefined;
  // }
  let arrElems = [];
  let arrKeys = [];
  let arrKeyValPairs = [];
   
  // your code goes here
  // stringifying numbers and booleans is just .toString()
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    // type conversion
    return String(obj); //ex: '5' 'false' 'null' // revision here
  }
  else if (typeof obj === 'string') {
    return `"${obj}"`;
  }

  else if (typeof obj === 'function') {
        return '';
  }
  else if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return `[]`;
    }
    else {
      for (let elemOfArray of obj) { // for...of is ES6 way of traversing array
        arrElems.push(stringifyJSON(elemOfArray));
      }
      return `[${arrElems}]`;
    }
  }

  else if (!Array.isArray(obj) && obj instanceof Object) {

    arrKeys = Object.keys(obj);
    for (let eleKey of arrKeys) {
      let keyStrung, value;
      keyStrung = `"${eleKey}":`;
      value = obj[eleKey];
      if (typeof value === undefined) {
        continue;
      }
      else if (typeof value === 'function') {
        arrKeyValPairs.push(``);
      }
      else if (typeof value === 'string') {
        arrKeyValPairs.push(`${keyStrung}"${value}"`);
      }
      else if (
        typeof value === 'boolean' 
        || typeof value === 'number'
        || value === null ) {
          arrKeyValPairs.push(`${keyStrung}${value}`); 
        }
        else if (value instanceof Object) { //handles both arrays and objects
          arrKeyValPairs.push(`${keyStrung}${stringifyJSON(value)}`);
        }
    }
    return `{${arrKeyValPairs}}`;
  }

};

/* 
Bare minimum Requirements
-Replace stringifyJSON with your own
function in src / stringifyJSON.js, and make the specs pass.

-Implement getElementsByClassName with your own
function in src / getElementsByClassName.js, and make the specs pass.
You should use document.body, element.childNodes, and element.classList
*/

/* try at non-recursive
  let arrStr = [];
  let strJSON = '';
  for (key in obj) {
    arrStr.push(`"${key.toString()}":${obj[key].toString()}`);
  }
  strJSON = '{' + arrStr.join(',') + '}';
  return strJSON;
*/

/*
From MDN:
The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values
if a replacer
function is specified or optionally including only the specified properties
if a replacer array is specified.
*/
/*
SyntaxSection
JSON.stringify(value[, replacer[, space]])

ParametersSection
value

The value to convert to a JSON string.
replacerOptional
A function that alters the behavior of the stringification process, or an array of String and Number objects that serve as a whitelist
for selecting / filtering the properties of the value object to be included in the JSON string.If this value is null or not provided, all properties of the object are included in the resulting JSON string.
spaceOptional

A String or Number object that 's used to insert white space into the output JSON string for readability purposes.
If this is a Number, it indicates the number of space characters to use as white space;
this number is capped at 10 (if it is greater, the value is just 10).
Values less than 1 indicate that no space should be used.

If this is a String, the string(or the first 10 characters of the string,
if it 's longer than that) is used as white space. If this parameter is not provided (or is null), no white space is used.

Return valueSection A JSON string representing the given value.

ExceptionsSection Throws a TypeError("cyclic object value") exception when a circular reference is found.
*/