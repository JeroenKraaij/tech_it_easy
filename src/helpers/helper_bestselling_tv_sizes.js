
import {inventory} from "../inventory/inventory.js";

const sizes = (tv) => {
    const inchesToCentimeters = 2.54;
    const sizesInInches = tv.availableSizes || [];

    const sizesInCentimeters = sizesInInches.map(size => Math.round(size * inchesToCentimeters));

    return sizesInCentimeters.map(size => `${size} cm`);
};

const sizesInCentimetersAllTvs = sizes(inventory);


export default sizesInCentimetersAllTvs