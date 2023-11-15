import Axios from "@/app/api";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getSkills = createAsyncThunk('skillsSlice/getSkills', async () => {
    const { data } = await Axios.get('/skills')
    return data
})

const skillsSlice = createSlice({
    initialState : [],
    name : 'skillsSlice',
    reducers: {
        addSkill : (state,action) => {
            state.push(action.payload)
        },
        deleteSkill : (state,action) => {
            const filterSkills = state.filter( skill => skill._id !== action.payload )
            return filterSkills
        }
    },
    extraReducers : (builder) => {
        builder.addCase(getSkills.fulfilled, (state, action) => {
            return action.payload
        })
    },
})

export const { addSkill, deleteSkill } = skillsSlice.actions
export default skillsSlice.reducer