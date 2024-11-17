const jwt = require('jsonwebtoken');
const JWT_SECRET = 'sua_chave_secreta_aqui';

const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Acesso negado, token ausente' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' });
  }
};

module.exports = authenticate;
