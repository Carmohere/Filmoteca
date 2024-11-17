const express = require('express');
const { body } = require('express-validator');
const { register, login } = require('../controllers/authController');

const router = express.Router();

// Rota de Registro
router.post(
  '/register',
  [
    body('username').notEmpty().withMessage('O nome de usuário é obrigatório'),
    body('password').isLength({ min: 6 }).withMessage('A senha deve ter pelo menos 6 caracteres'),
  ],
  register
);

// Rota de Login
router.post(
  '/login',
  [
    body('username').notEmpty().withMessage('O nome de usuário é obrigatório'),
    body('password').notEmpty().withMessage('A senha é obrigatória'),
  ],
  login
);

module.exports = router;
