# React + TypeScript + Vite

L’objectif est de créer un jeu de chasse au trésor.

Il faudra modéliser un champ avec une grille H x L et disposer le trésor dans une case de manière aléatoire.

Cela commencera par la sélection d’une case et donnera l’information suivante :

Si le trésor est trouvé, c’est gagné.
Si le trésor n’y est pas présent, alors un indice est donné : le nombre de cases entre la case sélectionnée et le trésor.
Il faudra comptabiliser le nombre d’essais pour donner le score final.

Ce qui nous intéresse n’est pas simplement de voir un programme tourner avec la meilleure IHM, mais surtout de comprendre :

Comment vous appréhendez un problème
Comment vous codez
Quels sont vos choix architecturaux
Comment vous présentez votre travail une fois réalisé.

## Installer Node.js

Assurez-vous que Node.js est installé sur votre machine. Vous pouvez vérifier avec les commandes suivantes dans le terminal :

node -v
npm -v

## Créer un projet avec Vite

npm create vite@latest treasure --template react-ts
cd treasure

## Étape 3 : Installer les dépendances

npm install
npm run dev
