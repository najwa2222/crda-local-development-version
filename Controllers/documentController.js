const Document = require('../models/Document');

// Contrôleur pour créer un nouveau document
exports.createDocument = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newDocument = new Document({ title, content });
    await newDocument.save();
    res.status(201).json({ message: 'Document créé avec succès', document: newDocument });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création du document' });
  }
};

// Contrôleur pour récupérer tous les documents
exports.getAllDocuments = async (req, res) => {
  try {
    const documents = await Document.find();
    res.status(200).json(documents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des documents' });
  }
};

// Contrôleur pour récupérer un document par son ID
exports.getDocumentById = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document.findById(id);
    if (!document) {
      return res.status(404).json({ message: 'Document non trouvé' });
    }
    res.status(200).json(document);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération du document' });
  }
};

// Contrôleur pour mettre à jour un document
exports.updateDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedDocument = await Document.findByIdAndUpdate(id, { title, content }, { new: true });
    if (!updatedDocument) {
      return res.status(404).json({ message: 'Document non trouvé' });
    }
    res.status(200).json({ message: 'Document mis à jour avec succès', document: updatedDocument });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour du document' });
  }
};

// Contrôleur pour supprimer un document
exports.deleteDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDocument = await Document.findByIdAndDelete(id);
    if (!deletedDocument) {
      return res.status(404).json({ message: 'Document non trouvé' });
    }
    res.status(200).json({ message: 'Document supprimé avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la suppression du document' });
  }
};
