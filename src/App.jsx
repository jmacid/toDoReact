import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './pages';
import TodoPage from './pages/todoPage'

function App() {
  return (
    <Router>
      <Switch>
        
        <Route exact path="/" component={Home} />
        <Route exact path="/todo" component={TodoPage} />
      
      </Switch>
    </Router>
  );
}

export default App;
