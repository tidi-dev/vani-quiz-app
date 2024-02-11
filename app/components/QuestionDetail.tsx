'use client';

import { redirect } from 'next/navigation';
import { useState } from 'react';

import { useSelector } from 'react-redux';
import { resetAnswer, selectAnswer, selectQuestionId } from '../../redux/features/answerSlice';
import { useAppDispatch } from '../../redux/hooks';
import { useCheckAnswerMutation } from '../../redux/services/userApi';
import Hint from './Hint';
import Question from './Question';

const QuestionDetail = ({ questions }: any) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState<{ is_correct: boolean; correct_answer: string[] } | null>(null);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [checkAnswer, { isSuccess, isError, error }] = useCheckAnswerMutation();

  if (isError) {
    redirect('/auth');
  }

  const answer = useSelector(selectAnswer);
  const questionId = useSelector(selectQuestionId);

  const dispatch = useAppDispatch();

  const handleSelectOption = async (questionId: string, answer: string[]) => {
    setCorrectAnswer(null);
  };

  const handleSubmitQuestion = async () => {
    const { data } = await checkAnswer({ id: questionId, answer });
    setCorrectAnswer(data);
  };

  const handleNextQuestion = () => {
    dispatch(resetAnswer());
    setCorrectAnswer(null);
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
            question={questions[currentQuestionIndex]}
            onSelectOption={handleSelectOption}
            correctedAnswer={correctAnswer}
          />
          <Hint hint={questions[currentQuestionIndex].hint} question={questions[currentQuestionIndex].content} />
          <div className='flex items-center justify-between'>
            {questionId && (
              <button
                className='inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                onClick={handleSubmitQuestion}
              >
                Submit
              </button>
            )}
            {correctAnswer && correctAnswer.is_correct && (
              <button
                className='inline-flex items-center rounded-md bg-vani px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-vani'
                onClick={handleNextQuestion}
              >
                Next
              </button>
            )}
          </div>
        </div>
      ) : (
        redirect('/completion')
      )}
    </div>
  );
};

export default QuestionDetail;
