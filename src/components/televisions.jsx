import React from "react";
import {inventory} from "../inventory/inventory.js";
import sizesInCentimetersAllTvs from "../helpers/helper_bestselling_tv_sizes.js";
import resultOptions from "../helpers/helper_options_tv.js";


const televisions= () => {
    return (
        <>
        <section className="boxBestSelling">
            {inventory.map((tv) => {
                return <article className="productArticle" key={tv}>
                    <div className="productTvImage"><img className="productImage" src={tv.sourceImg} alt={tv.name}/>
                    </div>
                    <div className="productContent">
                        <h1>{tv.brand} - {tv.name}</h1>
                        <h2>€ {tv.price},-</h2>
                        <div>{sizesInCentimetersAllTvs}</div>
                        <div className="results">{resultOptions}</div>
                    </div>
                </article>
                })}
        </section>
        </>
    );
}
export default televisions


