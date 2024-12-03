import { createSlice } from "@reduxjs/toolkit";

// загрузк данных корзины из localStorage
const loadCartFromLocalStorage = () => {
  const cartData = localStorage.getItem("cart");
  if (cartData) {
    const parsedData = JSON.parse(cartData);
    return {
      itemsInCart: Array.isArray(parsedData.itemsInCart)
        ? parsedData.itemsInCart
        : [], // проверка что itemsInCart это массив
      totalItemCount: parsedData.totalItemCount || 0,
      totalPriceCount: parsedData.totalPriceCount || 0,
    };
  }
  return { itemsInCart: [], totalItemCount: 0, totalPriceCount: 0 }; // Начальные значения
};

// сохранения данных корзины в localStorage
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart)); // данные сохраняем как строку JSON
};

const initialState = loadCartFromLocalStorage();

// функция для вычисления общего количества товаров и общей цены
const calculateTotals = (items) => {
  const totalItemCount = items.reduce((count, item) => count + item.count, 0); // количество товаров
  const totalPriceCount = items.reduce(
    (total, item) => total + item.price * item.count,
    0
  ); // стоимость товаров
  return { totalItemCount, totalPriceCount };
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // добавление товара в корзину
    setItemInCart: (state, action) => {
      // eсли itemsInCart не массив, инициализируем его как пустой массив
      if (!Array.isArray(state.itemsInCart)) {
        state.itemsInCart = [];
      }
    
      const itemsToAdd = Array.isArray(action.payload)
        ? action.payload.flatMap((innerArray) => innerArray) 
        : [action.payload]; 
    
      itemsToAdd.forEach((item) => {
        const itemExists = state.itemsInCart.some(
          (existingItem) => existingItem.id === item.id
        ); // существует ли товар уже в корзине
        if (!itemExists) {
          state.itemsInCart.push(item); // eсли товара нет, добавляем его
        }
      });
    
      const totals = calculateTotals(state.itemsInCart); 
      state.totalItemCount = totals.totalItemCount;
      state.totalPriceCount = totals.totalPriceCount;
      saveCartToLocalStorage(state); 
    },
    

    // Удаление из корзины
    delItemInCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (item) => item.id !== action.payload
      );

      const totals = calculateTotals(state.itemsInCart);
      state.totalItemCount = totals.totalItemCount;
      state.totalPriceCount = totals.totalPriceCount;
      saveCartToLocalStorage(state);
    },

    // Увеличение количества товара
    increaseCountProduct: (state, action) => {
      const product = state.itemsInCart.find(
        (item) => item.id === action.payload
      );
      if (product) {
        product.count += 1;
        const totals = calculateTotals(state.itemsInCart);
        state.totalItemCount = totals.totalItemCount;
        state.totalPriceCount = totals.totalPriceCount;
        saveCartToLocalStorage(state);
      }
    },

    // Уменьшение количества товара
    reductionCountProduct: (state, action) => {
      const product = state.itemsInCart.find(
        (item) => item.id === action.payload
      );
      if (product && product.count > 0) {
        product.count -= 1;
      } 
      const totals = calculateTotals(state.itemsInCart);
      state.totalItemCount = totals.totalItemCount;
      state.totalPriceCount = totals.totalPriceCount;
      saveCartToLocalStorage(state);
    },
    
    clearStor: () => initialState
  },
});


export const {
  setItemInCart,
  delItemInCart,
  increaseCountProduct,
  reductionCountProduct,
  clearStor,
} = cartSlice.actions;
export default cartSlice.reducer;
