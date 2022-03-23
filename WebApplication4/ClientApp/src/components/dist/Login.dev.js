"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

exports.__esModule = true;

var React = require("react");

var react_router_dom_1 = require("react-router-dom");

var reactstrap_1 = require("reactstrap");

require("./login.css");

var Login =
/** @class */
function (_super) {
  __extends(Login, _super);

  function Login() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Login.prototype.render = function () {
    // const history = useHistory();
    return React.createElement(reactstrap_1.Container, null, React.createElement("div", {
      className: 'login'
    }, React.createElement("h1", null, "Welcome to Client Portal"), React.createElement("br", null), React.createElement("label", null, "Email:", React.createElement("input", {
      type: "email",
      name: "email",
      placeholder: "abc@abc.com"
    })), React.createElement("br", null), React.createElement("br", null), React.createElement("label", null, "Password:", React.createElement("input", {
      type: "text",
      name: "password",
      placeholder: ""
    })), React.createElement("br", null), React.createElement("br", null), React.createElement(react_router_dom_1.Link, {
      to: "/home"
    }, "Login")));
  };

  return Login;
}(React.PureComponent);

exports["default"] = Login;

function useHistory() {
  throw new Error('Function not implemented.');
}