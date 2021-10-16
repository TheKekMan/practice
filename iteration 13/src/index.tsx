import React, { Suspense, useEffect, lazy } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import repoReducer from './reducers/repo';

export const store = createStore(repoReducer, applyMiddleware(thunk));

const PagePromise = lazy(() => import("./routes/Promise"));
const PageAsync = lazy(() => import("./routes/Async"));

export const ThemeContext = React.createContext("blue");

interface IProps {
}

interface ITheme {
  theme: string;
}

class Theme extends React.Component<IProps, ITheme> {
  constructor(props: ITheme) {
    super(props);
    this.state = {
      theme: "red",
    };
  }

  clicked: boolean = true;

  switchTheme = () => {
    if(this.clicked){
      this.setState({ theme: "green"});
      this.clicked = !this.clicked;
    }
    else{
      this.setState({ theme: "red"});
      this.clicked = !this.clicked;
    }
  };

  render() {
    return (
        <ThemeContext.Provider value={this.state.theme}>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Switch>
            <Route path="/promise" component={PagePromise} />
            <Route path="/async" component={PageAsync} />
          </Switch>
        </Suspense>
        <button id="themebtn" onClick={this.switchTheme}>Click Me</button>
        </ThemeContext.Provider>
    );
  }
}

ReactDOM.render(
    <Router>
      <div>
        <h1>Iteration 13</h1>
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
        <Provider store={store}>
        <Theme />
        </Provider>
      </div>
    </Router>,
  document.getElementById("root")
);

export default function useTitle(title: string, user: string) {
  useEffect(() => {
    if (user != "Введите ник") {
      document.title = `Checking repos of ${user}`;
    } else document.title = title;
  });
}
