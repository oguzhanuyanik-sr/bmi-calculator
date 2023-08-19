import { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';

const Input = ({ title, unit }: { title: string; unit: string }) => {
  const { value, setValue } = useContext(GlobalContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue({
      ...value,
      [unit]: newValue,
    });
  };

  return (
    <label className='flex flex-col mb-4' htmlFor={unit}>
      {unit === '' ? (
        ''
      ) : (
        <span className='text-gray text-sm mb-2'>{title}</span>
      )}
      <div className='relative'>
        <input
          className={`w-full font-semibold text-xl border border-lightGray focus:border-blue outline-none rounded-xl p-6 pr-14 cursor-pointer ${
            value === '0' ? 'text-gray' : 'text-darkGray'
          }`}
          type='number'
          name={unit}
          id={unit}
          value={value[unit]}
          onChange={handleChange}
          placeholder='0'
        />
        <span className='absolute bottom-6 right-6 text-blue text-xl font-semibold'>
          {unit}
        </span>
      </div>
    </label>
  );
};

export default Input;
