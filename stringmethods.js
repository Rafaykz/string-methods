// string length

var str = "javascript is a great language";
var a = str.length;
document.write(a);
// string length
document.write("<br><br>")
// string lower and upper case 

var str = "javascript is a GREAT language";
var a = str.toLowerCase();
document.write(a);

document.write("<br><br>")


var str = "javascript is a GREAT language";
var a = str.toUpperCase();
document.write(a);

// string lower and upper case 
document.write("<br><br>")

// string includes

var str = "javascript is a GREAT language";
var a = str.includes("is");
document.write(a);  

// string includes 
document.write("<br><br>")

// string starwith endwith 
var str = "javascript is a GREAT language";
var a = str.startsWith("javascript");
document.write(a);  

document.write("<br><br>")

var str = "javascript is a GREAT language";
var a = str.endsWith("language");
document.write(a);  


// string starwith endwith 
document.write("<br><br>")

// string search 
var str = "javascript is a GREAT language";
var a = str.search("is");
document.write(a);  

// string search 
document.write("<br><br>")

// string MATCH
var str = "javascript is a GREAT is language";
var a = str.match(/is/g);
document.write(a);  

// string match 
document.write("<br><br>")

// string indexof lastindexof
var str = "javascript is a GREAT is language";
var a = str.indexOf("is");
document.write(a);

document.write("<br><br>")
var str = "javascript is a GREAT is language";
var a = str.lastIndexOf("is");
document.write(a);


// string indexof lastindexof
document.write("<br><br>")

// string replace 
var str = "javascript is a GREAT is language";
var a = str.replace("is", "are");
document.write(a);

// string replace 
document.write("<br><br>")

// string chartAt 
var str = "javascript is a GREAT is language";
var a = str.charAt(6);
document.write(a);

// string chartAt 
document.write("<br><br>")

// string charcodeAT formcharcodeat
var str = "javascript is a GREAT is language";
var a = str.charCodeAt(5);
document.write(a);

document.write("<br><br>")
// var str = "javascript is a GREAT is language";
var a = String.fromCharCode(97);
document.write(a); 
// string charcodeAT formcharcodeat 
document.write("<br><br>")

// string  concate
var str = "javascript is a GREAT is language";
var str2 = "Hello";
var str3 = "World";
var a = str.concat(str2,str3);
document.write(a);

// string  concate
document.write("<br><br>")

// string split 

var str = "javascript is a GREAT is language";
var a = str.split(" ");
document.write(a);

// string split 
document.write("<br><br>")

// string repet
var str = "javascript is a GREAT is language";
var a = str.repeat(5);
document.write(a);

// string repet
document.write("<br><br>")

// string slice
var str = "javascript is a GREAT is language";
var a = str.slice(5);
document.write(a);
document.write("<br><br>")
 
var str = "javascript is a GREAT is language";
var a = str.slice(5,10);
document.write(a);
// string slice 
document.write("<br><br>")

// string substr and substring 
var str = "javascript is a GREAT is language";
var a = str.substring(5,16);
document.write(a);

// string substr and substring 
document.write("<br><br>")

// string tostring valueof
var str = 30;
var a = str.toString();
document.write(a + 30);
document.write("<br><br>")

var str = "javascript is a GREAT is language";
var a = str.valueOf();
document.write(a);

// string tostring valueof 



















