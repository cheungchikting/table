import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./reducer/tableReducer";

export default configureStore({
  reducer: {
    table: tableReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
