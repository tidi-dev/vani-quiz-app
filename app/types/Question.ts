interface Question {
  id: number;
  content: string;
  hint: string;
  type: string;
  choices: {
    id: string;
    answer: string;
  }[];
}
