"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Popup = void 0;
var React = require("react");
require("./Popup.css");
var Popup = function (_a) {
    var handleClose = _a.handleClose, show = _a.show, children = _a.children;
    var showHideClassName = show ? "modal display-block" : "modal display-none";
    return (React.createElement("div", { className: showHideClassName },
        React.createElement("section", { className: "modal-main" },
            children,
            React.createElement("button", { type: "button" }, "Download"),
            React.createElement("button", { type: "button", onClick: handleClose }, "Close"))));
};
exports.Popup = Popup;
//# sourceMappingURL=Popup.js.map