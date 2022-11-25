import React from "react";
import "../App.css";
import { useContext } from "react";
import UserContext from "./UserContext.jsx";


function TableComp(){

const { inputField,setDel,setModals_two, modals, setModals, setIndex} = useContext(UserContext);

function editRow(e) {
  setModals(!modals);
  const newId = e.target.id;

  setIndex(inputField.map((obj) => obj.id).indexOf(newId));
}
 

  return (
  
 
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

);

}

export default TableComp;