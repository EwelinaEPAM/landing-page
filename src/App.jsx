import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Program from './components/Program';
import Speakers from './components/Speakers';
import FAQ from './components/FAQ';
import Registration from './components/Registration';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Program />
      <Speakers />
      <FAQ />
      <Registration />
      <footer className="footer">
        <p>© 2026 DevConnect Community Meetup · Warsaw, Poland</p>
      </footer>
    </>
  );
}

export default App;
