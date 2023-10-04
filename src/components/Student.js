import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import UpdateData from './UpdateData';

function Student({ data }) {
  console.log(data);
  const dispatch = useDispatch();
  const [isUpdateVisible, setIsUpdateVisible] = useState(false);

  const handleDelete = () => {
    dispatch({ type: 'DELETE', id: data.id });
  };

  function handleUpdate(id, name, phoneNumber) {
    const updatedUser = {
      name: name,
      id: id,
      phoneNumber: phoneNumber
    }
    dispatch({ type: 'UPDATE', payload: updatedUser });
    
    setIsUpdateVisible(false);
  };
  

  return (
    <>
      <table className="table">
        <tbody>
          <tr>
            <td><b>id:</b> {data?.id}</td>
            <td><b>Name:</b> {data?.name}</td>
            <td><b>phoneNumber:</b> {data?.phoneNumber}</td>
            <td>
              <button type="button" className="btn btn-warning" onClick={() => setIsUpdateVisible(true)}>update</button>
            </td>
            <td>
              <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      {isUpdateVisible && <UpdateData data={data} handleUpdate={handleUpdate} />}
    </>
  );
}

export default Student;
