import React, { useState } from 'react';
import { addSingleAnswer } from '../../redux/features/answerSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

interface Choice {
  id: string;
  answer: string;
}

interface QuestionProps {
  question: string;
  type: 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE';
  options: Choice[];
  onSelectOption: (option: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, type, onSelectOption }) => {
  const value = useAppSelector((state) => state.answerReducer.value);
  const dispatch = useAppDispatch();

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (option: Choice) => {
    if (type === 'SINGLE_CHOICE') {
      // For single choice, update selected option directly
      setSelectedOptions([option.answer]);
      dispatch(addSingleAnswer(option.id));
    } else {
      // For multiple choice, toggle selected option
      const index = selectedOptions.indexOf(option.answer);
      if (index === -1) {
        setSelectedOptions([...selectedOptions, option.answer]);
      } else {
        setSelectedOptions(selectedOptions.filter((item) => item !== option.answer));
      }
    }
    onSelectOption(option.answer);
  };

  return (
    <div className='mt-2'>
      <p className='text-lg font-bold mb-4'>{question}</p>
      <ul className='space-y-4'>
        {options.map((option, index) => (
          <li key={index}>
            <input
              type={type === 'SINGLE_CHOICE' ? 'radio' : 'checkbox'}
              id={option.id}
              name='options'
              value={option.answer}
              checked={selectedOptions.includes(option.answer)}
              onChange={() => handleOptionChange(option)}
              className='hidden'
            />
            <label
              htmlFor={option.id}
              className={`block border border-vani p-3 rounded-md cursor-pointer transition duration-300 ease-in-out ${
                selectedOptions.includes(option.answer) ? 'bg-vani text-white' : 'hover:bg-gray-100'
              }`}
            >
              {option.answer}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
