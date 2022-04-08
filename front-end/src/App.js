
import './App.scss';
import { Navbar } from './components';
import { About, Footer, Headers, Skills, Testimonials, Work  } from './containers';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Headers/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
