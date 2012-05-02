var parser = require("./parser.js");
var compiler = require("./jsCompiler.js");

var arguments = process.argv.splice(2);

if (arguments.length < 1) {
	console.log("Bro, nothing to rage on.");
}

var parseTree = parser.parse(arguments[0]);
var compiledCode = compiler.compile(parseTree);

var fs = require('fs');
var fileName = "output.js";

if (arguments.length > 1) {
	fileName = arguments[1];
}

fs.writeFile(fileName, compiledCode, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("Done!");
    }
}); 