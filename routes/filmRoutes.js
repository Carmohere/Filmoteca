const express = require('express');
const router = express.Router();
const filmController = require('../controllers/filmController');
const authenticate = require('../middleware/authMiddleware'); // Importa o middleware de autenticação

/**
 * @swagger
 * /films:
 *   get:
 *     summary: "Obter todos os filmes"
 *     description: "Retorna uma lista de todos os filmes no catálogo."
 *     responses:
 *       200:
 *         description: "Lista de filmes"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                   genre:
 *                     type: string
 *                   year:
 *                     type: integer
 *                   description:
 *                     type: string
 *       500:
 *         description: "Erro interno"
 */
router.get('/', filmController.getFilms); // Rota pública para listar filmes

/**
 * @swagger
 * /films/{id}:
 *   get:
 *     summary: "Obter um filme específico"
 *     description: "Retorna os detalhes de um filme pelo ID."
 *     parameters:
 *       - name: "id"
 *         in: "path"
 *         required: true
 *         description: "ID do filme"
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: "Detalhes do filme"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                 genre:
 *                   type: string
 *                 year:
 *                   type: integer
 *                 description:
 *                   type: string
 *       404:
 *         description: "Filme não encontrado"
 *       500:
 *         description: "Erro interno"
 */
router.get('/:id', filmController.getFilm); // Rota pública para obter um filme pelo ID

/**
 * @swagger
 * /films:
 *   post:
 *     summary: "Criar um novo filme"
 *     description: "Adiciona um novo filme ao catálogo."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               genre:
 *                 type: string
 *               year:
 *                 type: integer
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: "Filme criado com sucesso"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                 genre:
 *                   type: string
 *                 year:
 *                   type: integer
 *                 description:
 *                   type: string
 *       400:
 *         description: "Dados inválidos"
 *       500:
 *         description: "Erro interno"
 */
router.post('/', authenticate, filmController.createFilm); // Rota protegida para criar filme

/**
 * @swagger
 * /films/{id}:
 *   put:
 *     summary: "Atualizar um filme"
 *     description: "Atualiza os dados de um filme existente."
 *     parameters:
 *       - name: "id"
 *         in: "path"
 *         required: true
 *         description: "ID do filme"
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               genre:
 *                 type: string
 *               year:
 *                 type: integer
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: "Filme atualizado com sucesso"
 *       400:
 *         description: "Dados inválidos"
 *       404:
 *         description: "Filme não encontrado"
 *       500:
 *         description: "Erro interno"
 */
router.put('/:id', authenticate, filmController.updateFilm); // Rota protegida para atualizar filme

/**
 * @swagger
 * /films/{id}:
 *   delete:
 *     summary: "Deletar um filme"
 *     description: "Remove um filme do catálogo pelo ID."
 *     parameters:
 *       - name: "id"
 *         in: "path"
 *         required: true
 *         description: "ID do filme"
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: "Filme deletado com sucesso"
 *       404:
 *         description: "Filme não encontrado"
 *       500:
 *         description: "Erro interno"
 */
router.delete('/:id', authenticate, filmController.deleteFilm); // Rota protegida para deletar filme

module.exports = router;
