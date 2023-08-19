import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import Description from './components/Description';
import FirstSection from './components/FirstSection';
import Solution from './components/Solution';
import Limitation from './components/Limitation';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <FirstSection />
        <Description />
        <Solution />
        <Limitation />
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default App;
