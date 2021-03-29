/////////////////////

///////////////////// task 4

function isSorted(array) {
	let newArray = {}
	newArray = array

	function foo(newArray) {
		newArray.sort(function (a, b) {
			return a - b
		})
		return newArray.join('')
	}

	if (newArray.join('') == foo(newArray)) {
		return true
	}
	else {
		return false
	}
}

console.log('solution of task 4: ' + isSorted([-Infinity, -5, 0, 3, 9]))

/////////////////////

///////////////////// task 5

function reverseString(str) {
	return str.split('').reverse().join('');
}

let a = reverseString('abcdef')
console.log('solution of task 5: ' + a)

/////////////////////

///////////////////// taks 6

function indexOfArray(arrayIndex) {
	let array = [1, 2, 3]
	return array.indexOf(arrayIndex)
	
}

console.log('solution of task 6: ' + indexOfArray(4)) 

/////////////////////

///////////////////// task 7

function isPalidrom(str) {
	let word
	let newWord
	let palidrom

	word = str.toLowerCase()
	newWord = word.replace(/\s/g, '')
	palidrom = word.split('').reverse().join('').replace(/\s/g, '')


	if (newWord == palidrom) {
		return true
	}

	else {
		return false
	}

}

console.log('solution of task 7: ' + isPalidrom('A man a plan a canal Panama'))

