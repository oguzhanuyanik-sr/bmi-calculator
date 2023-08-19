import { ChangeEvent, useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';

const Radio = () => {
  const unitType = ['metric', 'imperial'];
  const { option, setOption } = useContext(GlobalContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOption(e.target.value);
  };

  return (
    <>
      <div className='font-semibold text-2xl mb-6'>
        <p>Enter your details below</p>
      </div>
      <form className='flex justify-between text-lg font-semibold mb-6'>
        {unitType.map((item) => (
          <label
            key={item}
            className='cursor-pointer radio-label'
            htmlFor={item}
          >
            <input
              className='mr-3 radio-input'
              type='radio'
              name={item}
              id={item}
              value={item}
              checked={option === item}
              onChange={handleChange}
            />
            <div className='mark-container'>
              <span className='radio-mark'></span>
            </div>
            <span className='capitalize'>{item}</span>
          </label>
        ))}
      </form>
    </>
  );
};

export default Radio;
