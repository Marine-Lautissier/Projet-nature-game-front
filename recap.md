Branches :

-> master,

-> develop :
- feature/home-page (page d'accueil),
- feature/navbar,
- feature/wiki-page (dont catégorie, sous-catégorie, article),
- feature/game-page (quizz),
- feature/profile (dont connexion/déconnexion/création/modification),
- feature/footer (dont contact, mentions légales et conditions d'utilisations).



Composants :

- App :
- NavBar :
- HomePage -> TopPlayers ; RandomArticle,
- WikiPage -> CategoryList ; SubCategoryList ; WikiArticle,
- GamePage -> Quizz,
- UserProfileMenu :
- Registration,
- LoginForm,
- Profile : UpdateAvatar ; UpdateMail ; UpdatePassword ; DeleteAccount.
  
- Footer : Contact ; LegalNotice ; TermsOfUse,

Hooks : useDispatch et useSelector.

Store :
- actions,
- reducers,
- thunks.

Reducers :
- home,
- wiki,
- quizz,
- authentification.