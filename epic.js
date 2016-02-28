//eval of unescape of base64
//https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
//http://html5sec.org

//convert all string to bytearray
var key = 30;
function to_byte_array(str) {
	var bytes = [];
	for (var i = 0; i < str.length; ++i) {
		bytes.push(str.charCodeAt(i)+key);
	}
	return bytes;
}
function reverse_byte_array(bytes) {
	var str = "";
	for (var i=0; i<bytes.length; i++) {
		str += String.fromCharCode(bytes[i]-key)
	}
	return str;
}

console.log("\x3a\x2f\x2f");
//convert some string to hex
console.log(to_byte_array("hello world"));
console.log(reverse_byte_array(to_byte_array("hello")));

var table = {
	'0':0,
	'1':1,
	'2':2,
	'3':3,
	'4':4,
	'5':5,
	'6':6,
	'7':7,
	'8':8,
	'9':9,
	'a':10,
	'b':11,
	'c':12,
	'd':13,
	'e':14,
	'f':15,
	'g':16,
	'h':17,
	'i':18,
	'j':19,
	'k':20,
	'l':21,
	'm':22,
	'n':23,
	'o':24,
	'p':25,
	'q':26,
	'r':27,
	's':28,
	't':29,
	'u':30,
	'v':31,
	'w':32,
	'x':33,
	'y':34,
	'z':35,
};

function special_encoding(str) {
	num = 0;
	for (var i=0; i< str.length; i++) {
		num += table[str[i]]*Math.pow(36,str.length-i-1);
	}
	return num;
}

console.log(special_encoding("com"));

//! to cast elements to booleans.
//pack it http://dean.edwards.name/packer/

//window.eval(atob(btoa("console.log('hello');")));

//change the name of functions to names that are very similar
//window[ 11189117..toString(32)+""](1465486..toString(36)+"  "+418581..toString(32));
// cat t.js | uglifyjs -m -e 

//eval(function(p,a,c,k,e,r){e=String;if(!''.replace(/^/,String)){while(c--)r[c]=k[c]||c;k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('2[3..0(1)]=4..0(1)+"://"+5..0(1)+"."+6..0(1)',7,7,'toString|36|document|1698633989591|831805|32488192274|16438'.split('|'),0,{}))
//cat t.js | ./uglifyjs --mangle-props --wrap --compress --mangle
//!function(exports,global){eval(function(n,t,r,e,o,i){if(o=String,!"".replace(/^/,String)){for(;r--;)i[r]=e[r]||r;e=[function(n){return i[n]}],o=function(){return"\\w+"},r=1}for(;r--;)e[r]&&(n=n.replace(new RegExp("\\b"+o(r)+"\\b","g"),e[r]));return n}('2[3..0(1)]=4..0(1)+"://"+5..0(1)+"."+6..0(1)',7,7,"toString|36|document|1698633989591|831805|32488192274|16438".split("|"),0,{})),global.a=exports}({},function(){return this}());
