import React, { Suspense, useEffect, lazy } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ReactDOM from "react-dom";

const PagePromise = lazy(() => import("./routes/Promise"));
const PageAsync = lazy(() => import("./routes/Async"));

ReactDOM.render(
  <Router>
    <div>
    <h1>Iteration 10</h1>
    <h2>Navigation:</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/async">Async</Link>
          </li>
          <li>
            <Link to="/promise">Promise</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
          <Route path="/promise" component={PagePromise} />
          <Route path="/async" component={PageAsync} />
        </Switch>
      </Suspense>
    </div>
  </Router>,
  document.getElementById("root")
);

export default function useTitle(title, user){
  useEffect(() => {
    if(user!='Введите ник'){
      document.title = `Checking repos of ${user}`;
    }
    else document.title = title;
  });
}
