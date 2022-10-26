import { getPieces, setPiece } from "./database.js"

const pieces = getPieces()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "piece") {
            setPiece(parseInt(event.target.value))
        }
    }
)

export const Pieces = () => {
    let html = "<p>"

    // This is how you have been converting objects to <li> elements
    for (const piece of pieces) {
        html += `
            <input type="radio" name="piece" value="${piece.id}" /> ${piece.type}
        `
    }

    html += "</p>"
    return html
}
