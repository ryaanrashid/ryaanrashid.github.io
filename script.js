const wordList = ["soldier", "trip", "tap", "pole", "spike", "conductor", "penguin", "washington", "bed", "crown", "hole", "ketchup", "grass", "buck", "himalayas", "hotel", "boom", "robot", "apple", "cricket", "water", "well", "olive", "fly", "cycle"]

const cellElements = document.querySelectorAll('[data-cell]')
const winningMessageElement = document.getElementById('winningMessage')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
const newGameButton = document.getElementById('newGameButton')
const gameCodeButton = document.getElementById('gameCodeButton')

cellElements.forEach(cell => {
	cell.addEventListener('click', handleClick, {once:true})
})

newGameButton.addEventListener('click', startGame)

gameCodeButton.addEventListener('click', gameCodeEntered)

function startGame(code = "ss") {
	// populate cells with words
	fillCells(code)

	// unclick all words
	cellElements.forEach(cell => {
		cell.classList.remove('clicked')
		cell.addEventListener('click', handleClick, {once:true})
	})
}

function gameCodeEntered() {
	code = document.getElementById("gameCode").value

	// will start new game with game code
	startGame(code)
}

function handleClick(e) {
	const cell = e.target
	cell.classList.add('clicked')
}

function addWord(cell, word) {
	cell.innerHTML = word
}

function fillCells(userSeed) {
	// Use a seed
	var myrng = new Math.seedrandom(userSeed);

	// Generate the sequence of words from the wordlist being used
	words = []
	while (words.length < wordList.length) {
		newWord = Math.floor(myrng() * wordList.length)
		if(words.includes(newWord)){
		} else {
			words.push(newWord)
		}
	}

	// Use the above sequence to fill cells with their word
	i = 0
	cellElements.forEach(cell => {
		cell.innerHTML = wordList[words[i]]
		i += 1
	})

}