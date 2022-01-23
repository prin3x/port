import './App.css';
import About from './sections/About';
import Footer from './sections/Footer';
import Works from './sections/Works';
import WorksFour from './sections/WorksFour';
import WorksOne from './sections/WorksOne';
import WorksThree from './sections/WorksThree';
import WorksTwo from './sections/WorksTwo';

function App() {
  return (
    <div className='w-screen overflow-x-hidden'>
      <About />
      <Works />
      <WorksOne />
      <WorksTwo />
      <WorksThree />
      <WorksFour />
      <Footer/>
    </div>
  );
}

export default App;
