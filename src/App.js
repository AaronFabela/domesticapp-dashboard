import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { NavPage } from './components/NavPage';
import './styles/empleado.css'


function App() {
  return (
    <>
    <BrowserRouter>
      <NavPage></NavPage>
    </BrowserRouter>
    </>
  );
}

export default App;
