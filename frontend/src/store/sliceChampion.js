import { createSlice } from "@reduxjs/toolkit";

const sliceChampion = createSlice({
  name: "Champion",
  initialState: {
    allChampions: [],
  },
  reducers: {
    setChampion: (state, action) => {
      state.allChampions = action.payload;
      console.log(action.payload);
    },
  },
});

export const { setChampion } = sliceChampion.actions;
export default sliceChampion.reducer;
