//import logo from './logo.svg';
import './App.css';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Header from './components/Header';
import Name from './components/Name';
import Section from './components/Section';

function App() {
  return (
    <>
    <Header />
    <main className='main-wrapper'>
      <div className='left-half'>
        <Name />
        <Section />
      </div> 
      <div className='right-half'>
        <Aside />
      </div>
      
    </main>
    <Footer />
    </>
    
  );
}

export default App;
