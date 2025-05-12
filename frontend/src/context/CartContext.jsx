import { createContext, useContext, useReducer } from 'react';
import { useMemo, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_FROM_CART':
            return state.filter((item) => item._id !== action.payload);
        case 'CLEAR_CART':
            return [];
        case 'UPDATE_QUANTITY':
            return state.map((item) =>
                item._id === action.payload.id
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );
        case 'GET_TOTAL':
            return state.reduce((acc, item) => acc + item.price * item.quantity, 0);
        case 'LOAD_CART': 
            return action.payload || [];
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    useEffect(() => {
        const storedCart = sessionStorage.getItem('cart');
        if (storedCart) {
            dispatch({ type: 'LOAD_CART', payload: JSON.parse(storedCart) });
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = useMemo(() => (product) => {
        if (!product || !product._id) {
            console.error('Invalid product');
            return;
        }
        dispatch({ type: 'ADD_TO_CART', payload: product });
        sendNotification('Product added to cart');
    }, []);

    const removeFromCart = useMemo(() => (id) => {
        if (!id) {
            console.error('Invalid product ID');
            return;
        }
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
        sendNotification('Product removed from cart');
    }, []);

    const clearCart = useMemo(() => () => {
        dispatch({ type: 'CLEAR_CART' });
        sendNotification('Cart cleared');
    }, []);

    const updateQuantity = useMemo(() => (id, quantity) => {
        if (!id || typeof quantity !== 'number' || quantity <= 0) {
            console.error('Invalid quantity or product ID');
            return;
        }
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
        sendNotification('Product quantity updated');
    }, []);

    const getTotal = useMemo(() => () => {
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        sendNotification(`Total calculated: $${total}`);
        return total;
    }, [cart]);

    const sendNotification = (message) => {
        console.log(message);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal, clearCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};