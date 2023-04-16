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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
class Collapsible extends react_1.Component {
    unmounted = true;
    _animation = null;
    contentHandle = null;
    static defaultProps = {
        align: "top",
        collapsed: true,
        collapsedHeight: 0,
        enablePointerEvents: false,
        duration: 200,
        easing: "easeOutCubic",
        onAnimationEnd: () => null,
        renderChildrenCollapsed: true,
    };
    constructor(props) {
        super(props);
        this.state = {
            measuring: false,
            measured: false,
            height: new react_native_1.Animated.Value(props.collapsedHeight),
            contentHeight: 0,
            animating: false,
        };
    }
    componentDidUpdate(prevProps) {
        if (prevProps.collapsed !== this.props.collapsed) {
            this.setState({ measured: false }, () => this._componentDidUpdate(prevProps));
        }
        else {
            this._componentDidUpdate(prevProps);
        }
    }
    componentWillUnmount() {
        this.unmounted = true;
    }
    _componentDidUpdate(prevProps) {
        if (prevProps.collapsed !== this.props.collapsed) {
            this._toggleCollapsed(this.props.collapsed);
        }
        else if (this.props.collapsed && prevProps.collapsedHeight !== this.props.collapsedHeight) {
            this.state.height.setValue(this.props.collapsedHeight);
        }
    }
    _handleRef = (ref) => {
        this.contentHandle = ref;
    };
    _measureContent(callback) {
        this.setState({
            measuring: true,
        }, () => {
            requestAnimationFrame(() => {
                if (!this.contentHandle) {
                    this.setState({
                        measuring: false,
                    }, () => callback(this.props.collapsedHeight));
                }
                else {
                    let ref;
                    if (typeof this.contentHandle.measure === "function") {
                        ref = this.contentHandle;
                    }
                    else {
                        ref = this.contentHandle.getNode();
                    }
                    ref.measure((_x, _y, _width, height) => {
                        this.setState({
                            measuring: false,
                            measured: true,
                            contentHeight: height,
                        }, () => callback(height));
                    });
                }
            });
        });
    }
    _toggleCollapsed(collapsed) {
        if (collapsed) {
            this._transitionToHeight(this.props.collapsedHeight);
        }
        else if (!this.contentHandle) {
            if (this.state.measured) {
                this._transitionToHeight(this.state.contentHeight);
            }
            return;
        }
        else {
            this._measureContent((contentHeight) => {
                this._transitionToHeight(contentHeight);
            });
        }
    }
    _transitionToHeight(height) {
        const { duration } = this.props;
        // let easing = this.props.easing ?? "";
        // if (typeof easing === "string") {
        //   let prefix;
        //   let found = false;
        //   for (let i = 0; i < ANIMATED_EASING_PREFIXES.length; i++) {
        //     prefix = ANIMATED_EASING_PREFIXES[i];
        //     if (easing.substr(0, prefix.length) === prefix) {
        //       easing = easing.substr(prefix.length, 1).toLowerCase() + easing.substr(prefix.length + 1);
        //       prefix = prefix.substr(4, 1).toLowerCase() + prefix.substr(5);
        //       easing = Easing[prefix](Easing[easing || "ease"]);
        //       found = true;
        //       break;
        //     }
        //   }
        //   if (!found) {
        //     easing = Easing[easing];
        //   }
        //   if (!easing) {
        //     throw new Error('Invalid easing type "' + this.props.easing + '"');
        //   }
        // }
        if (this._animation) {
            this._animation.stop();
        }
        this.setState({ animating: true });
        this._animation = react_native_1.Animated.timing(this.state.height, {
            useNativeDriver: false,
            toValue: height ? height : 0,
            duration,
            // easing,
        }).start(() => {
            if (this.unmounted) {
                return;
            }
            this.setState({ animating: false }, () => {
                if (this.unmounted) {
                    return;
                }
                this.props.onAnimationEnd && this.props.onAnimationEnd();
            });
        });
    }
    _handleLayoutChange = (event) => {
        const contentHeight = event.nativeEvent.layout.height;
        if (this.state.animating ||
            this.props.collapsed ||
            this.state.measuring ||
            this.state.contentHeight === contentHeight) {
            return;
        }
        this.state.height.setValue(contentHeight);
        this.setState({ contentHeight });
    };
    render() {
        const { collapsed, enablePointerEvents, renderChildrenCollapsed } = this.props;
        const { height, contentHeight, measuring, measured, animating } = this.state;
        const hasKnownHeight = !measuring && (measured || collapsed);
        const style = hasKnownHeight && {
            overflow: "hidden",
            height: height,
        };
        const contentStyle = {};
        if (measuring) {
            contentStyle.position = "absolute";
            contentStyle.opacity = 0;
        }
        else if (this.props.align === "center") {
            contentStyle.transform = [
                {
                    translateY: height.interpolate({
                        inputRange: [0, contentHeight],
                        outputRange: [contentHeight / -2, 0],
                    }),
                },
            ];
        }
        else if (this.props.align === "bottom") {
            contentStyle.transform = [
                {
                    translateY: height.interpolate({
                        inputRange: [0, contentHeight],
                        outputRange: [-contentHeight, 0],
                    }),
                },
            ];
        }
        if (animating) {
            contentStyle.height = contentHeight;
        }
        const shouldRenderChildren = renderChildrenCollapsed || ((!collapsed || (collapsed && animating)) && (animating || measuring || measured));
        return (<react_native_1.Animated.View style={style} pointerEvents={!enablePointerEvents && collapsed ? "none" : "auto"}>
        <react_native_1.Animated.View ref={this._handleRef} style={[this.props.style, contentStyle]} onLayout={this.state.animating ? undefined : this._handleLayoutChange}>
          {shouldRenderChildren && this.props.children}
        </react_native_1.Animated.View>
      </react_native_1.Animated.View>);
    }
}
exports.default = Collapsible;
//# sourceMappingURL=Collapsible_Lib.js.map