const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config/env');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ erro: 'Token não fornecido' });
    }

    const decoded = jwt.verify(token, jwtSecret);
    req.usuarioId = decoded.id;
    
    next();
  } catch (error) {
    return res.status(401).json({ erro: 'Token inválido' });
  }
};