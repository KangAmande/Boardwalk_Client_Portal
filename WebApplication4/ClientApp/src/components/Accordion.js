"use strict";
exports.__esModule = true;
exports.CustomAccordion = void 0;
// This File is used to make a dropdown which will be visible to Client too see their requests.
var React = require("react");
var Accordion_1 = require("@material-ui/core/Accordion");
var AccordionDetails_1 = require("@material-ui/core/AccordionDetails");
var Typography_1 = require("@material-ui/core/Typography");
var AccordionSummary_1 = require("@material-ui/core/AccordionSummary");
exports.CustomAccordion = function (_a) {
    var title = _a.title, content = _a.content;
    return (React.createElement("div", null,
        React.createElement(Accordion_1["default"], { style: { width: 400 } },
            React.createElement(AccordionSummary_1["default"], { "aria-controls": "panel1a-content" },
                React.createElement(Typography_1["default"], { style: {
                        fontWeight: 10
                    } }, title)),
            React.createElement(AccordionDetails_1["default"], null,
                React.createElement(Typography_1["default"], null, content)))));
};
