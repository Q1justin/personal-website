import './App.css';
import ContactBar from './components/Navigation/ContactBar/ContactBar';
import WelcomePage from './components/WelcomePage/WelcomePage';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import TestContainer from './containers/TestContainer';
import ScrollBar from './components/Navigation/ScrollBar/ScrollBar';

function App() {
  return (
    <div>
    <ScrollBar/>
    <TestContainer />
        <WelcomePage id = "WelcomePage" />
        <AboutMe id = "AboutMe" />
        <Projects id = "Projects"/>
        <ContactBar id = "ContactBar" />
    </div>
  );
}

export default App;
