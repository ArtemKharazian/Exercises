// 1. Using setTimeout - Write a function that displays a message 2 seconds after it is called.

function delayedMessage() {
  setTimeout(() => {
  	console.log("Hello World after 2 sec!")
  }, 2000)
}

delayedMessage(); 

/* 2. Asynchronous functions using callbacks - Write a function that receives two numbers, 
adds them after 1 second, and prints the result using a callback function.*/

function addAsync(a, b, callback) {
  setTimeout(() => {
  	let result = a + b;
    callback(result)
  }, 1000)
}

addAsync(5, 3, (result) => {
  console.log(result);
});

// 3. Working with promises - Create a function that returns a promise that resolves after 3 seconds with the text "Promise completed."

function waitThreeSeconds() {
  return new Promise(function (resolve) {
  	setTimeout (() => {
    	let sms = "Promise is ready";
      resolve(sms);
    }, 3000)
    })
}

waitThreeSeconds().then((message) => {
  console.log(message);
});

/* 4. Create a promise with a timer (similar to the third task) - Write a function that returns a promise,
that resolves after 2 seconds with the text "2 seconds have passed." Use this promise to print a message to the console.*/

function waitTwoSeconds() {
	return new Promise ((resolve) => {
  	setTimeout(() => {
    	let sms = " 2 sec";
      resolve(sms);
    }, 2000)
  })
}

waitTwoSeconds().then((message) => {
	console.log(message);
});

/* 5. Write two functions:
firstAction - returns a promise that resolves after 1 second with the text "The first operation has completed."
secondAction - returns a promise that resolves after 2 seconds with the text "The second operation has completed."
After that, create a .then() chain that will first execute firstAction and then secondAction.*/

function firstAction () {
	return new Promise ((resolve) => {
  	setTimeout(() => {
    	let sms = "First operation"
      resolve(sms)
    }, 1000)
  })
}

function secondAction () {
	return new Promise ((resolve) => {
  	setTimeout(() => {
    	let sms = "Second operation"
      resolve(sms)
    }, 2000)
  })
}

firstAction()
	.then(message => {
  	console.log(message);
    return secondAction();
  })
  .then(message => {
  	console.log(message);
  })

  /* 6. Write a function fetchData that simulates loading data with a delay of 3 seconds. The function returns a promise that:
There is a 50% chance of successful resolution with the message "Data loaded successfully."
There is a 50% chance of being rejected with the error message "Error loading data".
Use .then() and .catch() to handle both success and error. */

function fetchData () {
  let chance = Math.floor(Math.random() * 10);
  
  return new Promise ((resolve, reject) => {
  	setTimeout (() => {
    	if (chance < 5) {
      	let sms = "Данные успешно загружены";
        resolve(sms);
      } else {
      	let sms = "Ошибка при загрузке данных";
        reject(sms)
      }
    }, 3000)
  })
}

fetchData()
.then((message) => {
	console.log(message);
})
.catch((error) => {
	console.log(error);
})

/* 7. Create three functions: firstTask, secondTask and thirdTask, each of which returns a promise.
firstTask resolves after 1 second with the text "First task completed".
secondTask resolves after 2 seconds with the text "Second task completed".
thirdTask resolves after 3 seconds with the text "Third task completed."
Create a chain of promises so that they are executed sequentially: first the first task, then the second and third. */

function firstTask() {
	return new Promise ((resolve) => {
  	setTimeout(() => {
    	let sms = "First Task is done";
      resolve(sms);
    }, 1000)
  })
}

function secondTask() {
	return new Promise ((resolve) => {
  	setTimeout(() => {
    	let sms = "Second Task is done";
      resolve(sms);
    }, 2000)
  })
}

function thirdTask() {
	return new Promise ((resolve) => {
  	setTimeout(() => {
    	let sms = "Third Task is done";
      resolve(sms);
    }, 3000)
  })
}

firstTask()
.then((message) => {
	console.log(message);
  return secondTask();
})
.then((message) => {
	console.log(message);
  return thirdTask();
})
.then((message) => {
	console.log(message)
})

/* Write a function fetchUserData(id) that takes a user ID and returns a promise with that user's data (simulate a request). Create code that:
Makes requests for three users with IDs 1, 2, and 3.
Processes all three users' data in parallel using Promise.all().
Prints the result for all users after all requests are complete. */

function fetchUserData(id) {
	return new Promise (resolve => {
  	setTimeout (() => {
    	const userData = {
      	1: {name: "Victor", age: 25},
        2: {name: "Alice", age: 21},
        3: {name: "Linux", age: 37},
      }
      resolve(`User: ${userData[id].name}, age ${userData[id].age}`)
    }, 1000 * id)
  })
}

Promise.all([
	fetchUserData(1),
  fetchUserData(2),
  fetchUserData(3),
])
.then(results => {
	console.log(results)
})
.catch(error => {
	console.log("Error: " + error)
})

/*You need to create three async functions: taskOne, taskTwo, and taskThree. Here's what they should do:

taskOne: returns a promise that resolves after 1 second with the message "Task 1 completed".
taskTwo: returns a promise that resolves after 2 seconds with the message "Task 2 completed",
but there is a 50% chance that the promise will reject with the message "Error executing task 2".
taskThree: returns a promise that resolves after 3 seconds with the message "Task 3 completed".*/

function taskOne () {
	return new Promise ((resolve) => {
  	setTimeout (() => {
    let sms = "Task One is done";
    resolve(sms)
    }, 1000)
  })
}

function taskTwo() {
  return new Promise((resolve, reject) => {
    let chance = Math.floor(Math.random() * 10);

    setTimeout(() => {
      if (chance < 5) {
        let sms = "Task Two is done";
        resolve(sms);
      } else {
        reject("Error, try again.");
      }
    }, 2000);
  });
}

function taskThree () {
	return new Promise ((resolve, reject) => {
  	setTimeout (() => {
    let sms = "Task Three is done";
    resolve(sms);
    }, 3000)
  });
}

taskOne()
.then((message) => {
	console.log(message);
  return taskTwo();
})
.then((message) =>{
	console.log(message);
  return taskThree();
})
.then((message) =>{
	console.log(message);
})
.catch((error) => {
	console.log(error);
})

/* xs */


/*const delay = ms => {
	return new Promise (r => setTimeout(() => r(), ms))
}

const url = "https://jsonplaceholder.typicode.com/todos";

async function fetchAsyncToDos() {
	console.log("ToDos going...")
	await delay(2000)
  const responce = await fetch(url)
  const data = await responce.json()
  console.log("Data:", data)
}

fetchAsyncToDos()*/


