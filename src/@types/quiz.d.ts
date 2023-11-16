export interface Quiz {
  question: string;
  correctAnswer: string;
  falseAnswer1: string;
  falseAnswer2: string;
  falseAnswer3: string;
  id: number;
  pictures: {
    id: number;
    name: string;
    url: string;
  }
}