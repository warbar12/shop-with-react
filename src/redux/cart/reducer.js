import { createSlice } from "@reduxjs/toolkit";

// Загрузка данных корзины из localStorage
const loadCartFromLocalStorage = () => {
  const cartData = localStorage.getItem("cart");
  if (cartData) {
    const parsedData = JSON.parse(cartData);
    return {
      itemsInCart: Array.isArray(parsedData.itemsInCart) ? parsedData.itemsInCart : [],
      totalItemCount: parsedData.totalItemCount || 0,
      totalPriceCount: parsedData.totalPriceCount || 0,
    };
  }
  return { itemsInCart: [], totalItemCount: 0, totalPriceCount: 0 }; // Начальные значения
};

// Сохранение данных корзины в localStorage
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart)); // Сохраняем данные как строку JSON
};

// Функция для вычисления общего количества товаров и общей цены
const calculateTotals = (items) => {
  const totalItemCount = items.reduce((count, item) => count + item.count, 0); // Количество товаров
  const totalPriceCount = items.reduce(
    (total, item) => total + item.price * item.count,
    0
  ); // Стоимость товаров
  return { totalItemCount, totalPriceCount };
};

const initialState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Добавление товара в корзину
    setItemInCart: (state, action) => {
      const itemsToAdd = Array.isArray(action.payload) ? action.payload : [action.payload];

      itemsToAdd.forEach((item) => {
        const itemExists = state.itemsInCart.some(
          (existingItem) => existingItem.id === item.id
        );
        if (!itemExists) {
          state.itemsInCart.push(item); // Добавляем товар в корзину
        }
      });

      // Вычисляем новые итоги
      const totals = calculateTotals(state.itemsInCart);
      state.totalItemCount = totals.totalItemCount;
      state.totalPriceCount = totals.totalPriceCount;

      saveCartToLocalStorage(state); // Сохраняем обновленную корзину в localStorage
    },

    // Удаление товара из корзины
    delItemInCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (item) => item.id !== action.payload
      );

      // Вычисляем новые итоги
      const totals = calculateTotals(state.itemsInCart);
      state.totalItemCount = totals.totalItemCount;
      state.totalPriceCount = totals.totalPriceCount;

      saveCartToLocalStorage(state); // Сохраняем обновленную корзину в localStorage
    },

    // Увеличение количества товара
    increaseCountProduct: (state, action) => {
      const product = state.itemsInCart.find((item) => item.id === action.payload);
      if (product) {
        product.count += 1;

        // Вычисляем новые итоги
        const totals = calculateTotals(state.itemsInCart);
        state.totalItemCount = totals.totalItemCount;
        state.totalPriceCount = totals.totalPriceCount;

        saveCartToLocalStorage(state); // Сохраняем обновленную корзину в localStorage
      }
    },

    // Уменьшение количества товара
    reductionCountProduct: (state, action) => {
      const product = state.itemsInCart.find((item) => item.id === action.payload);
      if (product && product.count > 0) {
        product.count -= 1;
      }

      // Вычисляем новые итоги
      const totals = calculateTotals(state.itemsInCart);
      state.totalItemCount = totals.totalItemCount;
      state.totalPriceCount = totals.totalPriceCount;

      saveCartToLocalStorage(state); // Сохраняем обновленную корзину в localStorage
    },

    clearStor: () => {
      localStorage.removeItem("cart"); // удаление данных из localStorage
      return initialState; // сброс состояния к
    }
    
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
