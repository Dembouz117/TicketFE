import { createSlice } from "@reduxjs/toolkit";
//TypeScript can correctly handle circular imports for types so it's okay to import from store. Needed for writing selector functions
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";


const initialState = {
    mode: "dark"
};
interface scheduleType{
    dateFrom:"",
    dateTo:""
}
interface pricingType{
    category?: String,
    price?: number,
    quantity?: number
}
interface royaltiesType{
    address?: String,
    share?: number,
    name?: String
}
interface formStateType{
    title: String,
    description: String,
    location: String,
    schedules: scheduleType[],
    pricing: pricingType[],
    royalties: royaltiesType[]
}
const formInitialState: formStateType = {
    title: "",
    description:"",
    location:"",
    schedules: [],
    pricing: [],
    royalties: []
}

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: state => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        }
    }
});

export const formSlice = createSlice({
    name: "formSlice",
    initialState: formInitialState,
    reducers: {
        setFormTitle: (prevState, action: PayloadAction<String>) => {
            prevState.title = action.payload;
        },
        setFormDesc: (prevState, action: PayloadAction<String>) => {
            prevState.description = action.payload;
        },
        setFormLocation: (prevState, action: PayloadAction<String>) => {
            prevState.location = action.payload;
        },
        setFormSchedules: (prevState, action: PayloadAction<scheduleType>) => {
            prevState.schedules = [...prevState.schedules, action.payload];
        },
        setFormPricing: (prevState, action: PayloadAction<pricingType>) => {
            prevState.pricing = [...prevState.pricing, action.payload];
        },
        setFormRoyalties: (prevState, action: PayloadAction<royaltiesType>) => {
            prevState.royalties = [...prevState.royalties, action.payload];
        }
        
    }
})

export const { setMode } = globalSlice.actions;
export const { setFormDesc, setFormLocation, setFormPricing, setFormSchedules, setFormRoyalties, setFormTitle } = formSlice.actions;
// export const { setFormDesc, setFormLocation, setFormTitle } = formSlice.actions;

export const selectFormSlice = (state: RootState) => state.formSlice;

export const formSliceReducer = formSlice.reducer;
export default globalSlice.reducer;