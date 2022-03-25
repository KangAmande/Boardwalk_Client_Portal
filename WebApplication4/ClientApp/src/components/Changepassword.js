"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var react_redux_1 = require("react-redux");
var AccountSidebar_1 = require("./AccountSidebar");
var nodemailer = require('nodemailer');
var Changepassword = /** @class */ (function (_super) {
    __extends(Changepassword, _super);
    function Changepassword() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Changepassword.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(AccountSidebar_1["default"], null)),
                React.createElement("div", { className: 'col-8' },
                    React.createElement("div", null,
                        React.createElement("form", { action: "/", method: "get" },
                            "Verification Code: ",
                            React.createElement("input", { type: "text", name: "" }),
                            React.createElement("input", { id: "clickMe", type: "button", value: "get verification code", onClick: send }),
                            React.createElement("input", { id: "clickMe", type: "button", value: "submit", onClick: checkverfy }))),
                    React.createElement("form", { action: "/", method: "get" },
                        "New Password: ",
                        React.createElement("input", { type: "password", name: "password" }),
                        React.createElement("input", { type: "submit", value: "Submit" }))))));
    };
    return Changepassword;
}(React.Component));
var num = 0;
function checkverfy() {
}
function verificationcode() {
    var str = "";
    for (var i = 0; i < 5; i++) {
        str += Math.round(Math.random() * 9);
    }
    num = Math.round(parseInt(str));
}
function send() {
    verificationcode();
    var config = {
        host: 'smtp.qq.com',
        port: 465,
        auth: {
            user: "694210383@qq.com",
            pass: "eogjnyohbevibbaj"
        }
    };
    var transporter = nodemailer.createTransport(config);
    var mail = {
        from: 'huang <694210383@qq.com>',
        subject: '激活验证码',
        to: 'jackhuang0330@gmail.com',
        text: num
    };
    transporter.sendMail(mail, function (error, info) {
        if (error) {
            return console.log(error);
        }
        transporter.close();
        console.log('mail sent:', info.response);
    });
}
exports["default"] = react_redux_1.connect()(Changepassword);
