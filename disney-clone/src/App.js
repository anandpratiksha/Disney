import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./components/Login"

function App() {
  return (
    <div className="App">
      <Router>
        <switch>
          <Route exact path="/">
            <Login />
          </Route>
        </switch>
      </Router>
    </div>
  );
}

export default App;
