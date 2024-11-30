const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/authController'); // Ajuste o caminho se necessário

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Endpoints para autenticação e registro de usuários
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registra um novo usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Nome do usuário
 *               password:
 *                 type: string
 *                 description: Senha do usuário
 *             required:
 *               - username
 *               - password
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *       400:
 *         description: Erro nos dados fornecidos ou usuário já existe
 *       500:
 *         description: Erro interno do servidor
 */
router.post(
  '/register',
  [
    body('username').notEmpty().withMessage('O nome de usuário é obrigatório'),
    body('password').isLength({ min: 6 }).withMessage('A senha deve ter pelo menos 6 caracteres'),
  ],
  authController.register
);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Faz login de um usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Nome do usuário
 *               password:
 *                 type: string
 *                 description: Senha do usuário
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: Login bem-sucedido com token JWT
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 token:
 *                   type: string
 *       400:
 *         description: Credenciais inválidas
 *       500:
 *         description: Erro interno do servidor
 */
router.post(
  '/login',
  [
    body('username').notEmpty().withMessage('O nome de usuário é obrigatório'),
    body('password').notEmpty().withMessage('A senha é obrigatória'),
  ],
  authController.login
);

module.exports = router;
