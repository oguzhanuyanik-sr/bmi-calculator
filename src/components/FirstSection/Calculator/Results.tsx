import { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';

const Results = () => {
  const { bmi } = useContext(GlobalContext);

  const getBmiCategory = (): string => {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi < 24.9) {
      return 'Healthy weight';
    } else if (bmi <= 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  };

  return (
    <div className='bg-blue text-white p-8 rounded-2xl mt-6 lg:rounded-r-full'>
      <p className='text-xl font-semibold mb-3'>
        {bmi === 0 ? 'Welcome!' : 'Your BMI is...'}
      </p>
      {bmi !== 0 && <p className='text-5xl mb-6'>{bmi}</p>}
      <p className='text-sm'>
        {bmi === 0
          ? 'Enter your height and weight and you’ll see your BMI result here'
          : `Your BMI suggests you’re a ${bmi} ${getBmiCategory()}`}
      </p>
    </div>
  );
};

export default Results;
