import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Login from './login/Login';
import Dashboard from './dashboard/Dashboard';
import Signup from './signup/signup';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route  path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
