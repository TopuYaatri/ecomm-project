import React from 'react'
import { useContext} from "react";
import UserContext from './UserContext';

function EditForm() {

  const {modals, setModals, inputField, index} = useContext(UserContext);

  function editObject(e) {
    inputField.splice(index, 1, {
      id : inputField[index].id,
      product_name: document.getElementById("product_name_modal").value,
      description: document.getElementById("description_modal").value,
      price: document.getElementById("price_modal").value,
    });
    setModals(!modals)
    e.preventDefault();
  }

  return (
    <div>{modals === true && (
      <div className="backShadow">
        <div >
          <form className = "form_two" onSubmit={editObject}>
            <label >Product Name</label>
            <input
              className="input_name"
              type="text"
              id="product_name_modal"
              placeholder="Product Name"
            ></input>
            <br></br>
            <label>Description</label>
            <input
              className="input_description"
              type="text"
              id="description_modal"
              placeholder="Description"
            ></input>
            <br></br>
            <label>Price</label>{" "}
            <input className = "input_price" type="text" id="price_modal" placeholder="Price"></input>
            <br></br>
            <button className="save_button">save</button>
            <button className = "close_button" onClick={() => setModals(!modals)}>close</button>
          </form>
         
        </div>
      </div>
    )}</div>
  )
}

export default EditForm;