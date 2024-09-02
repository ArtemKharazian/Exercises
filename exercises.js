
// aufgabe mit #

let line = "";
for (let i = 0; i < 7; i++) {
    line+= "#"
console.log(line);
}

// aufgabe mit FizzBuzz

let numbCount = 0;

for (let i = 0; i < 100; i++) {
    numbCount += 1;
    if( numbCount % 3 == 0) {
        console.log("Buzz");
        continue
    }
    else if (numbCount % 5 == 0 && numbCount % 3 != 0) {
        console.log("Fizz");
        continue
    }
    else  if(numbCount % 5 == 0 % numbCount % 3 == 0) {
        console.log("FizzBuzz");
        continue
    }
    else {
      console.log(numbCount);
    }
    
}

// aufgabe mit chess

let chess = "";

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if((i + j) % 2 == 0) {
      chess += "#";
    }
    else {
      chess += " ";
    }
  }
  chess += "\n";
}

console.log(chess)

//aufgabe Minimum

function min(a, b) {
    return Math.min(a, b);
}

console.log(min(10, 5));


//aufgabe Recursion

  function isEvent(n) {
    if (n === 0) {
      return "your number is even";
    } else if (n === 1) {
      return "your number is odd";
    } else {
      return isEvent (n - 2);
    }
    
  }
  
  console.log(isEvent(10));

  // aufgabe Counting beans

  function countBs(string) {
    let count = 0;
  
    for (let i = 0; i < string.length; i++) {
      if (string.charAt(i) === "B") {
        count++;
      } 
    }
    return count;
  }
  
  function countChar(string, char) {
    let count = 0;
  
    for (let i = 0; i < string.length; i++) {
      if (string.charAt(i) === char) {
        count++;
      } 
    }
    return count;
  }
  
  console.log(countBs("Barbeque"));
  console.log(countChar("spectrum", "s"));

  //aufgabe Sum of the range

  function range (first, last) {
    var result = [];
    for (var i = first; i <= last; i++) {
      result.push(i);
    }
    return result;
  }

  
  console.log(range(1, 10));
  
  function sum(result) {
    var total = 0;
    for (j = 0; j < result.length; j++) {
      total += result[j];
    }
     return total;
  }

  console.log(sum(range(1, 10)));


  function rangeBonus (first, last, step = 1) {
    var result = [];
    if (step > 0) {
      {
        for (var i = first; i <= last; i += step) {
          result.push(i);
        }
        return result;
      }
    }
    } 
  
  console.log(rangeBonus(2, 10, 2));


  // aufgabe Reversing the array

  function reverseArray (myArray) {
    return myArray.reverse(); 
  }
  
  console.log(reverseArray([1, 2, 3, 4, 5]));

  //oder 

  function reverseArray(array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
    }

console.log(reverseArray([1, 2, 3, 4, 5]));

//function reverseArrayInPlace habe ich nicht vertanden.

// aufgabe List

function arrayToList (array) {
    let list = null;
    for(let i = array.length - 1; i >= 0; i--) {
      list = { value: array[i], rest: list };
    }  
    return list;
  }
  
  console.log (arrayToList([1, 2, 3]));

  function listToArray (list) {
    let array = [];
    while (list !== null) {
      array.push(list.value);
      list = list.rest;
      }
      return array;
    }
  
  console.log(listToArray(arrayToList([1, 2, 3])));


  
// Aufgabe Convolution

var arrays = [[1, 2, 3], [4, 5], [6]];

let myArray = arrays.reduce((total, currentArray) => total.concat(currentArray), []);

console.log(myArray);

//Aufgabe Age difference between mothers and their children

var ANCESTRY_FILE = JSON.stringify([
  {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
  {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
  {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
  {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
  {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
  {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
  {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
  {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
  {"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"},
  {"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null},
  {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"},
  {"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"},
  {"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"},
  {"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null},
  {"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"},
  {"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"},
  {"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null},
  {"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"},
  {"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"},
  {"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"},
  {"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"},
  {"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"},
  {"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"},
  {"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"},
  {"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"},
  {"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"},
  {"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"},
  {"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}
]);

let ancestry = JSON.parse (ANCESTRY_FILE);


function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

let ageDifferences = [];

ancestry.forEach(function(person) {
    if (byName[person.mother]) {
        let motherAgeAtBirth = person.born - byName[person.mother].born;
        ageDifferences.push(motherAgeAtBirth);
    }
});

let averageAgeDifference = average(ageDifferences);
console.log(averageAgeDifference);

/* Aufgabe: "Lucky" is a ticket with a number in which the sum of the first half of the digits is equal 
to the sum of the second half of the digits. The numbers can be of any length, with the only condition 
that the number of digits is always even, for example: 33or 2341and so on.

Ticket number 385916 is lucky because 3 + 8 + 5 === 9 + 1 + 6. Ticket number 231002 is not lucky because 2 + 3 + 1 !== 0 + 0 + 2.

Implement and export by default a function that checks whether the number is lucky (the number is always a string).
 The function should return trueif the ticket is lucky, or falseif not.*/

let someNumber = ((Math.floor(Math.random() * 1000000) + 1).toString());


function isHappyNumber (someNumber) {
  
	if (someNumber.length % 2 === 0) {
  	
    let firstPart = someNumber.slice(0, someNumber.length / 2).split("");
    let secondPart = someNumber.slice (someNumber.length / 2).split("");
    
    let readyFirstPart = firstPart.reduce((total, currentNumber) => total + Number(currentNumber), 0);
    let readySecondPart = secondPart.reduce((total, currentNumber) => total + Number(currentNumber), 0);
    
    if (readyFirstPart == readySecondPart) {
    	return "Your Number is Happy Number"
    } else return "Sorry, but u lost" 
    
  } else return "Try again!"
}

console.log(isHappyNumber(someNumber));


/*Aufgabe: Implement and export by default a function that reverses the case of each letter in a string.
 The function should return the result it received.

Examples:

invertCase('Hello, World!'); // hELLO, wORLD!
invertCase('I loVe JS');     // i LOvE js*/

function changePosition (text) {

  let newText = [];
    
    for (let i = 0; i < text.length; i++) {
    
      if (text[i] === text[i].toUpperCase()) {
        newText.push(text[i].toLowerCase());
        
      } else newText.push(text[i].toUpperCase());
    }
    return newText.reduce((total, currentLetter) => total + currentLetter, "")
  }
  
  console.log(changePosition("hElLo"));

/*Aufgabe: Lucky numbers
Let's call lucky numbers those that, as a result of a series of transformations of the type "sum of squares of digits",
 turn into one. For example, for the number 7, the chain of transformations will look like this:

7   => 7^2 = 49,
49  => 4^2 + 9^2 = 16 + 81 = 97,
97  => 9^2 + 7^2 = 81 + 49 = 130,
130 => 1^2 + 3^2 + 0^2 = 10,
10  => 1^2 + 0^2 = 1.

Conclusion: the original number 7 is lucky.*/ 

const someNumber = Math.floor(Math.random() * 100)

function isHappyNumber (someNumber, count = 1) {
	const someNumberArray = [];
	const someNumberString = someNumber.toString();
  
  for (let i = 0; i < someNumberString.length; i++) {
  	someNumberArray.push(someNumberString[i]);
  }
  
  
  const newNumber = someNumberArray.reduce((accumulator, currentValue) => accumulator + (currentValue ** 2), 0);
  
  console.log(someNumberArray, someNumberString, newNumber);
  
  if (newNumber === 1) {
  	return true;
  } else if (count === 10) {
  	return false
  }
  return isHappyNumber(newNumber, count + 1);
}

console.log(isHappyNumber(someNumber));


/*write a function that sorts an array of strings based on the number of vowels they contain */

function sortByVowel(list) {
  var sorted = [];

  list.forEach(str => {
    sorted.push({ word: str, count: countVowels(str) });
  });

  sorted.sort((a, b) => a.count - b.count);

  sorted = sorted.map(item => item.word);

  return sorted;

  function countVowels(str) {
    let vowels = "aeiouyAEIOUY";
    let count = 0;
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
}

console.log(sortByVowel(['Alice', 'Bob', 'Mallory']));


/* Create a zoo management system using classes and inheritance in JavaScript.

Animal class: - 

Has the properties name and species.
Has the speak() method, which prints a message about the animal.

Zoo class: - 

Has a static property animals (an array of all animals in the zoo).
Has a static method addAnimal(animal), which adds an animal to the zoo.
Has a static method listAnimals(), which prints a list of all animals.

Subclasses Lion, Elephant, Monkey: - 

Inherit from Animal.
Override the speak() method to print a unique sound for each species.
Task:
Create multiple animal instances.
Add them to the zoo using the addAnimal method.
Print a list of all animals in the zoo.
Call the speak method for each animal.

Expected output:
The classes and methods you create should allow you to add and manage animals to the zoo using object-oriented principles. */

class Animal {
	constructor(name, species) {
  	this.name = name;
    this.species = species;
  }
  
  speak() {
  	console.log(`${this.name} makes a sound.`);
  }
}

class Zoo {

	static animals = [];
  
  static addAnimal(animal) {
  	Zoo.animals.push(animal);
  }
  
  static listAnimals() {
  	Zoo.animals.forEach(animal => console.log(`${animal.name} (${animal.species})`));
  }
}

class Lion extends Animal {
	speak() {
  	console.log(`${this.name} makes a sound: Rrrrr..`)
  }
}

class Elephant extends Animal {
	speak() {
  	console.log(`${this.name} makes a sound: Uuuuuu..`)
  }
}

class Monkey extends Animal {
	speak() {
  	console.log(`${this.name} makes a sound: UaUaUaUa..`)
  }
}

const simba = new Lion("Simba", "Lion");
const donk = new Elephant("Donk", "Elephant");
const chezahr = new Monkey("Chezahr", "Monkey");

Zoo.addAnimal(simba);
Zoo.addAnimal(donk);
Zoo.addAnimal(chezahr);

Zoo.listAnimals();

Zoo.animals.forEach(animal => animal.speak());

/* Create a school management system using classes and inheritance.

Person class: - 

Properties: name, age.
Introduce() method that outputs: "Hello, my name is [name], I'm [age] years old."

Student class (inherits from Person): - 

Additional properties: grade (the class the student is in).
Override introduce() method to output: "Hello, my name is [name], I'm [age] years old, and I'm in class [grade]."

Teacher class (inherits from Person): - 

Additional properties: subject (the subject the teacher teaches).
Override introduce() method to output: "Hello, my name is [name], I teach [subject]."

School class: - 

Static property people (an array of all the people in the school: students and teachers).
Static method addPerson(person), which adds a person to the school.
A static method listPeople() that lists all the people in the school with their intro.

Tasks: - 

Create some students and teachers.
Add them to the school.
List all the people in the school using the listPeople() method.

Expected results:
Classes should allow you to manage the school by adding and displaying information about students and teachers. */

class Person {
	constructor(name, age) {
  	this.name = name;
    this.age = age;
  }
  
  introduce() {
  	console.log(`Hello, my name is ${this.name} and i'm ${this.age} `);
  }
}

class Student extends Person {
	constructor (name, age, grade) {
  	super(name, age);
  	this.grade = grade;
  }
  
  introduce() {
  	console.log(`Hello, my name is ${this.name} and i'm ${this.age} and i'm in the ${this.grade}th grade.`);
  }
}

class Teacher extends Person {
	constructor(name, age, subject) {
  	super(name, age);
  	this.subject = subject;
  }
  
  introduce() {
  	console.log(`Hello, my name is ${this.name} and i study ${this.subject} `);
  }
}

class School {
	static people = [];
  
  static addPerson(person) {
  School.people.push(person);
  }
  
  static listPeople() {
  	School.people.forEach(person => person.introduce());
  }
}

const artem = new Student("Artem", "19", "12");
const marta = new Student("Marta", "20", "13");
const justin = new Student("Justin", "20", "13");
const diana = new Student("Diana", "19", "12");

const alex = new Teacher("Alex", "35", "Informatik");

School.addPerson(artem);
School.addPerson(marta);
School.addPerson(justin);
School.addPerson(diana);
School.addPerson(alex);

School.listPeople(person => person.introduce());


// Aufgabe Vector type

function Vector (x, y) {
	this.x = x;
  this.y = y;
}

Vector.prototype.plus = function (otherVector) {
  	return new Vector(this.x + otherVector.x, this.y + otherVector.y);    
  }
  
  Vector.prototype.minus = function (otherVector) {
  	return new Vector(this.x - otherVector.x, this.y - otherVector.y);
  }
  
  Object.defineProperty(Vector.prototype, "length", {
  	get: function() {
    	return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
  })

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);

// Aufgabe Another cell

// Aufgabe Interface to sequences




let Car = {
  color: "red",
  speed: 300

  get getter() {
    // getter, the code executed when reading obj.prop
    return color;
  },

  set setter(newColor){
    this.color = newColor
    this.speed *= 2;
  }
}

Car.color = "green"

Car.setter("green")


// Aufgabe Artificial idiot

PlantEater.prototype.act = function(context) {
  var plantDirections = context.findAll("*");

  if (plantDirections.length > 0 && this.energy < 60) {
      var direction = plantDirections[0];
      return { type: "eat", direction: direction };
  }

  var space = context.find(" ");
  if (this.energy > 60 && this.energy < 80 && space) {
      return { type: "move", direction: space };
  } 

  if (this.energy > 80) {
      return { type: "rest" };
  }
  
  if (this.energy > 100) {
    this.energy = this.energy / 2;
    return {type: "reproduce", direction: space};
  }

  if (space) {
      return { type: "move", direction: space };
  }
};

// Aufgabe Predators

function Tiger(energy) {
  PlantEater.call(this, energy);
}

Tiger.prototype = Object.create(PlantEater.prototype);
Tiger.prototype.constructor = Tiger;

Tiger.prototype.act = function(context) {
  var tigerDirections = context.findAll("O");

  if (tigerDirections.length > 0) {
      var direction = tigerDirections[0];
      this.energy += 30;
      return { type: "eat", direction: direction };
  }
  
  var space = context.find(" ");
  if (space) {
      return { type: "move", direction: space };
  } 
  
  if (this.energy > 150) {
      this.energy = this.energy / 2;
      return { type: "reproduce", direction: space };
  } 
};

// Aufgabe Repeat

function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b)
      } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure)) {
      throw e}
    }
  }
}

console.log(reliableMultiply(8, 8));

// Aufgabe Locked box

var box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
  const initiallyLocked = box.locked;
  try {
    if (initiallyLocked) {
      box.unlock();
    }
    body();
  } finally {
    if (initiallyLocked) {
      box.lock();
    }
  }
}


withBoxUnlocked(function() {
  box.content.push("Gold");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Cancel !");
  });
} catch (e) {
  console.log("Error:", e.message);
}
console.log(box.locked);




  


























