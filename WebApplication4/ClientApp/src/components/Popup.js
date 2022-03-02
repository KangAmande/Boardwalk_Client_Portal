"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Popup = function (props) {
    return (React.createElement("div", { className: "popup-box" },
        React.createElement("div", { className: "box" },
            React.createElement("span", { className: "close-icon", onClick: props.handleClose }, "x"),
            props.content)));
};
exports.default = Popup;
//# sourceMappingURL=Popup.js.map