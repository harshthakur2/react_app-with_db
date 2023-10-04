import { createSlice } from '@reduxjs/toolkit';

const teacherSlice = createSlice({
  name: 'teachers',
  initialState: [],
  reducers: {
    updateTeacher: (state, action) => {
      return state.map(teacher =>
        teacher.id === action.payload.id ? action.payload : teacher
      );
    },
    deleteTeacher: (state, action) => {
      return state.filter(teacher => teacher.id !== action.payload);
    },
    addTeacher: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { updateTeacher, deleteTeacher, addTeacher } = teacherSlice.actions;
export default teacherSlice.reducer;
