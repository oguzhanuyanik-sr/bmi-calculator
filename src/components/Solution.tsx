import { solutionData } from '../utils/constants';

type Props = {};

const Solution = (props: Props) => {
  return (
    <div className='flex flex-col px-5 pt-10 mt-20 relative'>
      <div className='bg-gradient'>
        {solutionData.map((item) => (
          <div className='mb-[72px]' key={item.title}>
            <img className='mb-8 h-16 w-16' src={item.icon} alt={item.title} />
            <h4 className='text-xl font-semibold mb-6'>{item.title}</h4>
            <p className='text-gray text-base'>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solution;
