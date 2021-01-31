import {BrowserRouter as Router, Route} from 'react-router-dom'
import Overview from './page/Overview/Overview'
import pageIndonesia from './page/pageIndonesia'
import {Provider} from 'react-redux'
import store from './configs/redux/store'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Route path="/overview" component={Overview}></Route>
          <Route path="/indonesia" component={pageIndonesia}></Route>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
