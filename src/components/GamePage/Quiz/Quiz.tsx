import React, { useEffect } from "react";
import { Button, Segment } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import './Quiz.scss'
import { fetchQuizQuestion } from "../../../store/thunks/quiz";
import { clickResponse, setCurrentQuestionIndex, updateUserScore } from '../../../store/actions/quizActions';
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";

function Quiz() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuizQuestion());
  }, [dispatch]);



  // Sélection des données du Redux Store
  const questions = useAppSelector((state) => state.quizReducer.quizData);
  console.log(questions);
  const currentQuestionIndex = useAppSelector((state) => state.quizReducer.currentQuestionIndex);
  const quizCompleted = useAppSelector((state) => state.quizReducer.quizCompleted);
  let QuizScore = useAppSelector((state) => state.quizReducer.userScore);

  // Sélection de la question actuelle
  const currentQuestion = questions[currentQuestionIndex];
  console.log(currentQuestion);


  // Gestion du clic sur une réponse
  const handleResponseClick = (answer: string) => {
    // Dispatch l'action avec la réponse et si elle est correcte
    dispatch(clickResponse({ answer, isCorrect: answer === currentQuestion.correctAnswer }));

    // Mise à jour du score
    if (answer === currentQuestion.correctAnswer) {
      QuizScore += 10;
    }
    console.log(QuizScore);
  };

  // Gestion du clic sur le bouton "Question suivante"
  const handleNextQuestionClick = () => {
    dispatch(updateUserScore(QuizScore));
    dispatch(setCurrentQuestionIndex());
  };

  // Fonction pour mélanger l'ordre des réponses de manière aléatoire
  const randomOrder = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz-container">
      <div className="title"><h1>QUIZZ</h1></div>

      {/* Affichage de la question et des réponses si le quiz n'est pas terminé  */}
      {currentQuestion && !quizCompleted && (
        <>
          {/* Affichage de la question */}
          <Segment className="question">{currentQuestion.question}</Segment>

          {/* Mélange aléatoire des réponses et affichage */}
          {randomOrder([
            currentQuestion.correctAnswer,
            currentQuestion.falseAnswer1,
            currentQuestion.falseAnswer2,
            currentQuestion.falseAnswer3,
          ]).map((answer, index) => (
            <div key={index}>
              {/* Affichage de la lettre correspondante à la réponse (A, B, C, D) */}
              <Segment className="response-option">{String.fromCharCode(65 + index)}</Segment>

              {/* Bouton de réponse */}
              <Button
                className="response-button"
                type="submit"
                onClick={() => handleResponseClick(answer)}
              >
                {answer}
              </Button>
            </div>
          ))}

          <br />
          <Button className="next-question" type="submit" onClick={handleNextQuestionClick}>
            Question suivante
          </Button>
        </>
      )}



      {/* Affichage du score si le quiz est terminé*/}
      {!quizCompleted && (
        <>
          <Segment>
            Score : {QuizScore}
          </Segment>
          <Button>Relancer la partie</Button>
        </>
      )}
    </div>
  );
}

export default Quiz;
