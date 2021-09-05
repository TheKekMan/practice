import React, { useState, useCallback } from "react";
import useTitle from "../index";
import Repos from "../components/repos";



function Promise() {
  const [user, setUser] = useState('Введите ник');
  const [repos, setRepos] = useState([]);
  useTitle('Testing Promise', user);


  let isFocused;
  const button = useCallback((user1) => {
    let url = `https://api.github.com/users/${user1}/repos`;
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        } else {
          let error = new Error(response.status + " " + response.statusText);
          throw error;
        }
      })
      .then((data) => {
        if (data.length > 0) {
          var repodata = data;
          setRepos(repodata);
        } else {
          let error = new Error("Репозитории отсутствуют");
          throw error;
        }
      })
      .catch((err) => {
        alert("Error: " + err.message)
        setRepos([])
    })
  },[user]);
  return React.createElement(
    "div",
    {
      className: "Promise",
    },
    React.createElement(
      "section",
      {
        id: "promise",
      },
      React.createElement("h2", null, "Promise:"),
      React.createElement("input", {
        type: "text",
        name: "user",
        id: "user",
        value: user,
        onFocus: () => isFocused ? isFocused=true:setUser(""),
        onChange: (event) => setUser(event.target.value)
      }),
      React.createElement(
        "button",
        {
          id: "submit",
          onClick: ()=> button(user),
        },
        "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C"
      ),
      React.createElement(
        "h3",
        null,
        "\u0420\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F:"
      ),
      React.createElement("div", {
        id: "repos",
      },repos.map(repos => React.createElement(Repos, {
        key: repos.id,
        name: repos.name,
        createdAt: new Date(repos.created_at).toLocaleDateString(),
        description: repos.description,
        url: repos.html_url
      })))
    ),
    React.createElement("hr", null)
  );
}

export default Promise;
