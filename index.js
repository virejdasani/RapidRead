// TODO - filterText(), add bootstrap input field (longer)

let startButton = document.getElementById("startButton")
let textInput = document.getElementById("textInput")
var textIndex

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

    console.log('Doing')
    for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
            console.log("SPACE")
            textIndex = i
            console.log(textIndex)
            console.log(text[i])
            break
        } else {
            console.log(text[i])
        }
    }
}