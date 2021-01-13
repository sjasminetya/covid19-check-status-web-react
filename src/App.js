import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './page/Home'
import Overview from './page/Overview'

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Home}></Route>
        <Route path="/overview" component={Overview}></Route>
      </Router>
    </div>
  );
}

export default App;
