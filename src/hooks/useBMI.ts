import { useEffect } from 'react';

interface UseBMIProps {
  option: string;
  cm: string;
  kg: string;
  ft: string;
  inc: string;
  st: string;
  lbs: string;
  setBmi: (bmi: number) => void;
}

const useBMI = ({ option, cm, kg, ft, inc, st, lbs, setBmi }: UseBMIProps) => {
  useEffect(() => {
    const calculateBMI = () => {
      let calculatedBmi = 0;

      if (option === 'metric' && cm !== '' && kg !== '') {
        calculatedBmi = Math.ceil(parseFloat(kg) / (parseFloat(cm) / 100) ** 2);
      } else if (ft && inc && st && lbs) {
        const height = Math.ceil(
          (parseFloat(ft) * 12 + parseFloat(inc)) * 2.54
        );
        const weight = Math.ceil(
          (parseFloat(st) * 14 + parseFloat(lbs)) * 0.45
        );
        calculatedBmi = Math.ceil(weight / (height / 100) ** 2);
      }

      setBmi(calculatedBmi);
    };

    calculateBMI();
  }, [option, cm, kg, ft, inc, st, lbs]);
};

export default useBMI;
