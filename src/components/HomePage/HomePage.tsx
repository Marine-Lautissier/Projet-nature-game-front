import RandomArticle from './RandomArticle/RandomArticle';
import TopPlayers from './TopPlayers/TopPlayers';

function HomePage() {
  return (
    <div>
      <h1>Bienvenue sur natureGame</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
        excepturi repellendus eaque, nisi odio nesciunt expedita neque et. Quam
        vel sequi esse aliquam omnis perferendis inventore, exercitationem eos
        voluptates alias!
      </p>
      <TopPlayers />
      <RandomArticle />
    </div>
  );
}

export default HomePage;
