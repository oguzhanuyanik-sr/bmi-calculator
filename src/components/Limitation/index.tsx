import { limitationData, PatternRight } from '../../utils/constants';

const Limitation = () => {
  const computeMargin = (index: number) => {
    if (index === 0) {
      return 'lg:ml-[350px]';
    } else if (index === 1) {
      return 'lg:mr-[0px]';
    } else if (index === 3) {
      return 'lg:mr-[140px]';
    } else {
      return '';
    }
  };

  return (
    <div className='container'>
      <div className='pb-16 mt-[72px] lg:relative'>
        <div className='text-center lg:text-start mb-7 mt-[72px] lg:max-w-md lg:absolute lg:left-0 lg:top-0'>
          <h3 className='font-semibold text-3xl mb-8'>Limitations of BMI</h3>
          <p className='text-gray text-base leading-6 px-6 lg:px-0'>
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
        <div>
          <div className='w-full md:flex md:justify-center md:flex-wrap lg:flex-wrap-reverse pt-7 md:gap-5 lg:ml-[100px] lg:relative'>
            {limitationData
              .map((item, index) => (
                <div
                  className={`md:w-5/12 p-6 mx-5 mt-7 rounded-2xl shadow-light lg:max-w-[365px] ${computeMargin(
                    index
                  )}`}
                  key={item.title}
                >
                  <div className='flex items-center mb-4 gap-4'>
                    <img className='w-8 h-8' src={item.icon} alt={item.title} />
                    <h4 className='font-semibold text-xl'>{item.title}</h4>
                  </div>
                  <div>
                    <p className='text-gray leading-6'>{item.desc}</p>
                  </div>
                </div>
              ))
              .reverse()}
          </div>
        </div>
        <img
          className='hidden lg:inline-block lg:absolute lg:left-[70px] lg:top-[350px]'
          src={PatternRight}
          alt='Pattern'
        />
      </div>
    </div>
  );
};

export default Limitation;
