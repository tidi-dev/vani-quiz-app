import React, { useState } from 'react';

interface Choice {
  id: string;
  content: string;
}

interface QuestionProps {
  question: string;
  type: 'single_choice' | 'multiple_choice';
  options: Choice[];
  onSelectOption: (option: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, type, onSelectOption }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (option: string) => {
    if (type === 'single_choice') {
      // For single choice, update selected option directly
      setSelectedOptions([option]);
    } else {
      // For multiple choice, toggle selected option
      const index = selectedOptions.indexOf(option);
      if (index === -1) {
        setSelectedOptions([...selectedOptions, option]);
      } else {
        setSelectedOptions(selectedOptions.filter((item) => item !== option));
      }
    }
    onSelectOption(option);
  };

  return (
    <div className='mt-2'>
      <p className='text-lg font-bold mb-4'>{question}</p>
      <ul className='space-y-4'>
        {options.map((option, index) => (
          <li key={index}>
            <input
              type={type === 'single_choice' ? 'radio' : 'checkbox'}
              id={option.id}
              name='options'
              value={option.content}
              checked={selectedOptions.includes(option.content)}
              onChange={() => handleOptionChange(option.content)}
              className='hidden'
            />
            <label
              htmlFor={option.id}
              className={`block border border-vani p-3 rounded-md cursor-pointer transition duration-300 ease-in-out ${
                selectedOptions.includes(option.content) ? 'bg-vani text-white' : 'hover:bg-gray-100'
              }`}
            >
              {option.content}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
