const wordList = ["soldier", "trip", "tap", "pole", "spike", "conductor", "penguin", "washington", "bed", "crown", "hole", "ketchup", "grass", "buck", "himalayas", "hotel", "boom", "robot", "apple", "cricket", "water", "well", "olive", "fly", "cycle"]

const cellElements = document.querySelectorAll('[data-cell]')
const winningMessageElement = document.getElementById('winningMessage')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
const newGameButton = document.getElementById('newGameButton')
let circleTurn

cellElements.forEach(cell => {
	cell.addEventListener('click', handleClick, {once:true})
})

newGameButton.addEventListener('click', startGame)

function startGame() {
	circleTurn = false
	// populate cells with words
	fillCells()
	cellElements.forEach(cell => {
		cell.classList.remove('clicked')
		cell.addEventListener('click', handleClick, {once:true})
	})
	winningMessageElement.classList.remove('show')
}

function handleClick(e) {
	const cell = e.target
	cell.classList.add('clicked')
}

function addWord(cell, word) {
	cell.innerHTML = word
}

function fillCells() {
	// Generate the sequence of words from the wordlist being used
	words = []
	while (words.length < wordList.length) {
		newWord = Math.floor(Math.random() * wordList.length)
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