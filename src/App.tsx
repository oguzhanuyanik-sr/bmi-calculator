import Calculator from './components/Calculator';
import Description from './components/Description';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Solution from './components/Solution';
import Limitation from './components/Limitation';

type Props = {};

const App = (props: Props) => {
  return (
    <BrowserRouter>
      <Header>
        <Calculator />
      </Header>
      <Description />
      <Solution />
      <Limitation />
    </BrowserRouter>
  );
};

export default App;
