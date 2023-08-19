import { Link } from 'react-router-dom';
import { Logo } from '../../utils/constants';

const LeftSide = () => {
  return (
    <>
      <Link
        to='/'
        className='w-full inline-flex justify-center lg:justify-start pt-8 lg:pt-20 lg:pl-9 lg:mb-16 lg:max-w-fit'
      >
        <img className='h-10 lg:h-14 w-10 lg:w-14' src={Logo} alt='Logo' />
      </Link>
      <div className='p-6 lg:pl-9 lg:pb-56 lg:w-[45%]'>
        <h1 className='text-center lg:text-start font-semibold text-5xl lg:text-6xl leading-[1.2] mb-6 lg:mb-9'>
          Body Mass <br /> Index Calculator
        </h1>
        <p className='text-center lg:text-start text-gray lg:text-lg'>
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>
    </>
  );
};

export default LeftSide;
