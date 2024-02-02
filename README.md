# 🐞  Bienvenue sur ce projet du nom de NatureGame !  🌹  
<br/>

Sur ce Repository vous trouverez le code réalisé côté front-end pour ce projet d'équipe.  <img width="90" height="90" align="right" src="https://github.com/Marine-Lautissier/Projet-nature-game-front/assets/132015773/b0d6530d-2114-459d-b11d-e48691f9f123"/>  
<br/>
<br/>

## En quoi consiste-t-il ❔  

Le projet NatureGame a vu le jour afin de permettre à toute personne le souhaitant d'en apprendre plus sur l'environnement.  
En effet, nous pensons que pour protéger la nature qui nous entoure, il faut d'abord prendre le temps de la connaître et de la comprendre.  
Notre équipe a alors réalisé cette application permettant aux utilisateurs qui souhaitent en apprendre plus sur la nature, tout en se distrayant, de participer à des jeux de type quiz.  
Cette application est alimentée d'un quiz contenant des questions et des images associées à quatre réponses aléatoires dont une est la bonne. Ainsi qu'une page d'accueil Wiki afin de favoriser l'accès aux utilisateurs aux informations figurant dans les articles du Wiki qui sont également présentes dans le quiz.  
<br/>

## Sommaire :  

1. Description & méthodologie de travail,
2. Installation,
3. Technologies utilisées côté front-end,
4. Technologies utilisées côté back-end,
5. Arborescence des fichiers côté front-end,
6. Fonctionnalités,
7. L'équipe du projet.  
<br/>

## 1. Description & méthodologie de travail :  

A l'issue de notre formation, nous avons dû créer une application en équipe, sur une période de quatre semaines, tout en respectant la méthode Agile **SCRUM**.  

Afin de respecter la méthode Agile **SCRUM** :  

- Nous avons réalisé **4 sprints**, chaque sprint correspondait à une semaine de travail :

| Sprint 0       | Sprint 1       | Sprint 2       | Sprint 3       |
| :------:       | :------:       | :------:       | :------:       |
| Définition des bases du projet ainsi que son organisation et sa structure.       | Première semaine de développement.       | Deuxième semaine de développement.       | Finalisation du projet.       |
| Réalisation d'User Stories, de Wireframes, du cahier des charges etc.       | Installation des packages nécessaires + codage des premières fonctionnalités de façon statique.       | Codage de la suite des fonctionnalités de façon dynamique et responsive.       | Finalisation des fonctionnalités en cours, correction des éventuels bugs existants, nettoyage du code etc.       |  

- Nous avons également effectué tous les matins des **Dailys Scrums** durant entre 10 et 15 minutes.  
Ces Dailys Scrums nous ont permis de faire le point sur le code réalisé la veille, les éventuels problèmes rencontrés la veille, résolus ou en cours de résolution, et ce que nous comptions faire dans la journée.  

Pour la réalisation du projet, nous avons travaillé sur deux repositories distincts, l'un était dédié à la partie front-end
(React) du projet, l'autre était dédié à la partie back-end (Symfony) du projet.

Pour l'organisation de notre travail, nous nous sommes servis de plusieurs branches :  
→ une branche **master**, qui est la branche principale du projet et qui doit rester "propre" tout au long de la réalisation du projet, c'est
elle qui accueille le code prêt pour une mise en production,  
→ une branche **develop**, qui est la branche de développement, c'est sur cette branche
que nous avons fusionné nos branches features une fois les fonctionnalités
terminées sur ces dernières,  
→ plusieurs branches nommées **features/nom-de-la-feature**, c'est sur ces branches
que nous avons codé toutes nos fonctionnalités, réalisé des commits et des pushs.  

***Sur ce Repository, seule la branche develop est visible.***  

<br/>  

## 2. Installation :  
> **Attention, ce projet a été réalisé sur un modèle Vite appartenant à l'école auprès de laquelle nous avons effectué notre formation, donc après l'installation du projet, si vous utilisez la commande `yarn dev` pour lancer le projet en Localhost, cela ne fonctionnera pas !**  
> Merci de votre compréhension. 🙏  

**Cloner le Dépôt**  
```bash
git clone https://github.com/Marine-Lautissier/Projet-nature-game-front.git
```  

**Accéder au Répertoire du Projet**
```bash
cd votre-projet
```

**Installer les Dépendances**
```bash
yarn add redux react-redux @reduxjs/toolkit
```
```bash
yarn add react-router-dom
```
```bash
yarn add axios
```
```bash
yarn add semantic-ui-react semantic-ui-css
```  

**Lancer le projet en Localhost**

```bash
yarn dev
```
<br/>  

## 3. Technologies utilisées côté front-end :  

**Langages :**

- JavaScript,
- TypeScript,
- JSX,
- SCSS.

**Framework/Bibliothèque :**

- REACT (qui est une bibliothèque pour certains, un framework pour d'autres),
- Redux,
- Redux-Toolkit,
- React-Redux,
- Semantic-UI-React,
- Axios.

**Gestionnaire de packages :**

- Yarn.

**Packages :**

- React-DOM.

**Build Tool :**

- Vite.

**Point d'entrée de l'application :**

- index.html.
<br/>

## 4. Technologies utilisées côté back-end :  

**Langages :**

- PHP,
- SQL.

**Framework/Bibliothèque :**

- Symfony,
- Doctrine ORM,
- Bootstrap.

**Moteur de templates :**
- Twig.

**Système et outil de gestion de base de données relationnelle open-source :**
- MariaDB,
- Adminer.

**Gestionnaire de packages :**

- Composer.

**Point d'entrée de l'application :**

- index.php.
<br/>

## 5. Arborescence des fichiers côté front-end :  

**.vscode/ :** Contient les fichiers `extensions.json` et `settings.json` qui répertorie les différentes extensions de fichiers prises en charge par le projet et qui contient les paramètres de configuration spécifiques au projet.  

**public/ :** Contient les logos du modèle vite.  

**src/ :** Contient les sous-dossiers :  
- **@types/ :** Contient toutes nos interfaces utilisées pour typer nos objets;  
- **assets/ :** Contient le logo de notre application;  
- **components/ :** Contient tous nos composants utiles pour notre application;  
- **hooks/ :** Contient le fichier `redux.ts` qui nous sert à typer nos Hooks de react-redux ***useDispatch*** et ***useSelector***.  
- **store/ :** Contient les sous-dossiers :  
  - **actions/ :** Contient toutes nos actions qui sont des fonctions qui renvoient un objet action et qui vont permettre de décrire l'action souhaitée en vue de la mise à jour du state.  
  - **reducer/ :** Contient tous nos reduceurs qui sont des fonctions qui prennent en paramètre le state actuel et l'action souhaitée afin de permettre la mise à jour du state.  
  - **thunks/ :** Contient tous nos thunks qui sont des fonctions qui sont exectuées à chaque dispatch avant que l'action n'arrive au reducer. C'est dans nos thunks que l'on écrit nos appels API à l'aide de la bibliothèque Axios.  
                Contient le fichier :  
  - `store.ts` : qui contient notre store qui est le "conteneur de state global" et qui possède nos reducers dans un objet.  
- **styles/ :** Contient les fichers SCSS suivants : `_reset.scss`, `_variables.scss`, `index.scss`;  
- **utils/ :** Contient le fichier `axios.ts` qui contient notre instance Axios nous permettant ainsi d'éviter de noter en totalité l'adresse URL dans nos requêtes API;  

**.gitignore :** Fichier de configuration de Git qui permet de ne pas envoyer des données sensibles de certains dossiers/fichiers sur la Plateforme Github.
  
**Ainsi que d'autres fichiers de configuration pour yarn, vite, TypeScript etc.**  
  <br/>

## 6. Fonctionnalités :  

L'application comporte les fonctionnalités suivantes :  

- La page **"Accueil"** contenant un **Article random**;  
- La page **"Jeux"** contenant les **catégories**, **sous-catégories** et les **articles**;  
- La page **"Wiki"** contenant le **quiz**;  
- Les formulaires **"Se connecter"**, **"S'inscrire"** et **"Accéder au profil"**;  
- La page **"Conditions d'utilisations"**;  
- La page **"Mentions Légales"**;  
- Le formulaire **"Contact"**.  

Arborescence de l'application :  

![Arborescence de l'application](https://github.com/Marine-Lautissier/Projet-nature-game-front/assets/132015773/fd61d2d1-d110-4d3d-b13f-7f29c92a9878)  

<br/>

## 7. L'équipe du projet :

Notre équipe se compose de cinq personnes :  

**Trois personnes se sont occupées de la partie Back-end du projet :**    

- [@Nicolas](https://github.com/NicolasVanHoove),
- [@Lola](https://github.com/Lola-Castan),
- [@Rosa](https://github.com/RosaBen).

**Deux personnes se sont occupées de la partie Front-end=== du projet :**

- [@Ismael](https://github.com/ismaelbella),
- Marine (moi-même).  

Je tiens à remercier ces personnes qui ont su être professionnelles, solidaires, tolérantes et bienveillantes. Ce fut un réel plaisir de réaliser cette application avec elles ! 😸  
