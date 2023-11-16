import React, { useEffect } from 'react';
import { Button, Segment, Message, Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './Quiz.scss';
import { fetchQuizQuestion } from '../../../store/thunks/quiz';
import {
  clickResponse,
  setCurrentQuestionIndex,
  updateUserScore,
  completeQuiz,
} from '../../../store/actions/quizActions';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';

function Quiz() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuizQuestion());
  }, [dispatch]);

  // Sélection des données du Redux Store
  const questions = useAppSelector((state) => state.quizReducer.quizData);
  const currentQuestionIndex = useAppSelector(
    (state) => state.quizReducer.currentQuestionIndex
  );
  const quizCompleted = useAppSelector(
    (state) => state.quizReducer.quizCompleted
  );
  let QuizScore = useAppSelector((state) => state.quizReducer.userScore);

  // Sélection de la question actuelle
  const currentQuestion = questions[currentQuestionIndex];
  // quizLenght = questions.length;

  // Gestion du clic sur le bouton "Question suivante"
  const handleNextQuestionClick = () => {
    console.log(currentQuestionIndex);
    console.log(currentQuestionIndex >= questions.length - 1);
    if (currentQuestionIndex === questions.length - 1) {
      dispatch(completeQuiz());
    } else {
      dispatch(updateUserScore(QuizScore));
      dispatch(setCurrentQuestionIndex());
    }
  };
  // Gestion du clic sur une réponse
  const handleResponseClick = (answer: string) => {
    // Dispatch l'action avec la réponse et si elle est correcte
    dispatch(
      clickResponse({
        answer,
        isCorrect: answer === currentQuestion.correctAnswer,
      })
    );

    // Mise à jour du score
    if (answer === currentQuestion.correctAnswer) {
      QuizScore += 10;
    }
    console.log(QuizScore);
    handleNextQuestionClick();
  };

  const handleRestartGame = () => {
    window.location.reload();
    dispatch(updateUserScore(0));
  };

  // Fonction pour mélanger l'ordre des réponses de manière aléatoire
  const randomOrder = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz-container">
      <div className="title">
        <h1>QUIZZ</h1>
      </div>

      {/* Affichage de la question et des réponses si le quiz n'est pas terminé  */}
      {currentQuestion && !quizCompleted && (
        <>
          <div className="div_class">
            {/* Affichage de la question */}
            <Segment className="question">
              <p>{currentQuestion.question}</p>
              {currentQuestion.pictures[0]?.url ? (
                <img className='img-quiz'
                  src={currentQuestion.pictures[0].url}
                  alt={currentQuestion.question}
                />
              ) : null}
            </Segment>
          </div>
          <div className="div_responses">
            {/* Mélange aléatoire des réponses et affichage */}
            {randomOrder([
              currentQuestion.correctAnswer,
              currentQuestion.falseAnswer1,
              currentQuestion.falseAnswer2,
              currentQuestion.falseAnswer3,
            ]).map((answer, index) => (
              <div key={index}>
                {/* Bouton de réponse */}

                <Card onClick={() => handleResponseClick(answer)}>
                  <Card.Content>
                    <Card.Header>
                      {`${String.fromCharCode(65 + index)}`}
                    </Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <div className="ui two buttons">
                      <Button basic color="green">
                      {answer}
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Affichage du score si le quiz est terminé */}
      {quizCompleted && (
        <Message positive>
          Félicitations !<br />
          <br /> Super travail ! Tu as réussi à compléter le Quiz avec succès !
          <br />
          Tu as répondu à toutes les questions de manière fantastique et
          démontré une connaissance impressionnante.
          <br />
          Continue à nourrir ta curiosité et à explorer de nouveaux sujets.
          <br />
          <br />
          Encore une fois, toutes nos félicitations pour cette performance
          exceptionnelle !
          <br />
          <br />
          Voici ton score : <p>{QuizScore}</p>
          <Button onClick={() => handleRestartGame()}>
            Relancer la partie
          </Button>
        </Message>
      )}
    </div>
  );
}

export default Quiz;