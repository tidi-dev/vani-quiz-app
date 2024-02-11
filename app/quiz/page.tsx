'use client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/features/authSlice';
import { useGetQuestionsQuery } from '../../redux/services/userApi';
import MiddlewareRoute from '../components/MiddlewareRoute';
import QuestionDetail from '../components/QuestionDetail';

const QuizPage = () => {
  const { data, isError, isSuccess } = useGetQuestionsQuery('');
  const user = useSelector(selectUser);

  if (isError) {
    redirect('/auth');
  }
  return (
    <MiddlewareRoute>
      <div className='flex ml-16 mt-4'>
        <Link
          className='ml-16 mt-4 bg-transparent hover:bg-vani hover:text-white font-semibold py-2 px-4 border border-gray-600 rounded transition ease-in-out duration-300'
          href='/completion'
        >
          back
        </Link>
        {user && (
          <>
            <p className='ml-16 mt-4 py-2 px-4 bold'>
              {user.full_name}-{user.phone_number}
            </p>
            <p className='ml-16 mt-4 py-2 px-4 text-vani'>{user.last_login_at}</p>
          </>
        )}
      </div>
      {/* {!data ? redirect('/auth') : <QuestionDetail questions={data} />} */}
      {isSuccess && <QuestionDetail questions={data} />}
    </MiddlewareRoute>
  );
};

export default QuizPage;
