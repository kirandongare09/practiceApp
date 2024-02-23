import logo from './logo.svg';
import './App.css';
import Nav  from './component/Nav';
import Promo from './component/Promo';
import Intro1 from './component/Intro1';
import Intro2 from './component/Intro2';
import Intro3 from './component/Intro3';
import Footer from './component/Footer';
import Bag from './component/Bag';
import Apples from './component/Apples';
import InputComponent from './component/InputComponent';
import TextInputWithFocusButton from './component/TextInputWithFocusButton';
import Gallery from './component/Gallery';
import {Routes, Route, Link} from 'react-router-dom';
import HomeComponent from './HomeComponent';
import Video from './component/Video';
import Audio1 from './component/Audio';
import Calculator from './component/Calculator';
import DessertsList from './component/DesertList';
function Heading(){
  return <h1>hello react</h1>
}

function App() {
  return (
  <div>
    <Link to = '/' className= "nav-item">Home</Link>
    <Link to = '/heading' className= "nav-item">Heading</Link>
    <Link to = '/nav' className= "nav-item">Nav</Link>
    <Link to = '/promo' className= "nav-item">Promo</Link>
    <Link to = '/intro1' className= "nav-item">Intro1</Link>
    <Link to = '/intro2' className= "nav-item">Intro2</Link>
    <Link to = '/intro3' className= "nav-item">Intro3</Link>
    <Link to = '/gallery' className= "nav-item">Gallery</Link>
    <Link to="/video" className='nav-item'>Video</Link>
    <Link to = '/audio' className='nav-item'>Audio</Link>
    <Link to='/calculator' className='nav-item' > Calculator </Link>
    <Link to='/dessert' className='nav-item' > Desserts </Link>

    <Routes>
      <Route path='/' element= {<HomeComponent/>} />
      <Route path = '/heading' element ={<Heading />} />
      <Route path ='/nav' element= {<Nav />} />
      <Route path= '/promo' element= {<Promo />} />
      <Route path='/intro1' element = {<Intro1 />} />
      <Route path='/intro2' element = {<Intro2 />} />
      <Route path='/intro3' element = {<Intro3 />} /> 
      <Route path ='/gallery' element = {<Gallery />} />
      <Route path='/video' element= {<Video/>} />
      <Route path='/audio' element ={<Audio1/>} />
      <Route path='/calculator' element ={<Calculator/>}/>
      <Route path='/dessert' element ={<DessertsList/>}/>
    </Routes>
    <Footer />
    <div>
      <Bag children = {<Apples color="red" />}/>
        {/* <Apples color="orange" />
      </Bag> */}
      <InputComponent /><br></br>
      <TextInputWithFocusButton /><br></br><br></br>
    </div>
  </div>
  )
  
}

export default App;
