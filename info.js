// jS is compiled not interpreted
//lexical scoping is what we create and how it
// Es6 ecmaScript 6
//jit ==> just in time
//david.goldberg@makersquare.com

var foo = "bar"

function bar(){
	var foo = "baz"
}

function baz(foo){
	foo = "bam";
	bam = "yay"
}

//lhs always the target (left hand side)
//rhs always the source (right hand side)
//if you use strict, it wont go to global

var foo = "bar"

function bar(){
	var foo = "baz"


function baz(foo){
	foo = "bam";
	bam = "yay"
}
baz()
}

baz();	// 
foo;	// "bar"
bam;	// "yay"
baz();	// "not defined, ref error"


var foo = function bar(){
	var foo = "baz";

	function baz(foo){
		foo = bar;
		foo;
	}
	baz();
}

//lexical and dynamic scope
// lexical scope is defined at run time
//
function foo(){
	var bar = "bar";
	function baz(){
		console.log(bar);
	}
	baz();
}

foo();

// let and constant

function foo(){
	//...
	for (let i = 0; i < Things.length) {
		Things[i]
	};
}
function foo(bar){
	if(bar){
		let bar = baz;
		if(baz)
	}


// tem
}

//temporal dead zone
//let does not get hoisted
//
const a = 4;
console.log(2);
a = 3 // ref error cos it cant be changed


const b = [1,2,3,4];
b.push(5); // this will work cos we are not changing it


//closure
for (var i = 1; i <= 5; i++) {
    setTimeout(function(x) { 
    return function() { 
    console.log(x); 
    	}; 
    }(i), 1000*i);
    
}

var foo = (function(){
	var publicAPI = {
		bar: function() {
			publicAPI.baz();
		},
		baz: function() {
			console.log("baz");
		}
	};
	return publicAPI;
})();
foo.bar();

//mmodule.exports

var o = {bar: "baz"}
export function bar(){
	return o.bar;
}


var invokeOneTime = function(func){
	var called = false;
	var call;
	return function(){
		if(!called){
			call = func.apply(this, arguments);
			called = true;
		}
		return call;
	}
}

var invokeOneTime = function(func){
	var called = false;
	return function(){
		if(!called){
			func();
			called = true;
		}
		return called;
	}
}

var exp = function() {
console.log("aca");
return 1000 * 10
};

var y = invokeOneTime(exp);

//Event Loop
// web api --> numbers of helper in js e.g setTimeout, xmlhttp request, Xom Documents
//heap is memory storage... 
//muddybarefeet
function letterCount(str){
	str = str.split("");
	return str.reduce(function(a, b){
		if(a[b]){
			a[b] += 1
		}else{
			a[b] = 1;
		}
		return a;
	}, {})
}

function multiply(a, b){
	return a * b;
}

function square(n){
	return multiply(n, n);
}

function printSquare(n){
	var squared = square(n);
	console.log(squared) ;
}
printSquare(4);
//16

function foo(){
	throw new Error("oops")
}
function bar(){
	foo()
}
function baz(){
	bar();
}
baz();

function commonCharacters(str, str1){
	return intersection(str, str1);
}

function intersection(set1, set2){
	return Object.keys(set1).reduce(
		function(out, val){
			if(val in set2){
				out[val] = true;
			}
			return out;
		},
		{});
}
function objectify(str){
	return str.split("").reduce(function(acc, curr){
		if(cha.match(/[a-z]/i)) {
		acc[curr] = true;
	}
		return acc;
	}, {});
}
//common characters
function commonCharacters(str, str1){
	var common = intersection(objectify(str), objectify(str1));
	return str1.split("").reduce(function(result, cha){
		if(common[cha]) {
			result += cha;
		}
		return result;
	}, "")
}






