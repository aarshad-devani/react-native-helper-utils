"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeProviders = void 0;
const react_1 = __importDefault(require("react"));
const composeProviders = (Providers) => (Child) => (props) => Providers.reverse().reduce((acc, Provider) => <Provider>{acc}</Provider>, <Child {...props}/>);
exports.composeProviders = composeProviders;
//# sourceMappingURL=ComposeProviders.js.map