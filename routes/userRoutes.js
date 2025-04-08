const express = require('express');
const router = express.Router();

// Importez le contrôleur d'utilisateur
const userController = require('../controllers/userController');

// Définir les routes pour les utilisateurs
router.post('/enregister', userController.register);

// Exporter le routeur
module.exports = router;
