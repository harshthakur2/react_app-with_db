import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import StudentListByTeacherId from './StudentListByTeacherId';

const TeacherDetails = () => {
  const { teacherId } = useParams(); // Get the teacherId from the URL
  const [showStudents, setShowStudents] = useState(false);

  const handleGetStudents = () => {
    setShowStudents(true);
  };

  return (
    <div>
      <h1>Teacher Details</h1>
      <p>Teacher ID: {teacherId}</p> {/* Display the teacherId from the URL */}
      <button onClick={handleGetStudents}>Get Students</button>

      {showStudents && <StudentListByTeacherId teacherId={teacherId} />}
    </div>
  );
};

export default TeacherDetails;
