import React, { useEffect, useState} from "react";
import "./App.css";
import MainForm from "./contents/MainForm";
import TableComp from "./contents/TableComp";
import UserContext from  "./contents/UserContext";
import EditForm from "./contents/EditForm";
import PopUpAlert from "./contents/PopUpAlert";



function App() {
  const [inputField, setInputField] = useState([]); 
  const [modals, setModals] = useState(false);
  const [modals_two, setModals_two] = useState(false);
  const [del, setDel] = useState();
  const [index, setIndex] = useState();
  


  useEffect(() => {}, [index]);


  return (
    
    <div>
    <UserContext.Provider  value = {{inputField,setInputField}}>
    <MainForm></MainForm>
    </UserContext.Provider>
      
      <UserContext.Provider value = {{inputField,setDel,setModals_two, modals, setModals, setIndex}} >
      
      <TableComp ></TableComp>
      </UserContext.Provider>

    
    <UserContext.Provider value = {{modals_two, setModals_two, del, setInputField, inputField}}>

      <PopUpAlert></PopUpAlert>
    </UserContext.Provider>


      <UserContext.Provider value = {{modals, setModals, inputField, index}} >
      
      <EditForm></EditForm>
      </UserContext.Provider>

  
    </div>
  );
}

export default App;
