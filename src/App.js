import React,{ Component }  from 'react'; 
import {BrowserRouter,Route,Routes} from "react-router-dom";
import './App.css';
import NavBar from './Component/NavBar';
import Index from './Component/Index';
import Contact from './Component/Contact';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
      <div className="App">
      <NavBar/>
      <Routes>
      <Route exact path='/' element={<Index/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
     </div>
     </BrowserRouter>
    )
  }
}
export default App;
