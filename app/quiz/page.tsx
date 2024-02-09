import { getXataClient } from '../../src/xata';
import QuestionDetail from '../components/QuestionDetail';

const QuizPage = async () => {
  const xataClient = getXataClient();
  const questions = await xataClient.db.questions
    .select([
      'id',
      'content',
      'hint',
      'type',
      {
        name: '<-choices.question',
        columns: ['id', 'content', 'is_correct'],
      },
    ])
    .getAll();

  return (
    <>
      <button className='ml-16 mt-4 bg-transparent hover:bg-vani hover:text-white font-semibold py-2 px-4 border border-gray-600 rounded transition ease-in-out duration-300'>
        back
      </button>
      <QuestionDetail questions={questions as unknown as Question} />
    </>
  );
};

export default QuizPage;
