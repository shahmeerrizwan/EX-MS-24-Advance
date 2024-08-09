// import { createSlice } from '@reduxjs/toolkit'



// const initialState = {
//   cart: [],
// }

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//    addToCart:(state:any,data:any)=>{
//     state.cart.push(data.payload)
//    }
  
//   },
// })

// export const { addToCart } = cartSlice.actions

// export default cartSlice.reducer







import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number; // Add quantity to the product
}

interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.cart.find(product => product.id === action.payload.id);
      if (existingProduct) {
        // If product already exists, increase the quantity
        existingProduct.quantity += action.payload.quantity;
      } else {
        // If product doesn't exist, add it to the cart
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(product => product.id !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const product = state.cart.find(product => product.id === action.payload.id);
      if (product) {
        product.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
