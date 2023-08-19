import { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import { calculatorData } from '../../../utils/constants';
import Input from './Input';

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
            {calculatorData[option].map(
              (
                item: {
                  [key: string]: string;
                },
                i: number
              ) => (
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
