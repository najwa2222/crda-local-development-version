const Document = require('../models/Document');

async function getAllDocuments() {
  // Récupérer tous les documents depuis la base de données
  const documents = await Document.find();
  return documents;
}

async function createDocument(data) {
  // Créer un nouveau document dans la base de données
  const document = await Document.create(data);
  return document;
}

async function updateDocument(id, data) {
  // Mettre à jour un document existant dans la base de données
  const updatedDocument = await Document.findByIdAndUpdate(id, data, { new: true });
  return updatedDocument;
}

async function deleteDocument(id) {
  // Supprimer un document de la base de données
  await Document.findByIdAndDelete(id);
}

module.exports = {
  getAllDocuments,
  createDocument,
  updateDocument,
  deleteDocument
};
