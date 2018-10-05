var hangman = {
    words: ["Fresh Prince", "Living Single", "Martin", "Moesha", "Sister Sister", "Family Matters"],

    guessedLetters: [], //array of letters guessed to eventually be displayed in html
    wordToGuess: null, //word to be guessed that's pulled from the "words" array. this is a string
    lettersInWordToGuess: [], //an array of letters
    letterString: [], //constantly updating this string as letters are correctly guessed
    counter: 0,
    letterGuessed: null,

    setUpGame: function () {
        //generate a word from the array
        //this.wordToGuess = this.words[Math.floor(Math.random() * this.words.length)]; //want to eventually be able to take two words 
        this.wordToGuess = "Moesha";
        console.log(this.wordToGuess);
        //get individual letters of the word to guess
        this.lettersInWordToGuess = this.wordToGuess.split("");
        console.log(this.lettersInWordToGuess);

        //display the word as a series of underscores
        this.visualizeWordToGuess();
        //reset the guesses counter  NOT DONE
        this.counter = this.wordToGuess.length + 3;
        //empty the letters guessed div NOT DONE
        document.getElementById("guessedLetters").innerHTML = ''
    },

    visualizeWordToGuess: function () {
        for (var i = 0; i < this.lettersInWordToGuess.length; i++) {
            this.letterString.push('_');
        }
        document.getElementById("guessThisWord").innerHTML = this.letterString.join(''); //accessible outside the for loop
        console.log("this.letterString is an array", this.letterString);
    },

    checkGuess: function(letter){
        //if the guessedLetters array doesn't already container the pressed letter, add the pressed letter
        if(this.guessedLetters.indexOf(letter) !== -1){ //if guessedLetters array contains the letter you just guessed
            document.getElementById("playerMessage").innerHTML = "you already guessed that letter";  
        }
        else{
            this.guessedLetters.push(letter);
            document.getElementById("playerMessage").innerHTML = "you guessed: " + letter;  
            document.getElementById("guessedLetters").innerHTML = this.guessedLetters.join(" ");
        }    
        console.log(this.guessedLetters);
        //update the guessed letters div
        
        //if the word contains the letter guessed, update letterString 
        if(this.wordToGuess.indexOf(letter) !== -1){
            console.log("the word " + this.wordToGuess + " contains the letter " + letter);
        }
    }
} //end hangman object

//on Saturday 3/31
    //add to "visualizeWordToGuess" function
        //if letter guessed is in the word, replace "_" with the letter guessed
        //else insert "_"
    //have to write checkGuess(letter) function
        //letter = onKeyUp



//FUNCTION checkGuess()
//start with empty array called var guessedLetters
//onKeyUp, if array guessedLetters does not contain guessed letter
//toLowerCase each letter
//push guessed letter into array guessedLetters
//change text of "playerMessage" to "good job, you're almost there"
//else, change text of "playerMessage" div to "you already guessed that letter"
//if guessThisWord contains guessed letter
//replace the element of the guessThisWord div (might have to use +1)
//else, change html of "playerMessage" div to "sorry, that's letter is not in this word"
//let user know how many guesses they have left


//RUN THE CODE!!!
hangman.setUpGame();

document.onkeypress = function(event){
    this.letterGuessed = String.fromCharCode(event.which); //returns the letter that was typed
    console.log(this.letterGuessed); 
    hangman.checkGuess(this.letterGuessed);

}



/////////////////////// GLOBAL VARIABLES ///////////////////////
// var playerMessage = document.getElementById("playerMessage"); //update alerts to player
// var countGuesses = 10; //decrement. game ends when countGuesses == 0


//ULTIMATELY WANT an array of objects
// var words = [
//     {
//         show: "Fresh Prince",
//         characters: ["Carlton", "Will", "Hillary", "Ashley", "Uncle Carl", "Jeffrey", "Aunt Viv"],
//         hint: "Semi-biographical show about a local actor",
//         gif: "gifurl.com",
//         clips: "youtubeurl.com"
//     }, //element 0

//     {
//         show: "Living Single",
//         characters: ["Maxine", "Kim Fields' character", "Sinclair", "guy1", "guy2"],
//         hint: "",
//         gif: "gifurl.com",
//         clip: "youtubeurl.com"
//     }, //element 1
// etc. etc. more word objects







//FUNCTION compareWords()
//onKeyUp, compare guessThisWord array to hiddenWord 
//if guessThisWord === hiddenWord, change html of "playerMessage" to "You guessed it!"
//display an image/gif of the word using giphy code logic (separate FUNCTION getGif())

//FUNCTION winOrLose()
//start with var countGuesses = 0;
//if checkGuess() is false, countGuesses++
//when countGuesses == 10, end the game
//change text of "playerMessage" div to "You lose!"
//else if checkGuess() is true, keep playing

//else countGuesses stays the same
