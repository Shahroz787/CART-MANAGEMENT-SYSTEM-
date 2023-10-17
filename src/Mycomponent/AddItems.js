import React, { useState } from "react";

function AddItems(props) {
    const [Name, setName] = useState('');
    const [Price, setPrice] = useState('');
    const [Quantity, setQuantity] = useState('');

    const submit = (e) => {
        e.preventDefault();
        if (!Name || !Price || !Quantity) {
            alert('Please enter all the values');
        } else {
            props.addItems(Name, Price, Quantity);
            setName('');
            setPrice('');
            setQuantity('');
        }
    };

    return (
        <form onSubmit={submit} className="row">
            <div className="col-3 d-flex align-items-center">
                <label htmlFor="exampleInputEmail1" className="Phone" style={{ marginRight: '10px' }}><b>NAME: </b></label>
                <input type="text" className="form-control" id="exampleInputEmail1" value={Name} onChange={(e) => { setName(e.target.value) }} aria-describedby="emailHelp" />
            </div>
            <div className="col-3 d-flex align-items-center">
                <label htmlFor="exampleInputPassword1" className="price" style={{ marginRight: '10px' }}><b>PRICE: </b></label>
                <input type="text" className="form-control" id="exampleInputPassword1" value={Price} onChange={(e) => { setPrice(e.target.value) }} />
            </div>
            <div className="col-3 d-flex align-items-center">
                <label htmlFor="exampleInputPassword1" className="quantsity" style={{ marginRight: '10px' }}><b> QUANTITY: </b></label>
                <input type="text" className="form-control" id="exampleInputPassword1" value={Quantity} onChange={(e) => { setQuantity(e.target.value) }} />
            </div>
            <div className="col-3 d-flex align-items-center">
                <button type="submit" className="btn btn-primary">ADD</button>
            </div>
        </form>
    );
}

export default AddItems;
