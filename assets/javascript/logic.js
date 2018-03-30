var hangman = {
    words: ["Fresh Prince", "Living Single", "Martin", "Moesha", "Sister Sister", "Family Matters"],

    guessedLetters: [], //array of letters guessed to eventually be displayed in html
    wordToGuess: null, //word to be guessed that's pulled from the "words" array. should it be null, not ""?
    lettersInWordToGuess: [], 
    letterString: [], //constantly updating this string as letters are correctly guessed


    setUpGame: function(){
        //generate a word from the array
        //this.wordToGuess = this.words[Math.floor(Math.random() * this.words.length)];
        this.wordToGuess = "Fresh Prince";
        console.log(this.wordToGuess);
        //get individual letters of the word to guess
        this.lettersInWordToGuess = this.wordToGuess.split(" ");
        console.log(this.lettersInWordToGuess);
        if(this.lettersInWordToGuess.length > 1){

        }
        //display the word as a series of underscores
        this.visualizeWordToGuess();
        //reset the guesses counter  NOT DONE

        //empty the letters guessed div NOT DONE
    },

    visualizeWordToGuess: function(){
        for(var i = 0; i < this.lettersInWordToGuess.length; i++){
            //console.log("visualizeWordToGuess", this.lettersInWordToGuess);
            this.letterString.push('_');
            document.getElementById("guessThisWord").innerHTML = this.letterString.join(''); //accessible outside the for loop
        }
        console.log("letterString", this.letterString.join(''));
    }
} //end hangman object


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

// function checkGuess(){

// }

// //choose a word, gif, clip
// function setUpGame() {
//     restartGame()
//     guessThisWord()

// }






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


// function game() {
//     restartGame();
//     setUpGame();

// }

// game();