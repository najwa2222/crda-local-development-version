# Utilisez l'image officielle Node.js.
FROM node:14

# Créez et utilisez le répertoire de l'application.
WORKDIR /usr/src/app

# Copiez les fichiers de configuration de l'application.
COPY package*.json ./

# Installez les dépendances de l'application.
RUN npm install

# Copiez le reste des fichiers de l'application.
COPY . .

# Exposez le port sur lequel l'application s'exécute.
EXPOSE 3000

# Démarrez l'application.
CMD [ "npm", "start" ]
