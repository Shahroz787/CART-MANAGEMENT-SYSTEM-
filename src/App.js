import ProductListItems from "./Mycomponent/ProductListItems";
import AddItems from "./Mycomponent/AddItems";
import Footer from "./Mycomponent/Footer";
import React, { useState, useEffect } from 'react'

import './App.css';

function App() {

  let initialTodos;
  if (localStorage.getItem("ProductList") === null) {
    initialTodos = [];
  } else {
    initialTodos = JSON.parse(localStorage.getItem("ProductList"));
  }
  // =JSON.parse(localStorage.getItem("totalAmount"));

  // const MainProductList = [
  //   {
  //     Name: "Realme6",
  //     Price: "40k",
  //     quantity: 0
  //   },
  //   {
  //     Name: "Samsung",
  //     Price: "31k",
  //     quantity: 0
  //   },
  //   {
  //     Name: "Oppo",
  //     Price: "18k",
  //     quantity: 0
  //   },
  // ];
  const [ProductList, setProductList] = useState(initialTodos);
  const [totalAmount, setTotalAmount] = useState(0);  // Ensure initial value is 0

  const addItems = (Name, Price, Quantity) => {
    const newItem = {
      Name: Name,
      Price: Price,
      quantity: parseInt(Quantity)  // Convert Quantity to an integer
    };

    
    const newTotalAmount = totalAmount + parseFloat(Price.replace(/,/g, '')) * parseInt(Quantity);
    setTotalAmount(newTotalAmount);
    setProductList([...ProductList, newItem]);
  }


  const incrementQuantity = (index) => {
    let newProductList = [...ProductList];
    if (!isNaN(newProductList[index].quantity)) {
      newProductList[index].quantity++;
      let newTotalAmount = totalAmount + parseFloat(newProductList[index].Price);
      setTotalAmount(newTotalAmount);
      setProductList(newProductList);
    }
  }

  const decrementQuantity = (index) => {
    let newProductList = [...ProductList];
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      let newTotalAmount = totalAmount - parseFloat(newProductList[index].Price);
      setTotalAmount(newTotalAmount);
      setProductList(newProductList);
    }
  };

  const remove = (index) => {
    console.log("Removing item at index:", index);
    const newProductList = ProductList.filter((product, i) => i !== index);
    setProductList(newProductList);
    localStorage.setItem("ProductList", JSON.stringify(newProductList));
  }


  const reset = () => {
    setProductList([])
  }

  useEffect(() => {
    localStorage.setItem("ProductList", JSON.stringify(ProductList));
    localStorage.setItem("totalAmount", JSON.stringify(totalAmount)); // Save totalAmount to local storage
  }, [ProductList, totalAmount]);  // Include totalAmount in the dependency array


  return (
    <>
      <div className="main">
        <div className="header"><u>Cart List</u></div>
        <div className="form-container ml-4">
          <div className="container">
            <AddItems addItems={addItems} />
          </div>
        </div>
        <main className="container mt-5">
          <ProductListItems ProductList={ProductList} incrementquantity={incrementQuantity} decrementquantity={decrementQuantity} remove={remove} />
        </main>
        <Footer totalAmount={totalAmount} reset={reset} />
      </div>
    </>
  )
}

export default App;
