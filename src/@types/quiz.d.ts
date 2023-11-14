export interface Quiz {
  userResponse: any;
  question: string;
  correctAnswer: string;
  falseAnswer1: string;
  falseAnswer2: string;
  falseAnswer3: string;
  id: number;
  picture: {
    id: number;
    name: string;
    url: string;
  }
  question: string;
}