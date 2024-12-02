import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
  name: "client",
  initialState: {
    clientData: [], // Данные клиента
    orderData: [],    // Заказанные товары
  },
  reducers: {
    setClientData: (state, action) => {
      state.clientData = action.payload;
    },
    setOrderData: (state, action) => {
      state.orderData = action.payload;
    },
  },
});

export const { setClientData, setOrderData } = clientSlice.actions;
export default clientSlice.reducer;
