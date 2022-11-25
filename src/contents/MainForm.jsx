import React from "react";
import {v4} from 'uuid';
import "../App.css";
import { useContext} from "react";
import UserContext from "./UserContext.jsx";


function MainForm(){

 

  const { inputField,setInputField} = useContext(UserContext);


  const submitButton = (e) => {
    setInputField([
      ...inputField,
      {
        id: v4(),
        product_name: document.getElementById("product_name").value,
        description: document.getElementById("description").value,
        price: document.getElementById("price").value,
      },
    ]);
    e.preventDefault();
  };

  return(
    <form className ='form_one' onSubmit={submitButton}>
    <label>Product Name</label>
    <input
      className="input_name"
      type="text"
      id="product_name"
      placeholder="Product Name"
    ></input>{" "}
    <br />
    <label>Description</label>
    <input
      className = 'input_description'
      type="text"
      id="description"
      placeholder="Description"
    ></input>{" "}
    <br />
    <label>Price</label>{" "}
    <input className = 'input_price' type="text" id="price" placeholder="Price"></input> <br />
    <br />
    <button className="submit_one">Submit</button>
  </form>

  );
 

}

export default MainForm;