import Axios from "@/app/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getServices = createAsyncThunk('servicesSlice/getServices', async () => {
    const { data } = await Axios.get('/services')
    return data
})

const servicesSlice = createSlice({
    initialState : [],
    name : 'servicesSlice',
    reducers: {
        addService : (state,action) => {
            state.push(action.payload)
        },
        deleteService : (state,action) => {
            const filterServices = state.filter( service => service._id !== action.payload )
            return filterServices
        }
    },
    extraReducers : (builder) => {
        builder.addCase(getServices.fulfilled, (state, action) => {
            return action.payload
        })
    },
})

export const { addService, deleteService } = servicesSlice.actions
export default servicesSlice.reducer