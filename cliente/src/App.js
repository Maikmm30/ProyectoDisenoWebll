import "./App.css";
import Navbar from "./Componentes/Navbar";
import Home from "./Componentes/Home";
import ClientesMesas from "./Componentes/ClientesMesas";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
       <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/clientesM" component={ClientesMesas} />
      </Switch>
    </Router>
  );
}

export default App;
