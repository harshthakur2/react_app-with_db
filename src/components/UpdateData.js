import React, { useState } from 'react'

const UpdateData = ({ data,handleUpdate}) => {
    console.log(data);
    const [id, setId] = useState(data.id);
  const [name, setName] = useState(data.name);
  const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber);

  function saveData() {
    console.log(id, name, phoneNumber);
    handleUpdate(id, name, phoneNumber); 
  }
  

  return (
    <div>
      <label>id</label>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <label>name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>phone Number</label>
      <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <button onClick={saveData}>save</button>
    </div>
  )
}

export default UpdateData;

