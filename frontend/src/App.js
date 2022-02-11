import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

//Components
import Login from './Components/Login';
import Register from './Components/Register';
import Landing from './Components/LandingPage';
import Navigation from './Components/Navigation';
import Contacts from './Components/Contacts';

function App() {
  return (
     <BrowserRouter>
        <div className="App">
          <Routes>
          <Route path="/" element={<><Landing/><Navigation/></>}/>
            <Route path="/login" element={<><Login/><Navigation/></>} />
            <Route path="/register" element={<><Register/><Navigation/></>} />
            <Route path="/contact_list" element={<><Navigation/><Contacts/></>} />
          </Routes>         
        </div>
     </BrowserRouter>
  );
}

export default App;
