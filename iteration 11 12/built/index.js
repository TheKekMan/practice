"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_dom_1 = require("react-dom");
var PagePromise = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require("./routes/Promise"); }); });
var PageAsync = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require("./routes/Async"); }); });
react_dom_1.default.render(react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
    react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Iteration 10"),
        react_1.default.createElement("h2", null, "Navigation:"),
        react_1.default.createElement("nav", null,
            react_1.default.createElement("ul", null,
                react_1.default.createElement("li", null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/async" }, "Async")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/promise" }, "Promise")))),
        react_1.default.createElement("hr", null),
        react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement("div", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...") },
            react_1.default.createElement(react_router_dom_1.Switch, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: "/promise", component: PagePromise }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/async", component: PageAsync }))))), document.getElementById("root"));
function useTitle(title, user) {
    (0, react_1.useEffect)(function () {
        if (user != 'Введите ник') {
            document.title = "Checking repos of " + user;
        }
        else
            document.title = title;
    });
}
exports.default = useTitle;
