import { getOrders } from "./database.js"
import { getMetals } from "./database.js"
import { getStyles } from "./database.js"
import { getSizes } from "./database.js"
import { getPieces } from "./database.js"

const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()
const pieces = getPieces()

const buildOrderListItem = (order) => {
// Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId})
    let totalCost = foundMetal.price

    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId})
            totalCost += foundSize.price
    
    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId})
            totalCost += foundStyle.price

    const foundPiece = pieces.find(
        (piece) => {
            return piece.id === order.pieceId})
        
    const PiecePrice = (fp) => {
        if (fp.id === 1){
            totalCost += 0
            }
        else if (fp.id === 2){
            totalCost *= 2
            }
        else {
        totalCost *= 4
        }

        return totalCost
    }

    const finalCost = PiecePrice(foundPiece)

    const costString = finalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

