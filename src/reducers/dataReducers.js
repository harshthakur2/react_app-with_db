import StudentList from "../components/StudentList";

const INITIAL_STATE = {
    studentsdata:  [
        { name: 'Harsh Thakur', id: 1, phoneNumber: '6261892774' },
        { name: 'Piyush Kag ',  id: 2, phoneNumber: '1234567891' },
        { name: 'Harish Verma', id: 3, phoneNumber: '9876543210' },
        { name: 'Aarti Goswami',id: 4, phoneNumber: '8675545643' },
        { name: 'Abhi yadav',   id: 5, phoneNumber: '8587473859' },
    ],
   
  };
  
  function dataReducers(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'UPDATE':
        console.log(action.payload);
    return{
          ...state,
            studentsdata: state.studentsdata.map(student => student.id === action.payload.id? action.payload : student)
    }

      case 'DELETE':
    
        return {
        ...state,
          studentsdata: state.studentsdata.filter(student => student.id!== action.id)
        };
         case 'ADDDATA':
          console.log(action.newUser.id)
          return{
              studentsdata: [...state.studentsdata, action.newUser]
             
          }
      default: return state;
    }
  }
  
export default dataReducers;