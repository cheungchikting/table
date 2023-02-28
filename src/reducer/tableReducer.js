import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "table",
  initialState: {
    loading: false,
    data: [],
    message: "",
  },
  reducers: {
    loading(state, action) {
      state.loading = action.payload;
    },
    getDataThunksuccess(state, action) {
      state.data = action.payload;
    },
    getDataThunkfailure(state, action) {
      state.message = action.payload;
    },
    addDataThunksuccess(state, action) {
      state.data = [...state.data, ...action.payload];
    },
    addDataThunkfailure(state, action) {
      state.message = action.payload;
    },
    editDataThunksuccess(state, action) {
      let editedData = {
        id: action.payload.id,
        description: action.payload.description,
        pattern: action.payload.pattern,
        instruction: action.payload.instruction,
      };
      state.data.map((x) => {
        if ((x.id = action.payload.id)) {
          return editedData;
        }
      });
    },
    editDataThunkfailure(state, action) {
      state.message = action.payload;
    },
  },
});

export const {
  loading,
  getDataThunksuccess,
  getDataThunkfailure,
  addDataThunksuccess,
  addDataThunkfailure,
  editDataThunksuccess,
  editDataThunkfailure,
} = Slice.actions;

export default Slice.reducer;
