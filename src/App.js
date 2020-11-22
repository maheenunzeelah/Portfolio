import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/Home.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Project from './components/Project';
function App() {
  return(
   
       
    <BrowserRouter>
  <div >
  {/* <Navb /> */}
    <Switch>
      <Route exact path="/skills" component={Skills}/>
      <Route exact path="/projects" component={Project}/>
      <Route exact path="/" component={Home}/>
      </Switch >
      </div>
    </BrowserRouter>
    
    
)
}

export default App;
