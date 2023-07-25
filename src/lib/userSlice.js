import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import services from "../services/questuinaiire";
const initialState = {
    isModalOpen: false,
    submitted: false,
};

export const submitAnswers = createAsyncThunk("services/create", async (data) => {
    const res = await services.create(data);
    console.log("res.status => ", res.status);
    if (res.status === 201) {
        localStorage.setItem("noShow", "noshow");
        localStorage.setItem("id", res.data.id);
        console.log("res => ", res);
        return res.data;
    }
});
export const getAnswers = createAsyncThunk("services/get", async (data) => {
    const res = await services.get(data);
    console.log("res.data => ", res.data);
    if (res.status === 201) {
        return res.data;
    }
});

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        handleModal: (state, action) => {
            console.log("action => ", action);
            return { ...state, isModalOpen: action.payload };
        },
    },
    extraReducers: {
        [submitAnswers.fulfilled]: (state, action) => {
            alert("submitted");
            return { ...state, submitted: true, isModalOpen: false };
        },
        [submitAnswers.rejected]: (state, action) => {
            alert("error");
            return { ...state, submitted: true, isModalOpen: true };
        },
        [getAnswers.fulfilled]: (state, action) => {
            alert("User has already submitted answers.");
            return { ...state, submitted: true, isModalOpen: false };
        },
        [getAnswers.rejected]: (state, action) => {
            alert("error");
            return { ...state, submitted: true, isModalOpen: true };
        },
    },
});

export const { handleModal } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;
