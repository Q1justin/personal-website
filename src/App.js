import './App.css';
import ContactBar from './components/Navigation/ContactBar/ContactBar';
import WelcomePage from './components/WelcomePage/WelcomePage';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import TestContainer from './containers/TestContainer';

function App() {
  return (
    <div>
    <TestContainer />
        <WelcomePage />
        <AboutMe />
        <Projects />
        <ContactBar />
    </div>
  );
}

export default App;
