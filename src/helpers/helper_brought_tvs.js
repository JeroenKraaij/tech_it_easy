import {inventory} from "../inventory/inventory.js";
function calculateTotalSold(inventory) {
    const totalSold = inventory.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.sold;
    }, 0);

    return totalSold;
}

const totalSold = calculateTotalSold(inventory);

export default totalSold
