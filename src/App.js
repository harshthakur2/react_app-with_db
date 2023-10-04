import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import InstituteManager from "./components/InstituteManager";
import AddTeacher from './components/AddTeacher';
import ShowAllStudents from './components/ShowAllStudents';
import StudentListByTeacherId from './components/StudentListByTeacherId';
import TeacherDetails from './components/TeacherDetails';


function App() {
  //const { studentsdata} = useSelector((state) => state.studentState);
  //const dispatch = useDispatch();
  
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route exact path='/' element={ <InstituteManager /> } />
      <Route exact path="/add" element={<AddTeacher />}/>
      {/* <Route exact path="/showAllStudents" element={<ShowAllStudents />}/> */}
      <Route exact path="/getStudentsByTeacherId" element={<StudentListByTeacherId/>}/>
      <Route exact path="/teacher/:teacherId/students" element={<TeacherDetails />} />
    </Routes>
   </BrowserRouter>
       </div>
  );
}

export default App;
