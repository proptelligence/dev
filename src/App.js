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
import BlogItemDetails from './components/BlogItemDetails' 
import PrivacyPolicy from './components/PrivacyPolicy' 
import TermsAndConditions from './components/TermsAndConditions' 
import RefundPolicy from './components/RefundPolicy' 
import Blog from './components/Blog'
import Blog2 from './components/Blog2'
import Blog3 from './components/Blog3'
import Blog4 from './components/Blog4'
import Insights from './components/Insights' 
import Careers from './components/Careers'
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  useEffect(() => {
    // Google Tag Manager (gtag.js)
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-MPNXW889Q5';
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-MPNXW889Q5');

    // Cleanup function
    return () => {
      // Remove the script when unmounting the component
      document.head.removeChild(script);
    };
  }, []);

 useEffect(() => {
    // Clarity Code
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "l32skevwty");

    // Cleanup function
    return () => {
      // Remove Clarity script
      const clarityScript = document.querySelector('script[src^="https://www.clarity.ms/tag/"]');
      if (clarityScript) {
        clarityScript.parentNode.removeChild(clarityScript);
      }
    };
  }, []);

  useEffect(() => {
    // Zoho SalesIQ Code
    const salesIQScript = document.createElement('script');
    salesIQScript.innerHTML = `
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
    document.head.appendChild(salesIQScript);

    // Zoho SalesIQ Style (positioning at bottom right)
    const style = document.createElement('style');
    style.innerHTML = `
      #zsiq_float {
        bottom: 20px;
        right: 20px;
      }
    `;
    document.head.appendChild(style);

    // Cleanup function
    return () => {
      // Remove Zoho SalesIQ script
      document.head.removeChild(salesIQScript);
      // Remove Zoho SalesIQ style
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    // QR Code integration
    const qrScript = document.createElement('script');
    qrScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcode.react/2.0.0/qrcode.min.js';
    qrScript.async = true;
    document.head.appendChild(qrScript);

    // Cleanup function
    return () => {
      // Remove QR Code script
      document.head.removeChild(qrScript);
    };
  }, []); 

  
  return (
    <BrowserRouter> 

      <Helmet>
        <meta name="msvalidate.01" content="D2A150396A7BEE21CE9769C5C3479F1C" />
        <meta name="google-site-verification" content="google154aa1c8bf93db82.html" />
      </Helmet>
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
      <Route exact path="/blogdetails" element={<BlogItemDetails/>} /> 
      <Route exact path="/privacypolicy" element={<PrivacyPolicy/>} /> 
      <Route exact path="/proptelligence-terms&conditions" element={<TermsAndConditions/>} /> 
      <Route exact path="/proptelligence-refund-policy" element={<RefundPolicy/>}/> 
      <Route exact path="/freepropertylist" element={<Blog/>}/> 
      <Route exact path="/indiarealstate2023" element={<Blog2/>}/> 
      <Route exact path="/buyahome" element={<Blog3/>}/> 
      <Route exact path="/legaladvice" element={<Blog4/>}/> 
      
      <Route exact path="/insights" element={<Insights/>} /> 
      <Route exact path="/careers" element={<Careers/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




