import { useDispatch } from "react-redux";
import { useState } from "react";

const AddData = ({ handleClose }) => {
  const dispatch = useDispatch();

  function saveData() {
    const id = document.getElementById('t1').value;
    const name = document.getElementById('t2').value;
    const phoneNumber = document.getElementById('t3').value;

    const newUser = {
      name: name,
      id: id,
      phoneNumber: phoneNumber
    }

    dispatch({ type: 'ADDDATA', newUser: newUser });
    handleClose();
  }

  return (
    <div>
      <label>id</label>
      <input type="text" id="t1" />
      <label>name</label>
      <input type="text" id="t2" />
      <label>phone Number</label>
      <input type="text" id="t3" />
      <button onClick={saveData}>save</button>
    </div>
  )
}

export default AddData;
