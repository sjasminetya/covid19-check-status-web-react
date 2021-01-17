import {BrowserRouter as Router, Route} from 'react-router-dom'
import Overview from './page/Overview/Overview'
import Indonesia from './page/Indonesia'

function App() {
  return (
    <div>
      <Router>
        <Route path="/overview" component={Overview}></Route>
        <Route path="/indonesia" component={Indonesia}></Route>
      </Router>
    </div>
  );
}

export default App;
