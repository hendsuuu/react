import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/landingPage.css"
import Trending from './components/Trending';
import Intro from './components/Intro';
import Superhero from './components/Superhero';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      {/* Intro Section*/ }
      <div className='myBg'>
        <NavigationBar />
        <Intro/>
      </div>
      {/* Intro Section*/ }
      <div className='trending'>
          <Trending/>
      </div>
      <div className='superhero'>
          <Superhero/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
