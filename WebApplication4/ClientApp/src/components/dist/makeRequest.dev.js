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

var react_redux_1 = require("react-redux");

var Sidebarmr_1 = require("./Sidebarmr");

var ClientBuildingInfoStore = require("../store/ClientBuildingInfo");

var Accordion_1 = require("./Accordion");

var NavMenu_1 = require("./NavMenu");

var makeRequest =
/** @class */
function (_super) {
  __extends(makeRequest, _super);

  function makeRequest() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  makeRequest.prototype.componentDidMount = function () {
    this.ensureDataFetched();
  }; // This method is called when the route parameters change


  makeRequest.prototype.componentDidUpdate = function () {
    this.ensureDataFetched();
  };

  makeRequest.prototype.ensureDataFetched = function () {
    var startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
    this.props.requestClientBuildingInfo(startDateIndex);
  };

  makeRequest.prototype.showClientBuildingInfo = function () {
    console.log(this.props.ClientBuildingInfo);
    return React.createElement("div", null, this.props.ClientBuildingInfo.map(function (d, index) {
      return React.createElement("div", null, React.createElement(Accordion_1.CustomAccordion, {
        key: index,
        title: "Location",
        content: React.createElement("div", null, React.createElement("p", null, "primary operation : ", d.primaryOperation), React.createElement("p", null, "city : ", d.city), React.createElement("p", null, "street : ", d.street), React.createElement("p", null, "postal code : ", d.postalCode))
      }), React.createElement("br", null));
    }));
  };

  makeRequest.prototype.render = function () {
    return React.createElement(React.Fragment, null, React.createElement(NavMenu_1["default"], null), React.createElement("div", {
      className: 'row'
    }, React.createElement("div", {
      className: 'col-4'
    }, React.createElement(Sidebarmr_1["default"], null)), React.createElement("div", {
      className: 'col-8',
      id: 'mr1add'
    }, React.createElement("h1", null, "Add New Location/Building"), React.createElement("form", null, React.createElement("input", {
      type: 'text',
      placeholder: 'Building Type'
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: 'text',
      placeholder: 'Street'
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: 'text',
      placeholder: 'City'
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: 'text',
      placeholder: 'Postal Code'
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: 'text',
      placeholder: 'Primary Operation'
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: 'text',
      placeholder: 'Building Construction'
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: 'text',
      placeholder: 'Wall Construction'
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: 'text',
      placeholder: 'Floor Construction'
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: 'text',
      placeholder: 'Sprinklered'
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: 'text',
      placeholder: 'Deck Connection'
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: 'text',
      placeholder: 'Roof Covering'
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: 'text',
      placeholder: 'Size sqft'
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: 'text',
      placeholder: 'Number of Storeys'
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: 'text',
      placeholder: 'Year Built'
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: 'text',
      placeholder: 'Construction Type'
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: 'text',
      placeholder: 'Alarm'
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: 'text',
      placeholder: 'Mortgage'
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: 'submit',
      value: 'submit'
    })), React.createElement("br", null), React.createElement("br", null), this.showClientBuildingInfo())));
  };

  return makeRequest;
}(React.PureComponent);

;
exports["default"] = react_redux_1.connect(function (state) {
  return state.ClientBuildingInfo;
}, ClientBuildingInfoStore.actionCreators)(makeRequest);