import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Clients from './Components/Clients/Clients';
import About from './Components/About/About';
import Accordion from './Components/About/Accordion';
import Skills from './Components/Skills/Skills';
import Services from './Components/Services/Services';
import Action from './Components/Action/Action';
import Portfolio from './Components/Portfolio/Portfolio';
import Team from './Components/Team/Team';
import Price from './Components/Price/Price';
import Frequently from './Components/Frequently/Frequently';


function App() {
  return (
    <main>
        <Header></Header>
        <Clients></Clients>
        <About></About>
        <Accordion></Accordion>
        <Skills></Skills>
        <Services></Services>
        <Action></Action>
        <Portfolio></Portfolio>
        <Team></Team>
        <Price></Price>
        <Frequently></Frequently>
    </main>
  );
}

export default App;
