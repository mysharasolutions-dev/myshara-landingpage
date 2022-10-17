import { Route, Routes } from 'react-router-dom';
import './App.css';
import Terms_and_Conditions from './pages/Terms_and_Conditions/Terms_and_Conditions';
import UnderConstruction from './pages/Underconstruction/UnderConstruction';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UnderConstruction />} />
        <Route path='/terms-and-conditions' element={<Terms_and_Conditions />} />
      </Routes>
    </div>
  );
}

export default App;
