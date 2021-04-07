import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Universal from "./components/universal";

const URL = 'https://jsonplaceholder.typicode.com';

function App() {

  return (
      <Router>
        <div>
          <nav className={'nav'}>
            <Link to={'/posts'}>Posts</Link>
            <Link to={'/comments'}>Comments</Link>
            <Link to={'/albums'}>Albums</Link>
            <Link to={'/photos'}>Photos</Link>
            <Link to={'/todos'}>Todos</Link>
            <Link to={'/users'}>Users</Link>
          </nav>
          <div>
            <Switch>
              <Route path={'/posts'}><Universal url={URL} location={'posts'}/></Route>
              <Route path={'/comments'}><Universal url={URL} location={'comments'}/></Route>
              <Route path={'/albums'}><Universal url={URL} location={'albums'}/></Route>
              <Route path={'/photos'}><Universal url={URL} location={'photos'}/></Route>
              <Route path={'/todos'}><Universal url={URL} location={'todos'}/></Route>
              <Route path={'/users'}><Universal url={URL} location={'users'}/></Route>
            </Switch>
          </div>

        </div>
      </Router>
  );
}

export default App;
