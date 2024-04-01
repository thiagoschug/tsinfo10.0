import './App.css';
import Header from './components/Header';
import PaginaInicio from './components/PaginaInicio';
import Pagina1 from './components/Pagina1';
import Pagina2 from './components/Pagina2';
import Pagina3 from './components/Pagina3';


function App() {
  return (
    <div className="App">
      <Header/>
      <PaginaInicio/>
      <Pagina1 />
      <Pagina2 />
      <Pagina3 />
    </div>
  );
}

export default App;
