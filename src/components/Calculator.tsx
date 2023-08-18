import { useState } from 'react';

type Props = {};

const Calculator = (props: Props) => {
  const [option, setOption] = useState('metric');

  return (
    <div className='bg-white rounded-2xl p-6 mt-6 mx-6 absolute top-[0px] shadow-dark'>
      <div className='font-semibold text-xl mb-6'>
        <p>Enter your details below</p>
      </div>
      <form className='flex justify-between text-lg font-semibold mb-6'>
        <label className='cursor-pointer radio-label' htmlFor='metric'>
          <input
            className='mr-3 radio-input'
            type='radio'
            name='metric'
            id='metric'
            value='metric'
            checked={option === 'metric'}
            onChange={(e) => setOption(e.target.value)}
          />
          <div className='mark-container'>
            <span className='radio-mark'></span>
          </div>
          Metric
        </label>
        <label className='cursor-pointer radio-label' htmlFor='imperial'>
          <input
            className='mr-3 radio-input'
            type='radio'
            name='imperial'
            id='imperial'
            value='imperial'
            checked={option === 'imperial'}
            onChange={(e) => setOption(e.target.value)}
          />
          <div className='mark-container'>
            <span className='radio-mark'></span>
          </div>
          Imperial
        </label>
      </form>
      <div>
        <CalculatorInput option={option} />
      </div>
      <div className='bg-blue text-white p-8 rounded-2xl mt-6'>
        <p className='text-xl font-semibold mb-3'>Your BMI is...</p>
        <p className='text-5xl mb-6'>23.4</p>
        <p className='text-sm'>
          Your BMI suggests you’re a healthy weight. Your ideal weight is
          between <span className='font-bold'>63.3kgs - 85.2kgs</span>.
        </p>
      </div>
    </div>
  );
};

const CalculatorInput = ({ option }: { option: string }) => {
  const [heightValue, setHeightValue] = useState('0');
  const [weightValue, setWeightValue] = useState('0');
  const [ftValue, setFtValue] = useState('0');
  const [inValue, setInValue] = useState('0');
  const [stValue, setStValue] = useState('0');
  const [lbsValue, setLbsValue] = useState('0');

  return (
    <>
      {option === 'metric' ? (
        <div>
          <label className='flex flex-col mb-4' htmlFor='cm'>
            <span className='text-gray text-sm mb-2'>Height</span>
            <div className='relative'>
              <input
                className={`w-full font-semibold text-xl border border-lightGray focus:border-blue outline-none rounded-xl p-6 ${
                  heightValue === '0' ? 'text-gray' : 'text-darkGray'
                }`}
                type='number'
                name='cm'
                id='cm'
                onChange={(e) => setHeightValue(e.target.value)}
                value={heightValue}
              />
              <span className='absolute bottom-6 right-6 text-blue text-xl font-semibold'>
                cm
              </span>
            </div>
          </label>

          <label className='flex flex-col' htmlFor='kg'>
            <span className='text-gray text-sm mb-2'>Weight</span>
            <div className='relative'>
              <input
                className={`w-full font-semibold text-xl border border-lightGray focus:border-blue outline-none rounded-xl p-6 ${
                  weightValue === '0' ? 'text-gray' : 'text-darkGray'
                }`}
                type='number'
                name='kg'
                id='kg'
                onChange={(e) => setWeightValue(e.target.value)}
                value={weightValue}
              />
              <span className='absolute bottom-6 right-6 text-blue text-xl font-semibold'>
                kg
              </span>
            </div>
          </label>
        </div>
      ) : (
        <div>
          <div className='flex items-end gap-8'>
            <label className='flex flex-col mb-4' htmlFor='ft'>
              <span className='text-gray text-sm mb-2'>Height</span>
              <div className='relative'>
                <input
                  className={`w-full font-semibold text-xl border border-lightGray focus:border-blue outline-none rounded-xl p-6 ${
                    ftValue === '0' ? 'text-gray' : 'text-darkGray'
                  }`}
                  type='number'
                  name='ft'
                  id='ft'
                  onChange={(e) => setFtValue(e.target.value)}
                  value={ftValue}
                />
                <span className='absolute bottom-6 right-6 text-blue text-xl font-semibold'>
                  ft
                </span>
              </div>
            </label>
            <label className='flex flex-col mb-4' htmlFor='in'>
              <div className='relative'>
                <input
                  className={`w-full font-semibold text-xl border border-lightGray focus:border-blue outline-none rounded-xl p-6 ${
                    inValue === '0' ? 'text-gray' : 'text-darkGray'
                  }`}
                  type='number'
                  name='in'
                  id='in'
                  onChange={(e) => setInValue(e.target.value)}
                  value={inValue}
                />
                <span className='absolute bottom-6 right-6 text-blue text-xl font-semibold'>
                  in
                </span>
              </div>
            </label>
          </div>

          <div className='flex items-end gap-8'>
            <label className='flex flex-col' htmlFor='ft'>
              <span className='text-gray text-sm mb-2'>Weight</span>
              <div className='relative'>
                <input
                  className={`w-full font-semibold text-xl border border-lightGray focus:border-blue outline-none rounded-xl p-6 ${
                    stValue === '0' ? 'text-gray' : 'text-darkGray'
                  }`}
                  type='number'
                  name='st'
                  id='st'
                  onChange={(e) => setStValue(e.target.value)}
                  value={stValue}
                />
                <span className='absolute bottom-6 right-6 text-blue text-xl font-semibold'>
                  st
                </span>
              </div>
            </label>
            <label className='flex flex-col' htmlFor='in'>
              <div className='relative'>
                <input
                  className={`w-full font-semibold text-xl border border-lightGray focus:border-blue outline-none rounded-xl p-6 ${
                    lbsValue === '0' ? 'text-gray' : 'text-darkGray'
                  }`}
                  type='number'
                  name='lbs'
                  id='lbs'
                  onChange={(e) => setLbsValue(e.target.value)}
                  value={lbsValue}
                />
                <span className='absolute bottom-6 right-6 text-blue text-xl font-semibold'>
                  lbs
                </span>
              </div>
            </label>
          </div>
        </div>
      )}
    </>
  );
};

export default Calculator;
