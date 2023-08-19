import { PatternLeft } from '../../utils/constants';
import Calculator from './Calculator';
import LeftSide from './LeftSide';

const FirstSection = () => {
  return (
    <header className='w-full mb-[450px] md:mb-80 lg:mb-32 lg:flex lg:justify-start lg:container relative'>
      <div className='w-full lg:w-[80%] relative lg:flex lg:flex-col bg-header'>
        <LeftSide />
        <Calculator />
        <img
          className='hidden lg:inline-block h-48 lg:absolute lg:right-[-90px] lg:bottom-[-180px]'
          src={PatternLeft}
          alt='pattern'
        />
      </div>
    </header>
  );
};

export default FirstSection;
