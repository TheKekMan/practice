"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var index_1 = require("../index");
var repos_1 = require("../components/repos");
function Promise() {
    var _a = (0, react_1.useState)('Введите ник'), user = _a[0], setUser = _a[1];
    var _b = (0, react_1.useState)(), repos = _b[0], setRepos = _b[1];
    (0, index_1.default)('Testing Promise', user);
    var isFocused;
    var button = (0, react_1.useCallback)(function (user1) {
        var url = "https://api.github.com/users/" + user1 + "/repos";
        fetch(url)
            .then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.status + " " + response.statusText);
                throw error;
            }
        })
            .then(function (data) {
            if (data.length > 0) {
                var repodata = data;
                setRepos(repodata);
            }
            else {
                var error = new Error("Репозитории отсутствуют");
                throw error;
            }
        })
            .catch(function (err) {
            alert("Error: " + err.message);
            setRepos([]);
        });
    }, [user]);
    return react_1.default.createElement("div", {
        className: "Promise",
    }, react_1.default.createElement("section", {
        id: "promise",
    }, react_1.default.createElement("h2", null, "Promise:"), react_1.default.createElement("input", {
        type: "text",
        name: "user",
        id: "user",
        value: user,
        onFocus: function () { return isFocused ? isFocused = true : setUser(""); },
        onChange: function (event) { return setUser(event.target.value); }
    }), react_1.default.createElement("button", {
        id: "submit",
        onClick: function () { return button(user); },
    }, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C"), react_1.default.createElement("h3", null, "\u0420\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F:"), react_1.default.createElement("div", {
        id: "repos",
    }, repos.map(function (repos) { return react_1.default.createElement(repos_1.default, {
        key: repos.id,
        name: repos.name,
        createdAt: new Date(repos.created_at).toLocaleDateString(),
        description: repos.description,
        url: repos.html_url
    }); }))), react_1.default.createElement("hr", null));
}
exports.default = Promise;
