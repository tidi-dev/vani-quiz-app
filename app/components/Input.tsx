interface InputProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ id, label, type, value, onChange, required = false }) => {
  return (
    <div>
      <label htmlFor={id} className='block text-sm font-medium text-vani'>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className='mt-1 block w-full shadow-sm sm:text-sm border-vani rounded-md focus:ring focus:ring-vani'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={label}
      />
    </div>
  );
};

export default Input;
