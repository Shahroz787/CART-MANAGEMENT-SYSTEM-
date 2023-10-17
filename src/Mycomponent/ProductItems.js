import React from "react";

function ProductItems(props) {
    const { Product, index, incrementquantity, decrementquantity, remove } = props;

    
    const price = parseFloat(Product.Price.replace(/,/g, ''));

    const totalPrice = price * Product.quantity;

    return (
        <div className="row mt-4">
            <div className="col-1">
                <b>{index + 1}</b>
            </div>
            <div className="col-6">
                <h2>
                    {Product.Name} <span className="badge bg-secondary">PKR: {Product.Price}</span>
                </h2>
            </div>
            <div className="col-2">
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" className="btn btn-danger" onClick={() => decrementquantity(index)}>
                        -
                    </button>
                    <button type="button" className="btn btn-warning">{Product.quantity}</button>
                    <button type="button" className="btn btn-success" onClick={() => incrementquantity(index)}>
                        +
                    </button>
                </div>
            </div>
            <div className="col-1">{totalPrice}</div>
            <div className="col-2">
                <button className="btn btn-danger" onClick={() => remove(index)}>Remove</button>
            </div>
        </div>
    );
}

export default ProductItems;
