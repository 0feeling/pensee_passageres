Pensées Passagères


Description:

Le projet Pensées Passagères est une application web qui permet aux utilisateurs d'ajouter, de conserver et de supprimer des pensées. L'application propose également une fonctionnalité pour télécharger les pensées conservées sous forme de fichier .txt. Les pensées sont soit "passagères" (qui disparaissent après un certain temps), soit "gardées" (qui peuvent être conservées indéfiniment).

L'interface est simple et intuitive, avec un formulaire pour ajouter des pensées et des boutons pour les gérer. Le but de ce projet est de créer un espace où les utilisateurs peuvent rapidement écrire et sauvegarder des pensées qui leur viennent à l'esprit.


Fonctionnalités:

Ajouter une pensée : Permet à l'utilisateur de saisir une pensée et de l'ajouter à la liste des pensées passagères.
Conserver une pensée : Permet de marquer une pensée comme "gardée", ce qui l'ajoute à la liste des pensées conservées.
Supprimer une pensée : Permet de supprimer une pensée des listes passagères ou gardées.
Télécharger les pensées gardées : Permet de télécharger un fichier .txt contenant toutes les pensées gardées.
Technologies utilisées
React : Pour la création des composants et la gestion de l'état.

Structure du projet:
Voici un aperçu de la structure des fichiers du projet :

/Pensées-Passagères
  ├── /public
  ├── /src
  │   ├── /components
  │   │   ├── AddThoughtForm.js  # Composant pour ajouter une nouvelle pensée
  │   │   ├── Thought.js         # Composant pour afficher une pensée
  │   │   └── DownloadSavedThoughts.js  # Composant pour télécharger les pensées gardées
  │   ├── App.js                 # Composant principal
  │   └── App.css                # Styles CSS de l'application
  └── package.json               # Dépendances et configuration du projet


  Installation:
  
1. Cloner le projet
Clonez le projet depuis GitHub en utilisant la commande suivante :

bash
Copier
Modifier
git clone https://github.com/ton-compte/Pensees-Passageres.git


2. Installer les dépendances
Accédez au dossier du projet et installez les dépendances avec npm :

bash
Copier
Modifier
cd Pensees-Passageres
npm install


3. Démarrer l'application
Une fois les dépendances installées, vous pouvez démarrer l'application en utilisant la commande suivante:

bash
Copier
Modifier
npm start
Cela ouvrira l'application dans votre navigateur à l'adresse http://localhost:3000.


Comment ça marche ?

Ajout d'une pensée:
L'utilisateur peut saisir une pensée dans le champ de texte et cliquer sur "Ajoutez" pour l'ajouter à la liste des pensées passagères.

Sauvegarde d'une pensée:
Une fois qu'une pensée est ajoutée, elle peut être marquée comme "gardée" en cliquant sur le bouton "Conserver". Les pensées gardées sont transférées dans la section des pensées gardées.

Suppression d'une pensée:
Les pensées, qu'elles soient passagères ou gardées, peuvent être supprimées en cliquant sur le bouton ✖ associé à chaque pensée.

Téléchargement des pensées gardées:
Les pensées gardées peuvent être téléchargées en cliquant sur le bouton "Télécharger les pensées gardées". Cela génère un fichier .txt contenant l'ID et le contenu de chaque pensée gardée.

Auteurs:
Timothée MEUNIER

License:
Ce projet est sous la licence MIT - voir le fichier LICENSE pour plus de détails.

useState et useEffect : Utilisés pour gérer les états de l'application et pour effectuer des actions périodiques, comme la suppression automatique des pensées passagères expirées.
CSS : Pour le style de l'application.
