import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URI_API } from "../const/const";


export const fetcHolidays = createAsyncThunk(
    'holidays/fetchHolidays',

    async () => {
        const res = await fetch(URI_API);
        const data = await res.json();
        return data
    }
)



const holidaysSlice = createSlice({
    name: 'holidays',
    initialState: {
        holidays: {},
        loading: '',
    },
    reducers: {},
    extraReducers: {
        [fetcHolidays.pending]: (state) => {
            state.loading = 'loading';
        },
        [fetcHolidays.fulfilled]: (state, action) => {
            state.loading = 'success';
            state.holidays =action.payload;
        },
        [fetcHolidays.rejected]: (state) => {
            state.loading = 'failed';
            state.holidays = {};
        },
    },
});

export const {setHoliday} = holidaysSlice.actions;

export default holidaysSlice.reducer;