const MORSE_TABLE = {
	".-": "a",
	"-...": "b",
	"-.-.": "c",
	"-..": "d",
	".": "e",
	"..-.": "f",
	"--.": "g",
	"....": "h",
	"..": "i",
	".---": "j",
	"-.-": "k",
	".-..": "l",
	"--": "m",
	"-.": "n",
	"---": "o",
	".--.": "p",
	"--.-": "q",
	".-.": "r",
	"...": "s",
	"-": "t",
	"..-": "u",
	"...-": "v",
	".--": "w",
	"-..-": "x",
	"-.--": "y",
	"--..": "z",
	".----": "1",
	"..---": "2",
	"...--": "3",
	"....-": "4",
	".....": "5",
	"-....": "6",
	"--...": "7",
	"---..": "8",
	"----.": "9",
	"-----": "0",
};

function decode(expr) {
	let morse = toMorse(expr);
	return morse
		.map((word) => {
			return word
				.map((letter) => MORSE_TABLE[letter])
				.filter((letter) => letter !== undefined)
				.join("");
		})
		.join(" ");
}

function toMorse(expr) {
	let words = [];
	let word = [];
	for (let i = 0; i < expr.length / 10; i++) {
		if (expr[i * 10] === "*") {
			words.push(word);
			word = [];
		} else {
			word.push(toLetter(expr.slice(i * 10, (i + 1) * 10)));
		}
	}
	if (word.length > 0) {
		words.push(word);
	}

	return words;
}

function toLetter(expr) {
	let morse = [];
	for (let i = 0; i < expr.length / 2; i++) {
		if (expr.slice(i * 2, (i + 1) * 2) === "10") {
			morse.push(".");
		}
		if (expr.slice(i * 2, (i + 1) * 2) === "11") {
			morse.push("-");
		}
	}

	return morse.join("");
}

module.exports = {
	decode,
};
