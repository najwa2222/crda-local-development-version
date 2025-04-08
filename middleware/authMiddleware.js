const jwt = require('jsonwebtoken');
const User = require('../models/User');

async function authenticateUser(req, res, next) {
  // Récupérer le token d'authentification depuis le header Authorization
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Accès non autorisé. Token manquant.' });
  }

  try {
    // Vérifier et décoder le token JWT
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    
    // Vérifier si l'utilisateur associé au token existe
    const user = await User.findById(decodedToken.userId);
    if (!user) {
      return res.status(401).json({ message: 'Accès non autorisé. Utilisateur introuvable.' });
    }

    // Ajouter l'utilisateur authentifié à l'objet de requête
    req.user = user;
    
    // Appeler la prochaine fonction middleware dans la chaîne
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Accès non autorisé. Token invalide.' });
  }
}

module.exports = {
  authenticateUser
};
