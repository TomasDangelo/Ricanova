import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';
const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Mensaje enviado. Nos pondremos en contacto contigo pronto.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className={styles.contactContainer}>
            <h1>Contacto</h1>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <input className={styles.contactInputs} type="text" placeholder="Nombre" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
                <input className={styles.contactInputs} type="email" placeholder="Correo Electrónico" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
                <textarea className={styles.contactInputs} placeholder="Mensaje" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contact;