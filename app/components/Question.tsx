import React, { useState } from 'react';
import { addMultipleAnswer, addSingleAnswer } from '../../redux/features/answerSlice';
import { useAppDispatch } from '../../redux/hooks';

interface Choice {
  id: string;
  answer: string;
}

interface QuestionProps {
  question: Question;
  correctedAnswer: {
    is_correct: boolean;
    correct_answer: string[];
  } | null;
  onSelectOption: (id: string, answer: string[]) => void;
}

const Question: React.FC<QuestionProps> = ({
  question: { id, content, choices, type },
  onSelectOption,
  correctedAnswer,
}) => {
  const dispatch = useAppDispatch();

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (option: Choice) => {
    if (type === 'SINGLE_CHOICE') {
      // For single choice, update selected option directly
      setSelectedOptions([option.id]);
      dispatch(addSingleAnswer({ id, answer: [option.id] }));
    } else {
      // For multiple choice, toggle selected option
      setSelectedOptions(selectedOptions.filter((id) => !choices.some((choice) => choice.id === id)));
      const index = selectedOptions.indexOf(option.id);
      let answer = [];
      if (index === -1) {
        answer = [...selectedOptions, option.id];

        setSelectedOptions(answer);
      } else {
        answer = selectedOptions.filter((item) => item !== option.id);
        setSelectedOptions(answer);
      }

      console.log('🚀 ~ answer:', answer);
      dispatch(addMultipleAnswer({ id, answer }));
    }
    onSelectOption(id, [option.id]);
  };

  return (
    <div className='mt-2'>
      <p className='text-lg font-bold mb-4'>{content}</p>
      <ul className='space-y-4'>
        {choices.map((choice, index) => (
          <li key={index}>
            <input
              type={type === 'SINGLE_CHOICE' ? 'radio' : 'checkbox'}
              id={choice.id}
              name='options'
              value={choice.id}
              checked={selectedOptions.includes(choice.id)}
              onChange={() => handleOptionChange(choice)}
              className='hidden'
            />
            <label
              htmlFor={choice.id}
              className={`block border border-vani p-3 rounded-md cursor-pointer transition duration-300 ease-in-out ${
                selectedOptions.includes(choice.id) ? 'bg-vani text-white' : 'hover:bg-gray-100'
              } ${
                correctedAnswer &&
                correctedAnswer.is_correct &&
                correctedAnswer.correct_answer.includes(choice.id) &&
                'bg-green-500'
              } ${
                correctedAnswer && !correctedAnswer.is_correct && selectedOptions.includes(choice.id) && 'bg-red-500'
              }`}
            >
              {choice.answer}
              {choice.id}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
