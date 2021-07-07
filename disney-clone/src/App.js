import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./components/Login"
import Header from "./components/Header"


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
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
