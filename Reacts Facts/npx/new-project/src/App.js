import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainContent from './Components/MainContent';

function Page(){
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <div className="AppContainer">
      <Page />
    </div>
  );
}

export default App;
