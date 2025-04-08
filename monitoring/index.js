const express = require('express');
const app = express();
const PORT = process.env.PORT || 4200;

app.get('/', (req, res) => {
  res.send('Service de surveillance en cours d\'exécution !');
});

// Autres routes et logique de surveillance

app.listen(PORT, () => {
  console.log(`Le service de surveillance écoute sur le port ${PORT}`);
});
