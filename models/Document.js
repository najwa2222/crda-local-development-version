const { Sequelize, DataTypes } = require('sequelize');

// Création d'une instance de Sequelize pour se connecter à la base de données MySQL
const sequelize = new Sequelize('base_crda', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// Définition du modèle de document
const Document = sequelize.define('Document', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
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
    console.log('La table Document a été créée avec succès.');
  })
  .catch((error) => {
    console.error('Erreur lors de la création de la table Document :', error);
  });

module.exports = Document;
