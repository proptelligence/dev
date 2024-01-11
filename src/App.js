import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About'
import ContactUs from './components/ContactUs'
import Technology from './components/Technology'
import PropertyManagement from './components/PropertyManagement' 
import Industries from './components/Industries'
import SignUp from './components/SignUp' 
import Login from './components/Login' 
import LegalServices from './components/LegalServices'
import TitleSearch from './components/TitleSearch'
import Drafting from './components/Drafting'
import PaymentGateway from './components/PaymentGateway'
import  PostProperty from './components/PostProperty'
import PropertyForm from './components/PropertyForm'
import Tech from './components/Tech'
import { BrowserRouter , Route ,Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home />} /> 
      <Route exact path="/aboutus" element={<About/>}/>
      <Route exact path="/contact" element={<ContactUs/>}/>  
      <Route exact path="/tech" element={< Technology/>}/> 
      <Route exact path="/industries" element={< Industries/>}/> 
      <Route exact path="/legalservices" element={<LegalServices/>}/>
      <Route exact path ="/titlesearch" element={<TitleSearch/>}/>
      <Route exact path ="/drafting" element={<Drafting/>}/> 
      <Route exact path = "/payment" element={<PaymentGateway/>}/>
      <Route exact path="/prop" element={<PropertyManagement/>}/> 
      <Route exact path="/post" element={< PostProperty/>} />
      <Route exact path="/signup" element={<SignUp/>} />
      <Route exact path='/login' element={<Login/>} /> 
      <Route exact path='/techno' element = {<Tech/>}/>
      <Route exact path= '/propertyForm' element={<PropertyForm/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;