import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { useContext, useRef } from "react";
import { Context } from "../src/context/Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts">
          <Home />
        </Route>
        <Route path="/signup">
          {user ? <Home /> : <SignUp />}
        </Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{user ? <Write /> : <Login />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
