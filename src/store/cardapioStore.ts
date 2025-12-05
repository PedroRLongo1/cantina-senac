// store/carrinhoStore.ts
import { create } from 'zustand';
import { carrinhoProps } from '../components/Carrinho';

interface carrinhoStore {
  cart: carrinhoProps[];
  addToCart: (item: carrinhoProps) => void;
  removeFromCart: (id: string) => void;
}

export const useCarrinhoStore = create<carrinhoStore>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
    })),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
}));

export default useCarrinhoStore;