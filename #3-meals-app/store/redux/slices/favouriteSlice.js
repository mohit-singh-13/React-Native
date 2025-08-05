import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
};

const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      // state.ids = [...state.ids, action.payload.id];
      state.ids.push(action.payload.id);
    },

    removeFavourite: (state, action) => {
      // state.ids = state.ids.filter((id) => id !== action.payload.id);
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;
