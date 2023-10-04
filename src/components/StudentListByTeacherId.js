import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentListByTeacherId = ({ teacherId }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStudentsByTeacherId = async () => {
      try {
        const response = await axios.get(`http://localhost:8060/teacher/${teacherId}/students`);
        setStudents(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching students:', error);
        setLoading(false);
      }
    };

    // Check if a valid teacherId is provided before making the API request
    if (teacherId) {
      getStudentsByTeacherId();
    }
  }, [teacherId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : students.length === 0 ? (
        <p>No students found for this teacher.</p>
      ) : (
        <div>
          <h2>Students taught by Teacher {teacherId}</h2>
          <table>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentListByTeacherId;
