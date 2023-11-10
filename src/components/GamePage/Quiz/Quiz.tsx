import React, { useEffect } from "react";
import { Button, Segment } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import './Quiz.scss'
import { fetchQuizQuestion } from "../../../store/thunks/quiz";
import { clickNextQuestion, clickResponse } from '../../../store/actions/quizActions';
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";

function Quiz() {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchQuizQuestion());
  }, [dispatch]);

  const questions = useAppSelector((state) => state.quizReducer.quizData);
  console.log(questions);
  // const correctQuestion= questions.filter((question) => question.correct_answer === correctQuestion)
  // const firstCorrectQuestion = questions.find((question) => question.includes(question.correct_answer));

  return(
    <div className="quiz-container">
      <div className="title"><h1>QUIZZ</h1></div>
      {questions.map((question) => (
      <>
        <p key={question.id}>{question.question}</p>
        <img src="" alt="" />
        <Segment className="response-option">A</Segment>
          <Button className="response-button" type="submit" onClick={() => {dispatch(clickResponse())}}>{question.correct_answer}</Button>
        <Segment className="response-option">B</Segment>
          <Button className="response-button" type="submit" onClick={() => {dispatch(clickResponse())}}>{question.false_answer_1}</Button>
          <Segment className="response-option">C</Segment>
          <Button className="response-button" type="submit" onClick={() => {dispatch(clickResponse())}}>{question.false_answer_2}</Button>
          <Segment className="response-option">D</Segment>
          <Button className="response-button" type="submit" onClick={() => {dispatch(clickResponse())}}>{question.false_answer_3}</Button>
        </>
          ))}
          <br />
        <Segment>Score :</Segment>
      <br />
      <Button className="next-question" type="submit" onClick={() => {dispatch(clickNextQuestion())}}>Question suivante</Button>
    </div>
  );
};

export default Quiz;