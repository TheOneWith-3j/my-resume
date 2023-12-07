import './App.css';
import BasicInfo from './pages/BasicInfo';
import { BrowserRouter, Switch , Route, Routes } from "react-router-dom";
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import Timeline from './components/Timeline';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<BasicInfo/>}/>
        <Route path='/Timeline' element={<Timeline/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
