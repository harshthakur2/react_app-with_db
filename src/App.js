import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import StudentList from "./components/StudentList";
import { useEffect, useState } from "react";
import AddData from "./components/addData";
import Display from "./components/Display";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import InstituteManager from "./components/InstituteManager";
import AddTeacher from './components/AddTeacher';


function App() {
  const { studentsdata} = useSelector((state) => state.studentState);


  const dispatch = useDispatch();

  const [buttonValue, setButtonValue] = useState(false);
  
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route exact path='/' element={ <InstituteManager /> } />
      <Route exact path="/add" element={<AddTeacher />}/>
    </Routes>
   </BrowserRouter>
       </div>
  );
}

export default App;
