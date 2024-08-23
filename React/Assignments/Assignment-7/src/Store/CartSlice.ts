import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  images: any;
  id: number;
  title: string;
  price: number;
  description: string;
  category: any;
  image: any;
  quantity: number;
}

interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    clearCart: (state) => {
      state.cart = []; 
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const product = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        product.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, clearCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
