import React, { useState } from 'react'
import StudentList from './StudentList'
import AddData from './addData'
import { useDispatch, useSelector } from 'react-redux'

const Display = () => {
    const [page, setPage] = useState(false)
    const dispatch = useDispatch();
    const {buttonvalue}= useSelector((state)=>state.studentState);
    {console.log(buttonvalue);}

    function handleClose(){
        setPage(false);
    }
  return (
    <div>
        <button onClick={() => setPage(!page)}>add</button>
        {page === true ? (<><AddData handleClose={handleClose}/></>):(<><StudentList/></>)}
    </div>
  )
}

export default Display
