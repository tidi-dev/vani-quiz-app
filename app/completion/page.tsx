import React from 'react';
import MiddlewareRoute from '../components/MiddlewareRoute';

const CompletionPage: React.FC = () => {
  return (
    <MiddlewareRoute>
      <div className='flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
        <p>Congratulations! You have completed the quiz.</p>
      </div>
    </MiddlewareRoute>
  );
};

export default CompletionPage;
