//Aufgabe 1 ---------------------------------------------------------------------------------------------------------------------------------------


const replaceCharacterAt = (word, replacement, position) => {
	if (position >= word.length) {
  	return word;
  }
  
	return word.substring(0, position) + replacement + word.substring(position+1);
}

const playerOne = (word) => {
	return new Promise((resolve) => {
    setTimeout(() => {
	    resolve(replaceCharacterAt(word, 'b', 0));
    }, 1000);
  });
}

const playerTwo = (word) => {
	return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() <= 0.8) {
				resolve(replaceCharacterAt(word, 'b', 1));
      } else {
        reject();
      }
    }, 1000);
  });
}

const playerThree = (word) => {
	return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() <= 0.5) {
				resolve(replaceCharacterAt(word, 'b', 2));
      } else {
        reject();
      }
    }, 1000);
  });
}

const stillePost = async (word) => {
		let currentWord = word;
    let forgottenPlayers = [];

    try {
        currentWord = await playerOne(currentWord);
        console.log(`PlayerOne passed: ${currentWord}`);
    } catch (error) {
        forgottenPlayers.push("PlayerOne");
        console.log(error);
    }

    try {
        currentWord = await playerTwo(currentWord);
        console.log(`PlayerTwo passed: ${currentWord}`);
    } catch (error) {
        forgottenPlayers.push("PlayerTwo");
        console.log(error);
    }

    try {
        currentWord = await playerThree(currentWord);
        console.log(`PlayerThree passed: ${currentWord}`);
    } catch (error) {
        forgottenPlayers.push("PlayerThree");
        console.log(error);
    }

    console.log(`Forgotten Players: ${forgottenPlayers.length > 0 ? forgottenPlayers.join(", ") : "nobody"}`);
    console.log(`The game is over. Final word: ${currentWord}`);

}

stillePost('aaa');


//Aufgabe 2 ---------------------------------------------------------------------------------------------------------------------------------------

const replaceCharachterAt2 = (word, replacement, position) => {
	if (position >= word.length) {
  	return word;
  }
  
	return word.substring(0, position) + replacement + word.substring(position+1);
}

const createPlayer = (position, forgetfulness) => {
	return (word) => {
  	return new Promise((resolve, reject) => {
    	setTimeout(() => {
      	if (Math.random() <= forgetfulness) {
        	reject(`Player at position ${position + 1} forgot the word. `);
        } else {
        	const newWord = replaceCharachterAt2(word, "b", position);
          resolve(newWord);
        }
      }, 1000)
    })
  }
}

const createPlayers = (word) => {
	const players = [];
  for (let i = 0; i < word.length; i++) {
  	const forgetfulness = Math.random() * 0.8 + 0.1;
    players.push(createPlayer(i, forgetfulness));
  }
  return players;
}

const stillePost2 = async (word) => {
		let currentWord = word;
    let forgottenPlayers = [];
    const players = createPlayers(word);
    
    for (let i = 0; i < players.length; i++) {
    	try	{
      	currentWord = await players[i](currentWord);
        console.log(`Player at position ${i + 1} passed: ${currentWord}`);
      } catch (error) {
      		forgottenPlayers.push(`Player ${i + 1}`);
        	console.log(error);
      }
    }

    console.log(`Players eho forgot: ${forgottenPlayers.length > 0 ? forgottenPlayers.join(", ") : "nobody"}`);
    console.log(`The game is over. Final word: ${currentWord}`);

}

stillePost2('aaaaa');