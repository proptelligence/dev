import React, { useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Technology from './components/Technology';
import PropertyManagement from './components/PropertyManagement';
import Industries from './components/Industries';
import SignUp from './components/SignUp';
import Login from './components/Login';
import LegalServices from './components/LegalServices';
import TitleSearch from './components/TitleSearch';
import Drafting from './components/Drafting';
import PaymentGateway from './components/PaymentGateway';
import PostProperty from './components/PostProperty';
import PropertyForm from './components/PropertyForm';
import Tech from './components/Tech';
import Categories from './components/Categories';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  useEffect(() => {
    // Zoho SalesIQ Code
    const script = document.createElement('script');
    script.innerHTML = `
      var $zoho = $zoho || {};
      $zoho.salesiq = $zoho.salesiq || { widgetcode: "siqd5bd0a10a571c016e2a14372615b56e66c995d9492c328369d402248eef93ef2", values: {}, ready: function(){} };
      var d = document;
      var s = d.createElement("script");
      s.type = "text/javascript";
      s.id = "zsiqscript";
      s.defer = true;
      s.src = "https://salesiq.zohopublic.in/widget";
      var t = d.getElementsByTagName("script")[0];
      t.parentNode.insertBefore(s, t);
      "<div id='zsiqwidget'></div>";
    `;
    document.head.appendChild(script);

    // Zoho SalesIQ Style (positioning at bottom right)
    const style = document.createElement('style');
    style.innerHTML = `
      #zsiq_float {
        bottom: 20px;
        right: 20px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup when the component unmounts
      document.head.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

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
      <Route exact path="/categories" element={<Categories/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




