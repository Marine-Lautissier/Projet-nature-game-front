import logo from '../../../assets/logo-site.png';

import './RandomArticle.scss'

// Fonction qui affiche l'article du jour dans la page principale d'accueil:
function RandomArticle() {
  return (
    <div className='article-day'>
      <h3>Article du jour</h3>
      <h2>La colombe</h2>
      <img src={logo} alt="Logo" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio facere
        doloremque soluta quasi dolorem ipsum perspiciatis adipisci
        exercitationem consectetur numquam velit, impedit deleniti maiores
        similique tempore, iure ipsa ut provident.
      </p>
    </div>
  );
}

export default RandomArticle;
