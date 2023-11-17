import './HomePage.scss';

import RandomArticle from './RandomArticle/RandomArticle';
import TopPlayers from './TopPlayers/TopPlayers';

// Fonction qui représente la page principale d'accueil:
function HomePage() {
  return (
    <div>
      <h1>Bienvenue sur natureGame</h1>
      <p className='text-homepage'>
      Bienvenue sur NatureGame, où l'exploration de la nature locale rencontre le frisson de l'apprentissage ! Plongez dans nos quiz interactifs conçus pour tous les âges, testant et élargissant vos connaissances sur le monde qui vous entoure. Ce qui distingue NatureGame, c'est l'intégration d'un Wiki étendu - un trésor d'informations détaillées qui vous attend après chaque quiz. Découvrez les secrets de la flore, de la faune et des champignons locaux et suivez votre parcours d'apprentissage en créant un compte pour suivre votre progression. Que vous soyez un passionné de la nature chevronné ou que vous commenciez tout juste à vous connecter avec l'environnement, NatureGame offre une aventure éducative et plaisante. Rejoignez-nous pour redécouvrir la beauté qui vous entoure et favoriser une connexion plus profonde avec le monde naturel. Lancez-vous dans votre aventure NatureGame dès aujourd'hui et partez à la découverte de l'exploration et de l'apprentissage !
      </p>
      {/* <TopPlayers /> */}
      <RandomArticle />
    </div>
  );
}

export default HomePage;
