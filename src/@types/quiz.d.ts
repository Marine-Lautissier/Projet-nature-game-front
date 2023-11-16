export interface Quiz {
  question: string;
  correct_answer: string;
  false_answer_1: string;
  false_answer_2: string;
  false_answer_3: string;
  id: number;
  picture: {
    id: number;
    name: string;
    url: string;
  }
  question: string;
}