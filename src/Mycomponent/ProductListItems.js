import ProductItems from "./ProductItems";

import React from "react";

function ProductListItems(props) {
    return (
        <>
            {props.ProductList.map((Product, i) => (
                <div className="product-list-item" key={i}>
                    <ProductItems Product={Product} index={i} incrementquantity={props.incrementquantity} decrementquantity={props.decrementquantity} remove={props.remove}/>
                </div >
            ))
            }

        </>
    )
}

export default ProductListItems;
