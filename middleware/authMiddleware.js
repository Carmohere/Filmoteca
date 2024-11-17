const jwt = require('jsonwebtoken');
const JWT_SECRET = 'sua_chave_secreta_aqui';

const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Formato: "Bearer TOKEN"

  if (!token) {
    return res.status(401).json({ message: 'Acesso negado, token ausente' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Anexa os dados do usuário ao req
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' });
  }
};

module.exports = authenticate;
