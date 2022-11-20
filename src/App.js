
import './App.css';
import Navigationbar from "./components/Navigationbar"
import Intro from "./components/Intro"
import Trending from "./components/Trending"
import "./style/landingpage.css"
import Princess from './components/Princess';

function App() {
  return (
    <div>
      {/* intro section */}
      <div className='myBg'> 
        <Navigationbar/>
        <Intro/>
      </div>
      {/* end of intro */}
      <div className='trending'> 
        <Trending/>
      </div>
      <div className='princess'>
        <Princess/>
      </div>

    </div>
  );
}

export default App;
