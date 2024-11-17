const { body, validationResult } = require('express-validator');

// Middleware para validação
exports.validateUser = [
  body('username').isString().notEmpty().withMessage('O nome de usuário é obrigatório.'),
  body('password').isLength({ min: 6 }).withMessage('A senha deve ter pelo menos 6 caracteres.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
