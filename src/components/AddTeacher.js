// AddTeacher.js
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { addTeacher } from './teacherSlice'; // Import your Redux action from the teacherSlice

const AddTeacher = () => {
  const navigate = useNavigate();
  const [teacher, setTeacher] = useState({ name: '', subject: '' });
  const dispatch = useDispatch();

  const handleAddTeacher = () => {
    if (teacher.name.trim() === '' || teacher.subject.trim() === '') return;

    const newTeacher = { ...teacher };

    axios.post('http://localhost:8060/teacher/addTeacher', newTeacher, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
      newTeacher.id = res.data.id;
      dispatch(addTeacher(newTeacher)); // Dispatch the added teacher to Redux
      alert("Teacher added Successfully");
      navigate('/'); // Navigate back to the main page
    })
    .catch(error => console.log(error));
  };

  return (
    <div>
      <h2>Add Teacher</h2>
      <input
        type="text"
        placeholder="Name"
        value={teacher.name}
        onChange={(eventObj) => setTeacher({ ...teacher, name: eventObj.target.value })}
      />
      <input
        type="text"
        placeholder="Subject"
        value={teacher.subject}
        onChange={(eventObj) => setTeacher({ ...teacher, subject: eventObj.target.value })}
      />
      <br/>
      <button onClick={handleAddTeacher} className="btn btn-success">Add</button>
      <br/>
      <Link to="/" className="btn btn-sm btn-info">Back to Main Page</Link>
    </div>
  );
};

export default AddTeacher;
