import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import { defaultValue } from '../../../utils/constants';
import useBMI from '../../../hooks/useBMI';
import Radio from './Radio';
import Form from './Form';
import Results from './Results';

const Calculator = () => {
  const {
    value: { ft, kg, st, cm, inc, lbs },
    setValue,
    setBmi,
    option,
  } = useContext(GlobalContext);

  useEffect(() => {
    setValue(defaultValue);
  }, [option]);

  useBMI({ option, cm, kg, ft, inc, st, lbs, setBmi });

  return (
    <div className='flex justify-center relative pb-[300px] lg:w-[564px] lg:absolute lg:right-[-140px] lg:top-[140px]'>
      <div className='bg-white p-6 mt-6 mx-6  lg:w-[40vw] lg:max-w-[564px] absolute top-0 rounded-2xl shadow-dark'>
        <Radio />
        <Form />
        <Results />
      </div>
    </div>
  );
};

export default Calculator;
