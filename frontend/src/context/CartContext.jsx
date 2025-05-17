import { createContext, useContext, useReducer } from 'react';
import { useMemo, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existingProduct = state.find(item => item._id === action.payload._id);
            if (existingProduct) { //Si lo encuentra, le suma la cantidad, y si no, lo devuelve como esta 
            return state.map(item =>
            item._id === action.payload._id
                ? { ...item, quantity: item.quantity + action.payload.quantity }
                : item
            );
            }
            return [...state, action.payload];
        }

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
        dispatch({ type: 'ADD_TO_CART', payload: {...product, quantity: 1} });
        sendNotification('Producto agregado al carrito exitosamente');
    }, []);

    const removeFromCart = useMemo(() => (id) => {
        if (!id) {
            console.error('Invalid product ID');
            return;
        }
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
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
    }, []);

    const getTotal = useMemo(() => () => {
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        return total;
    }, [cart]);

    const sendNotification = (message) => {
        alert(message);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal, clearCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;