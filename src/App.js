import React, { useEffect, useState } from "react";
import "./App.css";
import {v4} from 'uuid';

function App() {
  const [inputField, setInputField] = useState([]);
  const [modals, setModals] = useState(false);
  const [modals_two, setModals_two] = useState(false);
  const [del, setDel] = useState();
  const [index, setIndex] = useState();

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

  const delRow = () => {
    setInputField(inputField.filter((x) => x.id !== del));
    setModals_two(false);
  };

  function editRow(e) {
    setModals(!modals);
    const newId = e.target.id;

    setIndex(inputField.map((obj) => obj.id).indexOf(newId));
  }

  useEffect(() => {}, [index]);

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
    <div>
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
      <div className="table_div">
      <table className="table">
        <tbody>
          <tr className="row">
            <th>ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>

          {inputField.map((inObj) => (
            <tr key={inObj.id}>
              <td>{inObj.id}</td>
              <td className= "td">{inObj.product_name}</td>
              <td>{inObj.description}</td>
              <td>{inObj.price}</td>
              <td>
                <button id={inObj.id} onClick={()=>{setDel(inObj.id); setModals_two(true) }}>
                  delete
                </button>
              </td>
              <td>
                <button id={inObj.id} onClick={editRow}>
                  edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      {modals_two === true && (
        <div className = "backShadow">
        <div className = "alert_div" >

        Are you sure you want to delete this product?

        <button onClick = {delRow}> yes</button>
        <button onClick={()=>setModals_two(false)}> no </button>
        </div>
          
        </div>

      )}
      {modals === true && (
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
      )}
    </div>
  );
}

export default App;
