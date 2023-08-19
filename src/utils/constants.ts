import Logo from '../assets/logo.svg';
import PatternLeft from '../assets/pattern-curved-line-left.svg';
import PatternRight from '../assets/pattern-curved-line-right.svg';
import Eating from '../assets/icon-eating.svg';
import Exercise from '../assets/icon-exercise.svg';
import Sleep from '../assets/icon-sleep.svg';
import Gender from '../assets/icon-gender.svg';
import Age from '../assets/icon-age.svg';
import Muscle from '../assets/icon-muscle.svg';
import Pregnancy from '../assets/icon-pregnancy.svg';
import Race from '../assets/icon-race.svg';
import Man from '../assets/image-man-eating.webp';

const defaultValue = {
  cm: '',
  kg: '',
  ft: '',
  inc: '',
  st: '',
  lbs: '',
};

const calculatorData = {
  metric: [
    {
      title: 'Height',
      unit: 'cm',
      unitOne: '',
      unitTwo: '',
    },
    {
      title: 'Weight',
      unit: 'kg',
      unitOne: '',
      unitTwo: '',
    },
  ],
  imperial: [
    {
      title: 'Height',
      unit: '',
      unitOne: 'ft',
      unitTwo: 'inc',
    },
    {
      title: 'Weight',
      unit: '',
      unitOne: 'st',
      unitTwo: 'lbs',
    },
  ],
};

const solutionData = [
  {
    icon: Eating,
    title: 'Healthy eating',
    desc: 'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.',
  },
  {
    icon: Exercise,
    title: 'Regular exercise',
    desc: 'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.',
  },
  {
    icon: Sleep,
    title: 'Adequate sleep',
    desc: 'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.',
  },
];

const limitationData = [
  {
    icon: Gender,
    title: 'Gender',
    desc: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
  },
  {
    icon: Age,
    title: 'Age',
    desc: 'In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.',
  },
  {
    icon: Muscle,
    title: 'Muscle',
    desc: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
  },
  {
    icon: Pregnancy,
    title: 'Pregnancy',
    desc: 'Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.',
  },
  {
    icon: Race,
    title: 'Race',
    desc: 'Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.',
  },
];

export {
  Logo,
  Man,
  solutionData,
  limitationData,
  PatternLeft,
  PatternRight,
  calculatorData,
  defaultValue,
};
