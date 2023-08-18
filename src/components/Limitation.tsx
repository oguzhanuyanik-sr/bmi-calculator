import { limitationData } from '../utils/constants';

type Props = {};

const Limitation = (props: Props) => {
  return (
    <div className='container'>
      <div className='mt-[72px] pb-16'>
        <div className='text-center mt-[72px] mb-7'>
          <h3 className='font-semibold text-3xl mb-8'>Limitations of BMI</h3>
          <p className='text-gray text-base leading-6 px-6'>
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
        <div className=''>
          <div className='w-full pt-7 md:flex md:flex-wrap md:justify-center md:gap-5'>
            {limitationData.map((item) => (
              <div
                className='shadow-dark rounded-2xl mt-7 p-6 mx-5 bg-gradient3 md:w-5/12'
                key={item.title}
              >
                <div className='flex items-center gap-4 mb-4'>
                  <img className='h-8 w-8' src={item.icon} alt={item.title} />
                  <h4 className='text-xl font-semibold'>{item.title}</h4>
                </div>
                <div>
                  <p className='text-gray leading-6 '>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Limitation;
