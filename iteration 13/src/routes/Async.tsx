import React from "react";
import Repos from "../components/repos";
import { store, ThemeContext } from "..";
import { connect, useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { getRepo } from '../actions';

class Async extends React.Component {
  state: any | string;
  setState: any;
  user: string | undefined;

  constructor(props: any) {
    super(props);
    this.setUser = this.setUser.bind(this);
    this.state = { repos: props.repos, user: "" };
  }
  setUser(user1: string) {
    this.setState({ user: user1 });
  }
  componentDidUpdate(prevProps: any) {
    if(prevProps !== this.props){
      if(store.getState().error != null){
        alert("Error: " + store.getState().error)
      }
      this.setState({repos: this.props }.repos)
    }
    if (this.state.user) {
      document.title = `Checking repos of ${this.state.user}`;
    } else document.title = `Test Async/await`;
  }
  componentDidMount() {
    document.title = `Test Async/await`;
  }

  button = async() => {
    if (typeof this.state.user !== "string") {
      let error = new Error("Некорректный формат данных");
      throw error;
    } else {
      store.dispatch(getRepo(this.state.user));
      console.log(this.state.repos);
      console.log(store.getState());
    }
  };
  
  render() {
    return (
      <div className="Async">
        <section id="asyncawait">
          <h2>async/await:</h2>
          <input
            type="text"
            name="user"
            id="user1"
            value={this.state.user}
            onChange={(event) => this.setUser(event.target.value)}
          ></input>
          <button id="submit1" onClick={this.button}>
            Получить
          </button>
          <h3>Репозитории пользователя:</h3>
          <div id="repos">
            {this.state.repos.map(
              (repos: {
                id: React.Key | null | undefined;
                name: any;
                created_at: string | number | Date;
                description: string;
                html_url: any;
              }) => (
                <ThemeContext.Consumer>
                {value => (
                <Repos
                  key={repos.id}
                  name={repos.name}
                  createdAt={new Date(repos.created_at).toLocaleDateString()}
                  description={repos.description}
                  url={repos.html_url}
                  theme={value}
                />
                )}
              </ThemeContext.Consumer>
              )
            )}
          </div>
        </section>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = function(state: any) {
  return {
    repos: state.repos
  }
}

export default connect(mapStateToProps)(Async);
