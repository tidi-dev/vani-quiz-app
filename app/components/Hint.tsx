import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

interface HintProps {
  hint: string;
  question: string;
}

const Hint: React.FC<HintProps> = ({ hint, question }) => {
  const [showHint, setShowHint] = useState(false);

  // Reset showHint when the question changes
  useEffect(() => {
    setShowHint(false);
  }, [question]);

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  return (
    <div>
      <button onClick={toggleHint} className='flex items-center text-blue-500 cursor-pointer'>
        Hint
        {showHint ? (
          <FontAwesomeIcon icon={faChevronUp} className='ml-1' />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} className='ml-1' />
        )}
      </button>
      {showHint && <p className='mt-2'>{hint}</p>}
    </div>
  );
};

export default Hint;
