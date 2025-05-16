const User = require('../models/User')
const jwt = require('jsonwebtoken')


const adminMiddleware = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]
    if (!token) {
        return res.status(401).json({ error: 'No se proporcionó un token de autenticación' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decoded.id)

        if (!user || !user.isAdmin) {
            return res.status(403).json({ error: 'Acceso denegado' })
        }

        req.user = user
        next()
    } catch (error) {
        return res.status(401).json({ error: 'Token inválido' })
    }
}

module.exports = {adminMiddleware}