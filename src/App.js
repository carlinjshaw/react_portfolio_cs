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
import paintBackgrnd from './assets/Circuit-PNG-Images.png'
// import paintBackgrnd from './assets/png-clipart-technology.png'
// import paintBackgrnd from './assets/My_project_1.png'

function App() {

  //useState method will regulate which page to render
  const [currentPage, setCurrentPage] = useState('Home')

  const myStyle={
    backgroundImage: `url(${paintBackgrnd})`,
    backgroundColor: "rgb(93, 93, 93)",
    alt: "background paint image",
    height:'100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', 
};



  return (
    <div   style={myStyle}>
      {/* <div> */}
      <Header setCurrentPage={setCurrentPage}/>
      <Home currentPage={currentPage}/>
      <About currentPage={currentPage}/>
      <Work currentPage= {currentPage}/>
      <Connect currentPage={currentPage}/>
      <Resume currentPage={currentPage}/>
      <Footer  setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default App;
