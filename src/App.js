import './App.css';
import { About } from './components/About/About';
import { ClientSpeak } from './components/ClientSpeak/ClientSpeak';
import { Contact } from './components/Contact/Contact';
import { Home } from './components/Home/Home';
import { Navbar } from './components/navbar/Navbar';
import { Resume } from './components/Resume/Resume';
import { MyWork } from './components/MyWork/MyWork';
import  Title  from './components/title/Title';
import WhatIDo from './components/WhatIDo/WhatIDo';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <div style={{paddingTop:"1rem",paddingBottom:"1rem"}}>
        <Title backTitle="ABOUT ME" underTitle="Know Me More"/>
        <About />
      </div>
      <div style={{backgroundColor: "#193b8110",
            marginTop:"1.5rem",
            marginBottom:"1rem",
            paddingBottom:"1rem"}}>
        <Title backTitle="SERVICES" underTitle="What I Do?"/>
        <WhatIDo/>
      </div>
      <div>
        <Title backTitle="SUMMARY" underTitle="Resume"/>
        <Resume/>
      </div>
      <div style={{backgroundColor: "#193b8110",
            marginTop:"1.5rem",
            marginBottom:"1rem",
            paddingBottom:"1rem"}}>
        <Title backTitle="PORFOLIO" underTitle="My Work"/>
        <MyWork/>
      </div>
      <div>
        <Title backTitle="QUALITY" underTitle="Client Speak"/>
        <ClientSpeak/>
      </div>
      <div style={{backgroundColor: "#193b8110",
            marginTop:"1.5rem",
            marginBottom:"1rem",
            paddingBottom:"1rem"}}>
        <Title backTitle="CONTACT" underTitle="Get in Touch"/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
