import './App.css';
import Header from './components/Header'
import About from './components/About'
import Work from './components/Work'
import Connect from './components/Connect'
import Footer from './components/Footer'
import Resume from './components/Resume'
import 'bootstrap/dist/css/bootstrap.min.css';

import {useState} from 'react';

function App() {

  const [currentPage, setCurrentPage] = useState("About")

  return (
    <div>

      <Header setCurrentPage={setCurrentPage}/>
      <About currentPage={currentPage}/>
      <Work/>
      <Connect currentPage={currentPage}/>
      <Resume currentPage={currentPage}/>
      <Footer/>
    </div>
  );
}

export default App;
