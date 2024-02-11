'use client';

import { redirect } from 'next/navigation';
import { useState } from 'react';

import Hint from './Hint';
import Question from './Question';

const QuestionDetail = ({ questions }: any) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const handleSelectOption = (selectedOption: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  return (
    <div className='flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      {!isQuizCompleted ? (
        <div className='max-w-md w-full space-y-8'>
          <p className='text-lg font-bold text-vani'>Q{currentQuestionIndex + 1}</p>
          <Question
            question={questions[currentQuestionIndex].content}
            options={questions[currentQuestionIndex].choices}
            onSelectOption={handleSelectOption}
            type={questions[currentQuestionIndex].type}
          />
          <Hint hint={questions[currentQuestionIndex].hint} question={questions[currentQuestionIndex].content} />
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      ) : (
        redirect('/completion')
      )}
    </div>
  );
};

export default QuestionDetail;
