
import './App.css';
import Home from "./routes/Home"
import Detail from './routes/Detail';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
function App() {
  
  return (
    <Router>
      <Switch>
      <Route path="/movie/:id" component={Detail}/>
        <Route path="/" component={Home}/>
        
      </Switch>
        
    </Router>
  );
}

export default App;
