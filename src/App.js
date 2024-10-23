//import logo from './logo.svg';
import './App.css';
import CustomButton from './components/CustomButton'
import NavigationBar from './components/NavigationBar'
import Home from "./Pages/Home";
import News from './Pages/News';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import MyCounter from './Pages/MyCounter';
import Random from './Pages/Random';

import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div >
      <NavigationBar/>
      <br/>
      
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/news' element={<News/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/product' element={<Product/>}/>
            <Route path='/MyCounter' element={<MyCounter/>}/>
            <Route path='/random' element={<Random/>}/>
          </Routes>
          </BrowserRouter>
          
            
            
            
           
    
      </div>
  );
}

export default App;
