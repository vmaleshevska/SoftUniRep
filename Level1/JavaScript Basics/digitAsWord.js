/**
 * Problem 11.	Digit as Word
 Write a JavaScript function convertDigitToWord(value) that
 prints the name of an integer number n (0<n<10) in English using switch statement.
 Write JS program digitAsWord.js that prints a few digits on the console.
 Run the program through Node.js.
 */
function convertDigitToWord(value){

    if (value > 0 && value < 10) {
        switch (value.toString()) {
            case "1":
                return "one";
                break;
            case "2":
                return "two";
                break;
            case "3":
                return "three";
                break;
            case "4":
                return "four";
                break;
            case "5":
                return "five";
                break;
            case "6":
                return "six";
                break;
            case "7":
                return "seven";
                break;
            case "8":
                return "eight";
                break;
            case "9":
                return "nine";
                break;
            default:
                break;
        }
    }
    else {
        return "Not a valid number";
    }
}

console.log(convertDigitToWord(8));
console.log(convertDigitToWord(3));
console.log(convertDigitToWord(5));
console.log(convertDigitToWord(7));
console.log(convertDigitToWord(54));