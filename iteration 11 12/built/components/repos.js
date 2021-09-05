"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function Repos(props) {
    return (react_1.default.createElement("li", null,
        "Название: ",
        " ",
        react_1.default.createElement("a", { href: props.url },
            " ",
            props.name),
        " ",
        " Создан: " +
            props.createdAt +
            " Описание: " +
            props.description));
}
exports.default = Repos;
