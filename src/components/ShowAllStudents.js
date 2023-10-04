// ShowAllStudents.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowAllStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch the list of students from your API
    axios
      .get('http://localhost:8060/teacher/302/students')
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Show All Students</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.contact}</td>
              {/* Add more student fields here */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowAllStudents;
