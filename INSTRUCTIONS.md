# 🚀 Guide de déploiement du Portfolio Next.js

Ce document décrit toutes les étapes pour développer, builder et déployer ton portfolio sur OVH.

---

## 1. Lancer le serveur en local

Utilise cette commande pour démarrer le serveur de développement :

npm run dev

Le site sera accessible ici :
http://localhost:3000

---

## 2. Générer le build de production

Commande :

npm run build

Résultat :
- Un dossier "out/" est créé à la racine du projet.
- Ce dossier contient la version statique (HTML, CSS, JS) de ton site, prête à être publiée.

---

## 3. Déployer sur OVH via FileZilla

### Connexion FTP
Ouvre FileZilla et connecte-toi avec les informations OVH :
- Hôte : ftp.votredomaine.com ou ftp.cluster0XX.ovh.net
- Identifiant : fourni par OVH
- Mot de passe : celui de ton compte FTP
- Port : 21

---

## 4. Publier le site

1. Supprime l’ancien contenu du dossier "www/"
2. Copie tout le contenu du dossier "out/" (⚠️ pas le dossier "out" lui-même, uniquement ses fichiers)
3. Vérifie que tu as bien dans "www/" des fichiers comme :

index.html
favicon.ico
_next/
assets/