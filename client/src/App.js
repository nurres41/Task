import "./App.css";
import Home from "./pages/home/Home";
import SlotGame from "./pages/slotGame/SlotGame";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/game" component={SlotGame} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
