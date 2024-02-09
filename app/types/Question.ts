interface Question {
  id: string;
  content: string;
  hint: string;
  type: 'single_choice' | 'multiple_choice';
  choicesquestion: {
    records: Choice[];
  };
}
