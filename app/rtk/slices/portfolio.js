import Axios from "@/app/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPortfolio = createAsyncThunk('portfolioSlice/getPortfolio', async () => {
    const { data } = await Axios.get('/portfolio')
    return data.reverse()
})

const portfolioSlice = createSlice({
    initialState : [],
    name : 'portfolioSlice',
    reducers: {
        addProject : (state,action) => {
            state.push(action.payload)
        },
        deleteProject : (state,action) => {
            const filterProjects = state.filter( project => project._id !== action.payload )
            return filterProjects
        }
    },
    extraReducers : (builder) => {
        builder.addCase(getPortfolio.fulfilled, (state, action) => {
            return action.payload
        })
    },
})

export const { addProject, deleteProject } = portfolioSlice.actions
export default portfolioSlice.reducer