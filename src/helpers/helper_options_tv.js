import {inventory} from "../inventory/inventory.js";
import check from "../assets/check.png"
import minus from "../assets/minus.png"

const optionsTV = inventory.map((tv) => {
    const options = tv.options.map(option => `${option.name}: ${option.applicable}`);
    return {
        name: tv.name,
        ApplicableOptions: options.some(option => option.includes('true')),
    };
});

const resultOptions = optionsTV.map((tv) => {
    if (tv.ApplicableOptions) {
        return `${tv.name} - ${check}`;
    } else {
        return `${tv.name} - ${minus}`;
    }
});

export default resultOptions;