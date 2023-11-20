import React from "react";
import {bestSellingTv} from "../inventory/inventory.js";
import check from "../assets/check.png"
import minus from "../assets/minus.png"
import sizesInCentimeters from "../helpers/helper_availablesizes_tv.js";


const bestsellingproduct = () => {
    return (
        <section className="boxAllTvs ">
            <div className="boxImage">
                <img src={bestSellingTv.sourceImg} alt={bestSellingTv.name} />
            </div>
            <div className="boxContent">
                <div><h1>{bestSellingTv.brand} {bestSellingTv.type} - {bestSellingTv.name}</h1></div>
                <div className="boxPrice"><h2>Price: € {bestSellingTv.price},-</h2></div>
                <div>Verkrijgbare maten: {sizesInCentimeters}</div>
                <div className="showProductsList">
                    <img className="imageShowProductList" src={check} alt="check"/>
                    <div>Name: {bestSellingTv.brand}</div>
                    <img className="imageShowProductList" src={minus} alt="check"/>
                    <div>Type: {bestSellingTv.type}</div>
                    <div>Type: {bestSellingTv.screenType}</div>



                </div>
                
            </div>
        </section>
    );
}
export default bestsellingproduct
