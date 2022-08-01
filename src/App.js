import './App.css';
import Header from './components/Header';
import News from './components/news';
import Research from './components/research';
import Facilities from './components/facilities';
import Publication from './components/publication';
import Bio from './components/bio';
function App() {
  return (
    <><Header />
      <News />
      <Research />
      <Facilities />
      <Publication />
      <Bio />
    </>
  );
}

export default App;
