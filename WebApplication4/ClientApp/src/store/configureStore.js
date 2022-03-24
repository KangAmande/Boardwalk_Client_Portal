"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
var connected_react_router_1 = require("connected-react-router");
var _1 = require("./");
function configureStore(history, initialState) {
    var middleware = [
        redux_thunk_1.default,
        (0, connected_react_router_1.routerMiddleware)(history)
    ];
    var rootReducer = (0, redux_1.combineReducers)(__assign(__assign({}, _1.reducers), { router: (0, connected_react_router_1.connectRouter)(history) }));
    var enhancers = [];
    var windowIfDefined = typeof window === 'undefined' ? null : window;
    if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
    }
    return (0, redux_1.createStore)(rootReducer, initialState, redux_1.compose.apply(void 0, __spreadArray([redux_1.applyMiddleware.apply(void 0, middleware)], enhancers, false)));
}
exports.default = configureStore;
//# sourceMappingURL=configureStore.js.map