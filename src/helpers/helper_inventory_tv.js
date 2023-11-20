import {inventory} from "../inventory/inventory.js";

function calculateTotalInventory(inventory) {
    return inventory.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.originalStock;
    }, 0);
}

const totalInventory = calculateTotalInventory(inventory);

export default totalInventory