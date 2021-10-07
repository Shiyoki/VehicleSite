import Home from "./views/Home";
import Error404 from "./components/Error404";

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Thanks from "./views/Thanks";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/gracias" exact>
            <Thanks />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
    
    </>
  );
}

export default App;
