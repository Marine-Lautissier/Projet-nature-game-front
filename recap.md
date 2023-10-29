Branches :

-> master,

-> develop :
- feature/home-page (page d'accueil),
- feature/wiki (dont catégorie, sous-catégorie, article),
- feature/game (quizz),
- feature/profile (dont connexion/déconnexion/création/modification),
- feature/contact (formulaire de contact),
- feature/legal-notice_terms-of-use.



Composants :

- App :
- NavBar :
- Logo,
- HomePage -> TopPlayers ; RandomArticle,
- Wiki -> WikiCategory ; WikiSubCategory ; WikiArticle,
- Game -> Quizz,
- Registration,
- LoginForm,
  
- AppFooter : Contact ; LegalNotice ; TermsOfUse,
  
- Profile : UpdateAvatar ; UpdateMail ; UpdatePassword ; DeleteAccount.

Hooks : useDispatch et useSelector (pour les typer).

Store :
- actions,
- reducers,
- thunks.

Reducers :
- wiki,
- quizz.