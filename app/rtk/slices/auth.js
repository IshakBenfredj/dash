import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    initialState : [],
    name : 'authSlice',
    reducers: {
        login : (state,action) => {
            return action.payload
        },
        logout : (state,action) => {
            return null
        }
    },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer