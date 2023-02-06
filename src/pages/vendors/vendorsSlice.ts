import { createSlice } from "@reduxjs/toolkit";
import { Vendor } from "../../api/vendors/types";

export type VendorsState = {
    vendors: Vendor[];
    isLoading: boolean;
    error: string | null;
}

const initialState: VendorsState = {
    vendors: [],
    error: null,
    isLoading: false,
}

const vendorsSlice = createSlice({
    name: "vendors",
    initialState: initialState,
    reducers: {
      getVendorsFetch: (state,action) => {
          state.isLoading = true;
      },
      getVendorsSuccess: (state, action)=> {
        state.isLoading = false;
        state.vendors = state.vendors.concat(action.payload)
      },
      getVendorsFailure: (state, action)=> {
        state.isLoading = false;
        state.error = action.payload
      }
    }
  });

export default vendorsSlice.reducer


export const {getVendorsFetch, getVendorsSuccess,getVendorsFailure} =  vendorsSlice.actions