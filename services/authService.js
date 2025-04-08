const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function authenticationUser(username, password) {
  // Vérifier si l'utilisateur existe
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error('Utilisateur non trouvé');
  }

  // Vérifier si le mot de passe est correct
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new Error('Mot de passe incorrect');
  }

  // Générer un jeton JWT
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
  return token;
}

module.exports = {
  authenticationUser
};
