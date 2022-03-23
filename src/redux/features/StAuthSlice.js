import { createSlice } from '@reduxjs/toolkit'
import { studentReg } from '../services/StudentUser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialState = {
  // registerStudent: false,
  loader: false
}
const AuthSlice = createSlice({
  name: "Studentuser",
  initialState,
  reducers: {},
  extraReducers: {
    [studentReg.pending]: (state, action) => {
      state.loader = true
    },
    [studentReg.fulfilled]: (state, action) => {
      state.loader = false

      if (action.payload == undefined) {
        // toast('undefined')
      } else if (action.payload.message) {
        toast(action.payload.message)
        // state.registerStudent = true
      }
      else if (action.payload.error) {
        toast(action.payload.error)

      }
      else {
        toast('internet issue')
      }

    }

  }

});



export const { registerStudent } = AuthSlice.actions

export default AuthSlice.reducer