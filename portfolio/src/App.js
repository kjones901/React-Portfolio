import './App.css';
import NavBar from './components/NavBar/NavBar'
import AboutMe from './components/AboutMe/AboutMe'
import { PageMargin } from './components/Page/PageMargin';

function App() {
  return (
    <PageMargin>
      <NavBar/>
      <AboutMe/>
    </PageMargin>
  );
}

export default App;