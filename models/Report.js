const { Sequelize, DataTypes } = require('sequelize');

// Create a Sequelize instance for MySQL connection
const sequelize = new Sequelize('base_crda', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// Define the Report model
const Report = sequelize.define('Report', {
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cin: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sujet: {
    type: DataTypes.STRING,
    allowNull: false
  },
  surface: {
    type: DataTypes.STRING,
    allowNull: false
  },
  limites_terrain: {
    type: DataTypes.STRING,
    allowNull: false
  },
  localisation: {
    type: DataTypes.STRING,
    allowNull: false
  },
  superficie_batiments_anciens: {
    type: DataTypes.STRING,
    allowNull: true
  },
  observations: {
    type: DataTypes.STRING,
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
});

// Sync model with the database
sequelize.sync()
  .then(() => {
    console.log('Report table created successfully.');
  })
  .catch((error) => {
    console.error('Error creating report table:', error);
  });

module.exports = Report;
