import React from "react";
import ReactDOM from "react-dom";

class Async extends React.Component {
    constructor(props){
        super(props);
        this.setUser = this.setUser.bind(this);
    }
    setUser(user){
        this.user= user;
    }
    user;
    repos;
    button = async () => {
        let url = `https://api.github.com/users/${this.user}/repos`;
        try{
            let response = await fetch(url);
            if (response.status >= 200 && response.status < 300) {
                let repodata = await response.json();
                if(repodata.length > 0){
                    this.repos = repodata
            .map(
              (repodata) =>
                repodata.name +
                " Создан: " +
                new Date(repodata.created_at).toLocaleDateString() +
                " Описание: " +
                repodata.description
            )
            .join("\n");
            const listRepos = React.createElement(
                "pre",
                {
                  id: "repos",
                },
                this.repos
              );
          ReactDOM.render(listRepos, document.getElementById("repos"));
                }
                else {
                    let error = new Error('Репозитории отсутствуют');
                    throw error;
                }
            } else {
                let error = new Error(response.status + ' ' + response.statusText);
                throw error
            }
        } 
        catch(err){
            alert('Error: ' + err.message);
        }
    }
    render(){
    return (
      <div className="Async">
      <section id="asyncawait">
        <h2>async/await:</h2>
        <input type="text" name="user" id="user1" value={this.user} onChange = {(event) => this.setUser(event.target.value)} onFocus={() => this.setUser("")}></input>
        <button id="submit1" onClick = {this.button}>Получить</button>
        <h3>Репозитории пользователя:</h3>
        <div id="repos"></div>
      </section>
      <hr />
      </div>
    );
  }
 
}
  

export default Async;