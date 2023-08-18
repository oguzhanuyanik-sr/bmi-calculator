import { Man } from '../utils/constants';

type Props = {};

const Description = (props: Props) => {
  return (
    <div>
      <img className='mb-12' src={Man} alt='Eating' />
      <div className='px-6'>
        <h3 className='font-semibold text-2xl mb-8'>
          What your BMI result means
        </h3>
        <p className='text-gray text-base leading-7'>
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </div>
  );
};

export default Description;
