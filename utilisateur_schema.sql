-- Create the table
CREATE TABLE `utilisateur` (
    `id_user` INT NOT NULL AUTO_INCREMENT,
    `nom_user` VARCHAR(100) NOT NULL,
    `prenom_user` VARCHAR(100) NOT NULL,
    `sex_user` ENUM('homme', 'femme') NOT NULL,
    `cin_user` VARCHAR(15) NOT NULL,
    `email_user` VARCHAR(255) NOT NULL,
    `login_user` VARCHAR(100) NOT NULL,
    `password_user` VARCHAR(255) NOT NULL,
    `role_user` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`id_user`)
);

-- Insert the given record
INSERT INTO `utilisateur` (`id_user`, `nom_user`, `prenom_user`, `sex_user`, `cin_user`, `email_user`, `login_user`, `password_user`, `role_user`) 
VALUES ('0', 'najwa', 'karrouchi', 'femme', '0', 'najwakarrouchi@gmail.com', 'nnnn', '58877615', 'utilisateur');

-- Create the table
CREATE TABLE services_utilisateur (
  id INT AUTO_INCREMENT PRIMARY KEY,
  sujet VARCHAR(255),
  prenom VARCHAR(255),
  nom VARCHAR(255),
  cin VARCHAR(255),
  numero_transaction VARCHAR(255),
  certificat_propriete_terre BOOLEAN,
  copie_piece_identite_fermier BOOLEAN,
  copie_piece_identite_nationale BOOLEAN,
  demande_but BOOLEAN,
  copie_contrat_location_terrain BOOLEAN,
  autres_documents BOOLEAN
);
-- Create the table
CREATE TABLE rapport (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  prenom VARCHAR(255) NOT NULL,
  cin VARCHAR(50) NOT NULL,
  sujet TEXT NOT NULL,
  surface DECIMAL(10, 2) NOT NULL,
  limites_terrain TEXT NOT NULL,
  localisation VARCHAR(255) NOT NULL,
  superficie_batiments_anciens DECIMAL(10, 2) NOT NULL,
  observations TEXT
);
