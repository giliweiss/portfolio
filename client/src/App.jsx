import Welcome from './components/Welcome';
import About from './components/About';
import Contact from './components/Contact';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Welcome />
      <About />
      <Contact />
    </div>
  );
}

export default App;
