import { createContext, useReducer, useContext } from 'react';

const CarritoContext = createContext();

const carritoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { selectedProducts: [...state.selectedProducts, action.payload] };
        case 'REMOVE_FROM_CART':
            return { selectedProducts: state.selectedProducts.filter(item => item.id !== action.payload.id) };
        default:
            return state;
    }
};

export const CarritoProvider = ({ children }) => {
    const [carrito, dispatch] = useReducer(carritoReducer, { selectedProducts: [] });

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