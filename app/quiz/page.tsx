'use client';
import { useGetQuestionsQuery } from '../../redux/services/userApi';
import MiddlewareRoute from '../components/MiddlewareRoute';
import QuestionDetail from '../components/QuestionDetail';

const QuizPage = () => {
  const { data, error, isSuccess } = useGetQuestionsQuery();

  return (
    <MiddlewareRoute>
      <button className='ml-16 mt-4 bg-transparent hover:bg-vani hover:text-white font-semibold py-2 px-4 border border-gray-600 rounded transition ease-in-out duration-300'>
        back
      </button>
      {isSuccess && <QuestionDetail questions={data} />}
    </MiddlewareRoute>
  );
};

export default QuizPage;
