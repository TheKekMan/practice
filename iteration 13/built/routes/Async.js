"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var repos_1 = require("../components/repos");
var Async = /** @class */ (function (_super) {
    __extends(Async, _super);
    function Async(props) {
        var _this = _super.call(this, props) || this;
        _this.button = function () { return __awaiter(_this, void 0, void 0, function () {
            var url, response, repodata, error, error, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "https://api.github.com/users/" + this.state.user + "/repos";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, fetch(url)];
                    case 2:
                        response = _a.sent();
                        if (!(response.status >= 200 && response.status < 300)) return [3 /*break*/, 4];
                        return [4 /*yield*/, response.json()];
                    case 3:
                        repodata = _a.sent();
                        if (repodata.length > 0) {
                            this.setState({ repos: repodata });
                        }
                        else {
                            error = new Error("Репозитории отсутствуют");
                            throw error;
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        error = new Error(response.status + " " + response.statusText);
                        throw error;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        err_1 = _a.sent();
                        alert("Error: " + err_1.message);
                        this.setState({ repos: [] });
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        _this.setUser = _this.setUser.bind(_this);
        _this.state = { repos: [], user: "" };
        return _this;
    }
    Async.prototype.setUser = function (user1) {
        this.setState({ user: user1 });
    };
    Async.prototype.componentDidUpdate = function () {
        if (this.state.user) {
            document.title = "Checking repos of " + this.state.user;
        }
        else
            document.title = "Test Async/await";
    };
    Async.prototype.componentDidMount = function () {
        document.title = "Test Async/await";
    };
    Async.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("div", { className: "Async" },
            react_1.default.createElement("section", { id: "asyncawait" },
                react_1.default.createElement("h2", null, "async/await:"),
                react_1.default.createElement("input", { type: "text", name: "user", id: "user1", value: this.state.user, onChange: function (event) { return _this.setUser(event.target.value); } }),
                react_1.default.createElement("button", { id: "submit1", onClick: this.button }, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C"),
                react_1.default.createElement("h3", null, "\u0420\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F:"),
                react_1.default.createElement("div", { id: "repos" }, this.state.repos.map(function (repos) { return (react_1.default.createElement(repos_1.default, { key: repos.id, name: repos.name, createdAt: new Date(repos.created_at).toLocaleDateString(), description: repos.description, url: repos.html_url })); }))),
            react_1.default.createElement("hr", null)));
    };
    return Async;
}(react_1.default.Component));
exports.default = Async;
