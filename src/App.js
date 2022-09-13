import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Work from './components/Work'
import Connect from './components/Connect'
import Footer from './components/Footer'
import Resume from './components/Resume'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

function App() {

  //useState method will regulate which page to render
  const [currentPage, setCurrentPage] = useState('Home')



  return (
    <div>
      <Header setCurrentPage={setCurrentPage}/>
      <Home currentPage={currentPage}/>
      <About currentPage={currentPage}/>
      <Work currentPage= {currentPage}/>
      <Connect currentPage={currentPage}/>
      <Resume currentPage={currentPage}/>
    </div>
  );
}

export default App;
