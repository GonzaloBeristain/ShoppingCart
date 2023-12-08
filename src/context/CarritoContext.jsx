import { createContext, useReducer, useContext } from 'react';

const CarritoContext = createContext();

const carritoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Buscar si el producto ya está en el carrito
        const existingProduct = state.selectedProducts.find(
          (item) => item.id === action.payload.id
        );
  
        if (existingProduct) {
          // Si el producto ya está en el carrito, actualizar la cantidad
          const updatedProducts = state.selectedProducts.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
  
          return {
            ...state,
            selectedProducts: updatedProducts,
            total: state.total + action.payload.price,
          };
        } else {
          // Si el producto no está en el carrito, agregarlo
          return {
            ...state,
            selectedProducts: [...state.selectedProducts, { ...action.payload, quantity: 1 }],
            total: state.total + action.payload.price,
          };
        }
  
      case 'REMOVE_FROM_CART':
        const removedProduct = state.selectedProducts.find(
          (item) => item.id === action.payload.id
        );
  
        if (removedProduct.quantity > 1) {
          // Si la cantidad es mayor que 1, reducir la cantidad
          const updatedProducts = state.selectedProducts.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
  
          return {
            ...state,
            selectedProducts: updatedProducts,
            total: state.total - removedProduct.price,
          };
        } else {
          // Si la cantidad es 1, eliminar el producto del carrito
          return {
            ...state,
            selectedProducts: state.selectedProducts.filter(
              (item) => item.id !== action.payload.id
            ),
            total: state.total - removedProduct.price,
          };
        }
  
      default:
        return state;
    }
  };
  

export const CarritoProvider = ({ children }) => {
    const [carrito, dispatch] = useReducer(carritoReducer, { selectedProducts: [], total: 0 });

    return (
        <CarritoContext.Provider value={{ carrito, dispatch }}>
            {children}
        </CarritoContext.Provider>
    );
};

export const useCarrito = () => {
    const context = useContext(CarritoContext);
    if (!context) {
        throw new Error('useCarrito must be used within a CarritoProvider');
    }
    return context;
};