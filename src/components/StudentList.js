import { useSelector } from "react-redux";
import Student from "./Student";
const StudentList = () => {
  const { studentsdata} = useSelector((state) => state.studentState);
  return(
  <>
  <div align='center'><h1 >Student</h1>
  
  </div>
    <ul>
      {studentsdata?.map((data) => (
         <li key={data?.id}>
          <Student data={data} />
         </li>
      ))}
    </ul>
    </>
  );
      }
  export default StudentList;