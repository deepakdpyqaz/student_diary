import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Login from './login/Login';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard">
          Hello
        </Route>
        <Route path="/signup">
          <Login />
        </Route>
        <Route  path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
