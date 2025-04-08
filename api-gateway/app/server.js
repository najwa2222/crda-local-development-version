const express = require('express');
const path = require('path');
const gateway = require('express-gateway');

const app = express();
const port = 8081; // Changer le port ici si nécessaire

// Servir les fichiers statiques depuis le répertoire 'app'
app.use(express.static(path.join(__dirname, 'app')));

// Charger et exécuter Express Gateway
gateway()
  .load(path.join(__dirname, 'config'))
  .run();

// Démarrer le serveur Express sur le port spécifié
app.listen(port, () => {
  console.log(`Static files server is running on port ${port}`);
});
