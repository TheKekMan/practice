import React from "react";
import Repos from "../components/repos";

class Async extends React.Component {
  constructor(props) {
    super(props);
    this.setUser = this.setUser.bind(this);
    this.state = { repos: [], user: "" };
  }
  setUser(user1) {
    this.setState({ user: user1 });
  }
  componentDidUpdate(){
    if(this.state.user){
      document.title = `Checking repos of ${this.state.user}`;
    }
    else document.title = `Test Async/await`;
  }
  componentDidMount(){
    document.title = `Test Async/await`;
  }

  user;
  button = async () => {
    let url = `https://api.github.com/users/${this.state.user}/repos`;
    try {
      let response = await fetch(url);
      if (response.status >= 200 && response.status < 300) {
        let repodata = await response.json();
        if (repodata.length > 0) {
          this.setState({ repos: repodata });
        } else {
          let error = new Error("Репозитории отсутствуют");
          throw error;
        }
      } else {
        let error = new Error(response.status + " " + response.statusText);
        throw error;
      }
    } catch (err) {
      alert("Error: " + err.message);
      this.setState({ repos: [] });
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
            {this.state.repos.map((repos) => (
              <Repos
                key={repos.id}
                name={repos.name}
                createdAt={new Date(repos.created_at).toLocaleDateString()}
                description={repos.description}
                url={repos.html_url}
              />
            ))}
          </div>
        </section>
        <hr />
      </div>
    );
  }
}

export default Async;
