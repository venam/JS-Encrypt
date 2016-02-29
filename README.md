#JS Obfuscation by hand

_A mini test on JS obfuscation_

Usually used in hiding XSS from the "advanced users".

More info on server side abuse [here](http://html5sec.org)

* Strings as byte array
* Packer
* Key based hashing
* Hexify string
* Use of `eval`
* Abuse of the "everything is an object" principle
* base64
* Integer casting abuse


###Abuse of the "everything is an object" principle

Everything is an object so functions are properties of that object.
Even the window, and document objects.
So you can call window.location as window['location'].
Abusing that and obfuscating the string we can get some nice results.

For example, we can use integer casting to string instead of location.

```
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
```

The function above give you an integer that when converted to base 36 will translate to a string.
```
'location' => 1698633989591..toString(36)
```

We could also split the string in multiple parts an concatenate for a more advanced obfuscation.

