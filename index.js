// TODO - filterText(), add bootstrap input field (longer)

let startButton = document.getElementById("startButton")
let textInput = document.getElementById("textInput")

var textIndex
var wordsArray

startButton.addEventListener("click", function (event) {
    // To stop page refresh
    event.preventDefault()

    console.log("startButton clicked")

    // Get the value from textInput and save it in text
    let text = textInput.value
    console.log(text)

    // Filter the text
    filterText(text)
})

function filterText(text) {
    // TODO
    // Separate all words (try CSV for spaces)
    // Add a timer to display the words
    // Research how many words per second to display for 200WPM, 400WPM reading speed etc.

    // Here, separate each word into an array called wordsArray
    wordsArray = text.split(" ")
    console.log(wordsArray)

    // Iterating over all words in the wordsArray array
    for (let i = 0; i < wordsArray.length; i++) {
        console.log(wordsArray[i])
    }


    // for (let i = 0; i < text.length; i++) {
    //     if (text[i] === " ") {
    //         console.log("SPACE")
    //         console.log(text[i])
    //         wordsArray = text
    //     } else {
    //         console.log(text[i])
    //     }
    // }
}

function displayWords(wordsArray) {

}