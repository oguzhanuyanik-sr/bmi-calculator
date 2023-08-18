import { Logo } from '../utils/constants';
import Calculator from './Calculator';
import { Link } from 'react-router-dom';

type Props = {};

const Header = () => {
  return (
    <header className='lg:container w-full mb-[450px] relative md:mb-80 lg:mb-32 lg:flex lg:justify-start'>
      <div className='bg-gradient2 relative w-full lg:flex lg:flex-col lg:relative lg:w-[80%]'>
        <Link
          to='/'
          className='w-full flex justify-center pt-8 lg:pt-20 lg:justify-start lg:mb-16 lg:pl-9'
        >
          <img className='h-10 w-10 lg:h-14 lg:w-14' src={Logo} alt='Logo' />
        </Link>
        <div className='p-6 lg:w-[45%] lg:pl-9 lg:pb-56'>
          <h1 className='text-center font-semibold text-5xl mb-6 leading-[1.2] lg:text-start lg:text-6xl lg:mb-9'>
            Body Mass <br /> Index Calculator
          </h1>
          <p className='text-center text-gray lg:text-start lg:text-lg'>
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
        <div className='flex justify-center relative pb-[300px] lg:w-[564px] lg:absolute lg:right-[-140px] lg:top-[140px]'>
          <Calculator />
        </div>
      </div>
    </header>
  );
};

export default Header;
