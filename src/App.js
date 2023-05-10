import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { AboutMe } from './Components/about';
import { MainNavBar } from './Components/navbar';
import { Certificate } from './Components/certificate';
import { Education } from './Components/education';
import { HomePage } from './Components/home';
import { Technical } from './Components/technical';
import { Contact } from './Components/contact';
import { StaticButton } from './Components/staticdiv';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={[<MainNavBar/>,<StaticButton/>,<HomePage/>,<AboutMe/>,<Certificate/>,<Education/>,<Technical/>,<Contact/>]}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
