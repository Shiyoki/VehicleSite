import Home from "./views/Home";
import Error404 from "./components/Error404";

import {
BrowserRouter as HashRouter,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <>
    <HashRouter>
      <Switch>
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </HashRouter>
    
    </>
  );
}

export default App;
