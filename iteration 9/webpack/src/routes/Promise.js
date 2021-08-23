import React, { useState } from "react";
import ReactDOM from "react-dom";

function Promise() {
  const [user, setUser] = useState("Введите ник");
  var repos = "";
  function button() {
    let url = `https://api.github.com/users/${user}/repos`;
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
          repos = repodata
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
                repos
              );
          ReactDOM.render(listRepos, document.getElementById("repos"));
        } else {
          let error = new Error("Репозитории отсутствуют");
          throw error;
        }
      })
      .catch((err) => alert("Error: " + err.message));
  }
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
        onFocus: () => setUser(""),
        onChange: (event) => setUser(event.target.value),
      }),
      React.createElement(
        "button",
        {
          id: "submit",
          onClick: button,
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
      })
    ),
    React.createElement("hr", null)
  );
}

export default Promise;
