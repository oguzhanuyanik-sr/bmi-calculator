import { Logo } from '../utils/constants';
import Calculator from './Calculator';
import { Link } from 'react-router-dom';

type Props = {};

const Header = ({ children }: Props) => {
  return (
    <div className='mb-[450px] relative'>
      <div className='bg-gradient2'>
        <Link to='/' className='w-full flex justify-center pt-8'>
          <img className='h-10 w-10' src={Logo} alt='Logo' />
        </Link>
        <div className='p-6'>
          <h1 className='text-center font-semibold text-5xl mb-6'>
            Body Mass Index Calculator
          </h1>
          <p className='text-center text-gray'>
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
        <div className='flex justify-center relative pb-[300px]'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Header;
