let customText = "Hey there!\n \nIm Chris, a passionate cybersecurity student from Haaga-Helia who loves anything related to tech and computers.\n \nI thrive on challenges, whether it’s solving complex problems or creating something new.\n \nWhen I have free time, you’ll probably find me in the gym, painting Warhammer or learning about something interesting in the field of IT.";
let i = 0;
let typedTextElement = document.getElementById("typed-text");
let cursorElement = document.getElementById("cursor");

let currentLine = document.createElement("div"); // Create first line
typedTextElement.appendChild(currentLine);
currentLine.appendChild(cursorElement); // Ensure cursor starts in the first line

function typeText() {
    if (i < customText.length) {
        if (customText[i] === "\n") {
            // Move cursor to the main container before creating a new line
            typedTextElement.appendChild(cursorElement);

            // Create a new line and append cursor there
            currentLine = document.createElement("div");
            typedTextElement.appendChild(currentLine);
        } else {
            let span = document.createElement("span");
            span.textContent = customText[i]; // Append character safely
            currentLine.appendChild(span);
        }
        i++;

        // **Always move cursor inside the current line so it's visible**
        currentLine.appendChild(cursorElement);

        setTimeout(typeText, 50);
    } else {
        cursorElement.style.display = "inline-block"; // Keep cursor visible at the end
    }
}

setTimeout(typeText, 1000);
