// userController.js

// Importer le modèle utilisateur si nécessaire
const User = require('../models/User');

// Méthode pour s'inscrire en tant qu'utilisateur
exports.register = async (req, res) => {
  try {
    // Logique pour créer un nouvel utilisateur avec les données de la requête
    // Assurez-vous de valider les données d'entrée avant de les utiliser
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de l\'inscription de l\'utilisateur' });
  }
};

// Méthode pour connecter un utilisateur
exports.login =async (req, res) => {
  try {
    // Logique pour créer un nouvel utilisateur avec les données de la requête
    // Assurez-vous de valider les données d'entrée avant de les utiliser
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de l\'inscription de l\'utilisateur' });
  }
};
