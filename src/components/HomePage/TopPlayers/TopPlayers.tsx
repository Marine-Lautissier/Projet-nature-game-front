import './TopPlayers.scss';

// Fonction qui affiche le top 10 des joueurs dans la page principale d'accueil:
function TopPlayers() {
  return (
    <div className='list-top-players'>
      <h2>Top 10 joueurs</h2>
      <ul>
        <li>Nicolas</li>
        <li>Rosa</li>
        <li>Ismael</li>
        <li>Josette</li>
        <li>Marine</li>
        <li>Bernard</li>
        <li>Marine</li>
        <li>Ginette</li>
        <li>Lola</li>
        <li>Lulu</li>
      </ul>
    </div>
  );
}

export default TopPlayers;
