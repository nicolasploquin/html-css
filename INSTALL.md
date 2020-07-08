# Installation de l'environnement

## Téléchargements

- Visual Studio Code : [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Node.js : [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

## Configuration du serveur de développement

1. Ajouter le chemin vers les modules Node.js dans le path
    - Modifier les variables d'environnement -> Variables système -> Path
    - Ajouter `C:\Users\<utilisateur>\AppData\Roaming\npm`

2. Autoriser l'exécution des modules npm
    - Ouvrir une console PowerShell
    - Exécuter `Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope LocalMachine`

3. Installer le serveur JavaScript **live-server**
    - Exécuter dans la console PowerShell `npm install --global live-server`

## Création du projet

- Créer un dossier
- Ouvrir ce dossier dans Visual Studio Code
- Créer un nouveau fichier **index.html**
- Ouvrir un terminal **Terminal -> Nouveau terminal**
- Démarrer le serveur `live-server --port=80`
