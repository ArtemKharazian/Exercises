
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
    else if (numbCount % 5 == 0 % numbCount % 3 == 0) {
        console.log("FizzBuzz");
        continue
    }
    console.log(numbCount)
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



