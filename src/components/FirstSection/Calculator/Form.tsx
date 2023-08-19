import { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import Input from './Input';
import { calculatorData } from '../../../utils/constants';

interface CalculatorItem {
  title: string;
  unit: string;
  unitOne: string;
  unitTwo: string;
}

interface CalculatorData {
  metric: CalculatorItem[];
  imperial: CalculatorItem[];
}

const Form = () => {
  const { option } = useContext(GlobalContext);

  return (
    <div>
      <>
        {option === 'metric' ? (
          <form className='md:flex md:gap-8'>
            {calculatorData[option].map((item) => (
              <Input key={item.unit} title={item.title} unit={item.unit} />
            ))}
          </form>
        ) : (
          <>
            {calculatorData[option as keyof CalculatorData].map(
              (item: CalculatorItem, i) => (
                <form key={i} className='flex items-end gap-8'>
                  <Input title={item.title} unit={item.unitOne} />
                  <Input title='' unit={item.unitTwo} />
                </form>
              )
            )}
          </>
        )}
      </>
    </div>
  );
};

export default Form;
