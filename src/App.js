import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/Home.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills'
function App() {
  return(
    <div style={{backgroundColor:'black'}}>
    <BrowserRouter>
    <Switch>
      <Route exact path="/skills" component={Skills}/>
      <Route exact path="/" component={Home}/>
      </Switch >
    </BrowserRouter>
    
    </div>
)
}

export default App;
