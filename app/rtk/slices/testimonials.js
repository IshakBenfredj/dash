import Axios from "@/app/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTestimonials = createAsyncThunk('testimnialsSlice/getTestimonials', async () => {
    const { data } = await Axios.get('/testimonials')
    return data
})

const testimonialsSlice = createSlice({
    initialState : [],
    name : 'testimnialsSlice',
    reducers: {
        addTestimonial : (state,action) => {
            state.push(action.payload)
        },
        deleteTestimonial : (state,action) => {
            const filterTestimonials = state.filter( testimonial => testimonial._id !== action.payload )
            return filterTestimonials
        }
    },
    extraReducers : (builder) => {
        builder.addCase(getTestimonials.fulfilled, (state, action) => {
            return action.payload
        })
    },
})

export const { addTestimonial, deleteTestimonial } = testimonialsSlice.actions
export default testimonialsSlice.reducer