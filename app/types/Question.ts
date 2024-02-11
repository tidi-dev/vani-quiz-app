interface Question {
  id: string;
  content: string;
  hint: string;
  type: string;
  choices: {
    id: string;
    answer: string;
  }[];
}
