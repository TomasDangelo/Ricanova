import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Mensaje enviado. Nos pondremos en contacto contigo pronto.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div>
            <h1>Contacto</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
                <input type="email" placeholder="Correo Electrónico" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
                <textarea placeholder="Mensaje" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contact;