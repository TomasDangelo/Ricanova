import React from 'react';
import {  useCart } from '../context/CartContext';

const Products = () => {
    const { addToCart } = useCart();

    const products = [
        { id: 1, name: 'Coche de Bebé Compacto', price: 200 },
        { id: 2, name: 'Coche de Bebé Todo Terreno', price: 350 },
        { id: 3, name: 'Coche de Bebé Doble', price: 500 },
    ];

    return (
        <div>
            <h1>Productos</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;