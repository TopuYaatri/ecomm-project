import React from 'react'
import { useContext} from "react";
import UserContext from './UserContext';

const PopUpAlert = () => {

  const {modals_two, setModals_two, del, setInputField, inputField} = useContext(UserContext);

  const delRow = () => {
    setInputField(inputField.filter((x) => x.id !== del));
    setModals_two(false);
  };

  return (
    <div>{modals_two === true && (
      <div className = "backShadow">
      <div className = "alert_div" >

      Are you sure you want to delete this product?

      <button onClick = {delRow}> yes</button>
      <button onClick={()=>setModals_two(false)}> no </button>
      </div>
        
      </div>

    )}</div>
  )
}

export default PopUpAlert;