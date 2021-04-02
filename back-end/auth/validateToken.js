const jwt = require('jsonwebtoken');

const secret = 'nossosegredo';

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return next(400, 'Token não encontrado ou informado');

  try {
    const decoded = jwt.verify(authorization, secret);
    req.user = decoded;

    next();
  } catch (_err) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

module.exports = validateToken;
