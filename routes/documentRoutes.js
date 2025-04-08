const express = require('express');
const router = express.Router();
const documentController = require('../Controllers/documentController');

// Route pour récupérer tous les documents
router.get('/', documentController.getAllDocuments);

// Route pour créer un nouveau document
router.post('/', documentController.createDocument);

// Route pour mettre à jour un document existant
router.put('/:id', documentController.updateDocument);

// Route pour supprimer un document
router.delete('/:id', documentController.deleteDocument);

// Export des routes
module.exports = router;
