const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const exists = await User.findOne({ email });

    if(exists) {
        res.status(401).json({error: "El email ya esta registrado, por favor intente con otro."})
        return
    } 
    const user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: "Usuario creado correctamente", token: generateToken(user) });
  } catch (err) {
    res.status(400).json({ error: 'Error al registrar usuario' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({ message: "Autenticación exitosa!", token: generateToken(user) });
    } else {
      res.status(401).json({ error: 'Credenciales inválidas' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

module.exports = {
    register,
    login,
    generateToken,
}