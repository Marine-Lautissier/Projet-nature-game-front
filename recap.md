Branches :

-> master,

-> develop :
- feature/home-page (page d'accueil),
- feature/navbar,
- feature/wiki-page (dont catégorie, sous-catégorie, article),
- feature/game-page (quizz),
- feature/profile (dont connexion/déconnexion/création/modification),
- feature/contact (formulaire de contact),
- feature/legal-notice_terms-of-use.



Composants :

- App :
- NavBar :
- Logo,
- HomePage -> TopPlayers ; RandomArticle,
- WikiPage -> WikiCategory ; WikiSubCategory ; WikiArticle,
- GamePage -> Quizz,
- UserProfileMenu :
- Registration,
- LoginForm,
- Profile : UpdateAvatar ; UpdateMail ; UpdatePassword ; DeleteAccount.
  
- AppFooter : Contact ; LegalNotice ; TermsOfUse,

Hooks : useDispatch et useSelector (pour les typer).

Store :
- actions,
- reducers,
- thunks.

Reducers :
- wiki,
- quizz.