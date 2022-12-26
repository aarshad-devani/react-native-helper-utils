"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const toast_1 = __importDefault(require("./toast"));
const { height, width } = react_native_1.Dimensions.get("window");
class ToastContainer extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            toasts: [],
        };
    }
    static defaultProps = {
        placement: "bottom",
        offset: 10,
        swipeEnabled: true,
    };
    /**
     * Shows a new toast. Returns id
     */
    show = (message, toastOptions) => {
        let id = toastOptions?.id || Math.random().toString();
        const onDestroy = () => {
            toastOptions?.onClose && toastOptions?.onClose();
            this.setState({ toasts: this.state.toasts.filter((t) => t.id !== id) });
        };
        requestAnimationFrame(() => {
            this.setState({
                toasts: [
                    {
                        id,
                        onDestroy,
                        message,
                        open: true,
                        onHide: () => this.hide(id),
                        ...this.props,
                        ...toastOptions,
                    },
                    ...this.state.toasts.filter((t) => t.open),
                ],
            });
        });
        return id;
    };
    /**
     * Updates a toast, To use this create you must pass an id to show method first, then pass it here to update the toast.
     */
    update = (id, message, toastOptions) => {
        this.setState({
            toasts: this.state.toasts.map((toast) => (toast.id === id ? { ...toast, message, ...toastOptions } : toast)),
        });
    };
    /**
     * Removes a toast from stack
     */
    hide = (id) => {
        this.setState({
            toasts: this.state.toasts.map((t) => (t.id === id ? { ...t, open: false } : t)),
        });
    };
    /**
     * Removes all toasts in stack
     */
    hideAll = () => {
        this.setState({
            toasts: this.state.toasts.map((t) => ({ ...t, open: false })),
        });
    };
    /**
     * Check if a toast is currently open
     */
    isOpen = (id) => {
        return this.state.toasts.some((t) => t.id === id && t.open);
    };
    renderBottomToasts() {
        const { toasts } = this.state;
        let { offset, offsetBottom } = this.props;
        let style = {
            bottom: offsetBottom || offset,
            width: width,
            justifyContent: "flex-end",
            flexDirection: "column",
        };
        return (<react_native_1.KeyboardAvoidingView behavior={react_native_1.Platform.OS === "ios" ? "position" : undefined} style={[styles.container, style]} pointerEvents="box-none">
        {toasts
                .filter((t) => !t.placement || t.placement === "bottom")
                .map((toast) => (<toast_1.default key={toast.id} {...toast}/>))}
      </react_native_1.KeyboardAvoidingView>);
    }
    renderTopToasts() {
        const { toasts } = this.state;
        let { offset, offsetTop } = this.props;
        let style = {
            top: offsetTop || offset,
            width: width,
            justifyContent: "flex-start",
            flexDirection: "column-reverse",
        };
        return (<react_native_1.KeyboardAvoidingView behavior={react_native_1.Platform.OS === "ios" ? "position" : undefined} style={[styles.container, style]} pointerEvents="box-none">
        {toasts
                .filter((t) => t.placement === "top")
                .map((toast) => (<toast_1.default key={toast.id} {...toast}/>))}
      </react_native_1.KeyboardAvoidingView>);
    }
    renderCenterToasts() {
        const { toasts } = this.state;
        let { offset, offsetTop } = this.props;
        let style = {
            top: offsetTop || offset,
            height: height,
            width: width,
            justifyContent: "center",
            flexDirection: "column-reverse",
        };
        const data = toasts.filter((t) => t.placement === "center");
        const foundToast = data.length > 0;
        if (!foundToast)
            return null;
        return (<react_native_1.KeyboardAvoidingView behavior={react_native_1.Platform.OS === "ios" ? "position" : undefined} style={[styles.container, style]} pointerEvents="box-none">
        {toasts
                .filter((t) => t.placement === "center")
                .map((toast) => (<toast_1.default key={toast.id} {...toast}/>))}
      </react_native_1.KeyboardAvoidingView>);
    }
    render() {
        return (<>
        {this.renderTopToasts()}
        {this.renderBottomToasts()}
        {this.renderCenterToasts()}
      </>);
    }
}
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 0,
        position: "absolute",
        maxWidth: "100%",
        zIndex: 999999,
        elevation: 999999,
        alignSelf: "center",
        ...(react_native_1.Platform.OS === "web" ? { overflow: "hidden" } : null),
    },
    message: {
        color: "#333",
    },
});
exports.default = ToastContainer;
//# sourceMappingURL=toast-container.js.map