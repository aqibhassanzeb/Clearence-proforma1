import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// export const studentReg = createAsyncThunk(
//     'studentRegister', async (data) => {
//         const { email, password } = data
//         console.log('data in user ', email, password)
//         try {
//             if (!email) {
//                 toast('please enter email')
//                 return
//             }
//             if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
//                 toast("Invalid email or password !");
//                 return
//             }
//             const res = await fetch('http://localhost:11000/studsignup', {
//                 method: "post",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     email: email,
//                     password: password
//                 })
//             })
//             const result = await res.json()
//             console.log(result)
//             if (result.error) {
//                 toast(result.error)

//             }
//             else {
//                 toast("registered successfull")

//             }
//             return result

//         } catch (error) {
//             console.log(error)
//         }

//     }
// )

export const studentReg = createAsyncThunk(
    'studentRegister', async (data) => {
        const { email, password } = data
        console.log('data in user ', email, password)
        try {
            if (!email) {
                toast('please enter email')
                return
            }
            if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
                toast("Invalid email or password !");
                return
            }
            const res = await fetch('http://localhost:11000/studsignup', {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            const result = await res.json()
            console.log(result)
            if (result.error) {
                toast(result.error)

            }
            else {
                toast("registered successfull")

            }
            return result

        } catch (error) {
            console.log(error)
        }

    }
)