/*
// Make an keyless car EVEN BETTER!
// We are improving our car from previous exercise now. 


var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
function checkDriverAge() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?


//2. Create another function that does the same thing, assign it to checkDriverAge2 variable using Function Expression.
var checkDriverAge2 = function() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!" 

function checkDriverAge(age) {
	if (Number(age) < 18) {
		return "Sorry, you are too yound to drive this car. Powering off";
	} else if (Number(age) > 18) {
		return "Powering On. Enjoy the ride!";
	} else if (Number(age) === 18) {
		return "Congratulations on your first year of driving. Enjoy the ride!";
	}
}

var user = {
	username: "Martin",
	password: "secret",
	hobby: "gaming",
	games: ["Fifa", "Fortnite", "Overcooked"],
	shout: function() {
		console.log("AHAAAHHHHHHH");
	}
};

var database = [user];

var newsfeed = [
	{
		username: "Martin",
		timeline: "blabla"
	},
	{
		username: "Jent",
		timeline: "yeayea"
	},
	{
		username: "Mila",
		timeline: "yedieyedie"
	}
	];



// Facebook2 login
var database = [
	{
		username: "martin",
		password: "1"
	},
	{
		username: "harry",
		password: "xxxx"
	},
	{
		username: "sally",
		password: "secret"
	}	
	];

var newsfeed = [
	{
		username: "Martin",
		timeline: "blabla"
	},
	{
		username: "Jent",
		timeline: "yeayea"
	},
	{
		username: "Mila",
		timeline: "yedieyedie"
	}
	];


function isUserValid(username, password){
for (var i = 0; i < database.length; i++){
	if (database[i].username === username && database[i].password === password) 
		{
		return true;
		}
	}return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)) 
	{
		for (var i = 0; i < newsfeed.length; i++){
			console.log(newsfeed[i].username,": ",newsfeed[i].timeline,);}
	} else {
		alert("Sorry, wrong username and password");
	}
};

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);


// advanced functions : Child scope has always access to the parent scope == Closures

const first = () => {
	const greet = 'Hi';
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

//Currying: convert a function that takes multiple arguments into a function that takes them one at a time

const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);
curriedMultiply(3)(4);
multiplyBy5(6)

//compose: putting 2 functions together, perform a 3rd function where the output of 1 function is the input of the other

const compose = (f,g) => (a) => f(g(a));

const sum = (num) => num = 1;

compose (sum, sum)(5);


 // advanced arrays

const array = [1, 2, 10, 16]

const double = []
const newArray = array.forEach((num)=>{
 	double.push(num *2);
 })

 console.log('forEach',double);

 // map, filter, reduce
 // map users another array to convert it into a new array expects an operation to return an element. this is prefered over the for each way

 const mapArray = array.map((num) => {
 	 return num * 2;
 })

 // same but with the shorthand notation:
  const mapArray1 = array.map(num => num * 2);

 console.log('map',mapArray);
  console.log('map1',mapArray1);


 // filter  only 

 const filterArray = array.filter(num => num > 5);
  console.log('filter',filterArray);

  // reduce 
  const ThisIsTheAccumulator = 2

  const reduceArray = array.reduce((accumulator,num) => {
  return accumulator + num
  }, ThisIsTheAccumulator);
    console.log('reduce',reduceArray);

 /// advanced objects

 // reference type
 var object1 = { value: 10};
 var object2 = object1; // object2 is referencing object1
 var object3 = { value: 10}; // object3 is a new object (with the same content)

 if (object1.value === object3.value) {
 	console.log('same');
 }
 else{
 	 	console.log('different');
 }

// an object is always by reference, so if you want to clone an object you can do like for array d;

var c = [1,2,3,4,5]
var e = c; // referenced
var d = [].concat(c); // copied
d.push(76543);
console.log(c);
console.log(d);
console.log(e);
e.push(6543);
console.log(c);
console.log(d);
console.log(e);

// cloning object

let obj = {a: 'a', b: 'b', c: 'c'}
let obj2 = obj; // referenced
let clone = Object.assign({},obj); // copied method1 = shallow clone : only clone 1st layer
let clone2 = {...obj}; // copied method2 = shallow clone : only clone 1st layer

obj.c = 5;

console.log('obj2',obj2);
console.log('clone',clone);
console.log('clone2',clone2);
console.log('obj',obj);



let obj = {
	a: 'a', 
	b: 'b', 
	c: {
		deep: 'try and copy me'
	}
};

let obj2 = obj; // referenced
let clone2 = {...obj}; // copied method2 = shallow clone : only clone 1st layer
let superClone = JSON.parse(JSON.stringify(obj)); // copied method3 deep cloning: all layers (can have negative performance implications)


obj.c.deep = 'hahaha';

console.log('obj',obj);
console.log('obj2',obj2);
console.log('clone2',clone2);
console.log('super',superClone);

 // context (get confused a lot with scope, but this is different) tells where we are within the object
 // this just refereces to what object is it inside off

 function b() {
 	let a = 4;
 }
//outside function b, a is unknown


 const object4 = {
 	a: function(){
 		console.log(this);
 	}
 }
 

 //instantiation (make a copy of an object and re-use the code)  use extends and super as syntax
class Player {
	constructor(name, type) {
		console.log('player',this);
		this.name = name;
		this.type = type;
	}
introduce () {
	console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
	}
}

class Wizzard extends Player {
	constructor (name, type) {
		super(name,type)
		console.log('wizzard',this);
	}
	play(){
		console.log(`Yeah, I'm a ${this.type}`);
	}
}

const wizzard1 = new Wizzard('Jent', 'Sloper');
const wizzard2 = new Wizzard('Mila', 'Heks');


// type coercion   ; takeway always use tripple "=" or in very exceptional cases Object.is

1 == '1'  // is true because JS converts it into 1 == 1

1 === '1'  // is false because JS doesn't converts it into 1 == 1

if (1) {console.log(5);} // JS converts (1) into (TRUE)

-0 === +0;  // is true
Object.is (-0,+0);  //  is false



//ES7 includes

let pets = ['cat', 'dog', 'bat'];
if (pets.includes('cat')) {
	console.log('true');
}
else
{
	console.log('false');
}


// ES7

let square = (x) => x**2;
let cube = (y) => y**3;



//ES8 .padStart()  & .padEnd()
let word = "word"
let tenDigitWord = word.padEnd(10);
console.log(tenDigitWord) 

// comma's can be left at the end
let fun = (a,b,c,d,) => {
	console.log(a,b);
}

fun (1,2,3,4)


// ES8 make an object into an Array

let obj = {
	username0: 'Martin',
	username1: 'Jent',
	username2: 'Mila'
}

Object.keys(obj).forEach((key, index) => {
	console.log('key',key, obj[key]);
})

Object.values(obj).forEach(value => {
	console.log('value',value);
})

Object.entries(obj).forEach(value => {
	console.log('entryValue',value);
})

// convert the object into a new array

let nieuwArray = Object.entries(obj).map(value => {
	return value[1] + value[0].replace('username', '');
})
console.log('nieuwArray',nieuwArray);


// ES8 Async Await

// ES10


*/
// use flat to remove layers from within an array or remove blanks
const array = [1,2,3,,,,,,4,5,6,[7,8,[9,10]]];
let newArray1 = array.flat();
let newArray2 = array.flat(2);

// flatMap()

let newArray3 = array.flatMap(number => number + 'x');

const userEmail1 = 'martin.mulder@me.com           '
const userEmail2 = '       johnDoe@downunder.au'
console.log(userEmail1,".",userEmail2)
console.log(userEmail2.trimStart())
console.log(userEmail1.trimEnd())

// fromEntries make an array into an object

userProfiles = [['Martin',46],['Jent',8],['Mila',10]];

const obj = Object.fromEntries(userProfiles)

// try catch block

try {
	bob + 'hi'
} catch {
	console.log('you messed up')
}



const basket = ['apples', 'grapes', 'oranges'];

//1
for ( let i = 0; i < basket.length; i++) {
	console.log(basket[i]);
}

//2
basket.forEach(item => {
	console.log(item);
})

// for of loop  =  itterating over the array; able to go 1 by 1 through an arrays and strings (will not work for object)
for (item of basket) {
	console.log(item);
}


// for in loop (loop over an object and see the object properties) this is not called iterating, but is called enumerating)

const detailedBasket = {
	apples: 5,
	grapes: 1000,
	oranges: 10
}

for (item in detailedBasket) {
	console.log(item)
}

// end



