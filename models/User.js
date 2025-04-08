const { Sequelize, DataTypes } = require('sequelize');

// Création d'une instance de Sequelize pour se connecter à la base de données MySQL
const sequelize = new Sequelize('base_crda', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// Définition du modèle d'utilisateur
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
});

// Synchroniser le modèle avec la base de données
sequelize.sync()
  .then(() => {
    console.log('La table User a été créée avec succès.');
  })
  .catch((error) => {
    console.error('Erreur lors de la création de la table User :', error);
  });

module.exports = User;
