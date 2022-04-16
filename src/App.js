import {Component} from "react"
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Location from './Components/Location/Location';
import Footer from './Components/Footer/Footer';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <>
        <Navbar />
        <Header />
        <Portfolio />
        <About />
        <Contact />
        <Location />
        <Footer />  
      </>
    );
  }
}
 
export default App;


