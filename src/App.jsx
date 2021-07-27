
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import './app.scss';

function App() {
  return (
    <div className="apps">
      <Navbar/>
      <div className="sections">
      <Intro />
      <Services/>
      <About/>
      <Contact/>
      </div>
    </div>
  );
}
export default App;
