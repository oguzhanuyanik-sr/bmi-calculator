import { solutionData } from '../../utils/constants';

const Solution = () => {
  return (
    <div className='flex flex-col px-5 pt-10 lg:pt-20 mt-20 relative'>
      <div className='container lg:flex lg:justify-between lg:gap-8 bg-solution'>
        {solutionData.map((item) => (
          <div className='mb-[72px]' key={item.title}>
            <img className='w-16 h-16 mb-8' src={item.icon} alt={item.title} />
            <h4 className='font-semibold text-xl mb-6'>{item.title}</h4>
            <p className='text-gray text-base'>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solution;
