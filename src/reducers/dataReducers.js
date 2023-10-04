const INITIAL_STATE = [];
  
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