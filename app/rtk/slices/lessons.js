import Axios from "@/app/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getLessons = createAsyncThunk('lessonsSlice/getLessons', async () => {
    const { data } = await Axios.get('/lessons')
    return data.reverse()
})

const lessonsSlice = createSlice({
    initialState : [],
    name : 'lessonsSlice',
    reducers: {
        addLesson : (state,action) => {
            state.push(action.payload)
        },
        deleteLesson : (state,action) => {
            const filterLessons = state.filter( lesson => lesson._id !== action.payload )
            return filterLessons
        }
    },
    extraReducers : (builder) => {
        builder.addCase(getLessons.fulfilled, (state, action) => {
            return action.payload
        })
    },
})

export const { addLesson, deleteLesson } = lessonsSlice.actions
export default lessonsSlice.reducer