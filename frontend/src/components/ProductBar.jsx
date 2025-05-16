import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/ProductBar.module.css'; 
const ProductBar = ({ categories }) => {
    const [dropdownVisible, setDropdownVisible] = useState(null);

    const handleMouseEnter = (category) => {
        setDropdownVisible(category);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(null);
    };

    return (
        <nav className={styles.productBarNav}>  
            {categories.map((category) => (
                <div key={category.name} className={styles.productBarItem} onMouseEnter={() => handleMouseEnter(category.name)} onMouseLeave={handleMouseLeave}
                >
                    <NavLink to={`/category/${category.name}`} className={styles.productBarLink}>
                        {category.name}
                    </NavLink>
                    {dropdownVisible === category.name && (
                        <div className={styles.dropdown} >
                            {category.products.map((product) => (
                                <NavLink key={product.id} to={`/product/${product.id}`} className={styles.dropdownItem}>
                                    {product.name}
                                </NavLink>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </nav>
    );
};

export default ProductBar;