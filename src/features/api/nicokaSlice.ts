import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export type TPoste = {
  active: number;
  address_state: string;
  benefits: string;
  city: string;
  contract_type__formated: string;
  country: string;
  county: string;
  currency: string;
  description: string;
  id: number;
  industry__formated: string;
  label: string;
  level__formated: string;
  mobilityid__formated: string;
  reference: string;
  requirements: string;
  salary_left: number;
  salary_right: number;
  salary_time_unit__formated: string;
  spcid__formated: string;
  start_type__formated: string;
  zipcode: string;
};

const initialState: { data: TPoste[] } = {
  data: [],
};

export const nicokaSlice = createSlice({
  name: "nicoka",
  initialState,
  reducers: {
    setNicoka: (state, action: PayloadAction<[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setNicoka } = nicokaSlice.actions;
export default nicokaSlice.reducer;
