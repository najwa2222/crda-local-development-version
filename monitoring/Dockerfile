# Utilisation d'une image Node.js comme base
FROM node:14

# Définition du répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copie des fichiers de configuration du service de surveillance
COPY package*.json ./
COPY index.js ./

# Installation des dépendances
RUN npm install

# Commande pour démarrer le service
CMD ["node", "index.js"]
