import { NavLink } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import './GamePage.scss';

function GamePage() {
  return (
    <div className='game-page'>
      <h1>Accueil Jeux</h1>
      <h2>Quizz</h2>
      <h3>Description</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis
        beatae nemo asperiores a sapiente soluta molestiae itaque distinctio
        deserunt consequatur eligendi modi minima quo, quos eveniet tempore
        eius! Voluptatibus.
      </p>
      <h3>Règles</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nesciunt nam tempore.
        Molestiae est hic omnis soluta, impedit assumenda similique ipsa minus odio iste voluptates eum quis nam adipisci unde?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores odit dolor atque distinctio magnam optio mollitia nemo a esse exercitationem? Voluptatibus numquam voluptatem possimus molestiae in nobis mollitia, quidem qui.</p>
      <Button><NavLink className='button-navlink' to={'/jeux/quiz'}>Lancer la partie</NavLink></Button>

      <Table celled>

        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Classements</Table.HeaderCell>
            <Table.HeaderCell>Joueurs</Table.HeaderCell>
            <Table.HeaderCell>Scores</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Nicolas</Table.Cell>
            <Table.Cell>100</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>Lola</Table.Cell>
            <Table.Cell>80</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>Ismael</Table.Cell>
            <Table.Cell>79</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>Rosa</Table.Cell>
            <Table.Cell>60</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>Marine</Table.Cell>
            <Table.Cell>40</Table.Cell>
          </Table.Row>
        </Table.Body>

      </Table>
    </div>
  );
}

export default GamePage;
