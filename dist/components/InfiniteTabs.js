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
exports.InfiniteTabs = exports.ClickableTabItem = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const styles_1 = require("../styles");
const styles = react_native_1.StyleSheet.create({
    wrapFlex: {
        flexWrap: "wrap",
    },
    indicatorBar: {
        height: 3,
        width: "100%",
        alignSelf: "center",
        backgroundColor: "white",
    },
    topBar: {
        position: "absolute",
        top: 0,
        left: 0,
    },
    bottomBar: {
        position: "absolute",
        bottom: 0,
        left: 0,
    },
    centeredItem: {
        justifyContent: "center",
        alignItems: "center",
    },
});
const ClickableTabItem = (props) => {
    const animation = react_1.default.useRef(new react_native_1.Animated.Value(0)).current;
    react_1.default.useEffect(() => {
        react_native_1.Animated.spring(animation, {
            toValue: props.active ? 1 : 0,
            friction: 10,
            useNativeDriver: true,
        }).start();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.active]);
    return (<react_native_1.View style={[
            styles_1.CommonStyles.marginHorizontal10,
            react_native_1.StyleSheet.compose({}, props.active ? props.tabItemContainerStyle?.active : props.tabItemContainerStyle?.inactive),
        ]}>
      {props.indicatorPlacement === "top" && (<react_native_1.Animated.View style={[
                { transform: [{ scale: animation }] },
                styles.indicatorBar,
                styles.topBar,
                react_native_1.StyleSheet.compose({}, props.active ? props.indicatorStyle?.active : props.indicatorStyle?.inactive),
            ]}/>)}
      <react_native_1.View style={[styles.centeredItem, styles_1.CommonStyles.margin5]}>
        <react_native_1.Text style={props.active ? props.textStyle?.active : props.textStyle?.inactive}>{props.text}</react_native_1.Text>
      </react_native_1.View>
      {props.indicatorPlacement === "bottom" && (<react_native_1.Animated.View style={[
                { transform: [{ scale: animation }] },
                styles.indicatorBar,
                styles.bottomBar,
                react_native_1.StyleSheet.compose({}, props.active ? props.indicatorStyle?.active : props.indicatorStyle?.inactive),
            ]}/>)}
    </react_native_1.View>);
};
exports.ClickableTabItem = ClickableTabItem;
const InfiniteTabs = (props) => {
    const [selectedTab, setSelectedTab] = react_1.default.useState(props.activeTab ?? props.tabs[0]);
    const flatListRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (props.activeTab && props.keyExtractor(props.activeTab) !== props.keyExtractor(selectedTab)) {
            setSelectedTab(props.activeTab);
            flatListRef.current && flatListRef.current.scrollToItem({ animated: true, item: props.activeTab });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.activeTab]);
    const SelectTab = (tabItem) => () => {
        setSelectedTab(tabItem);
        props.onTabClick(tabItem);
    };
    if (props.spanFull) {
        return (<react_native_1.View style={[styles_1.CommonStyles.row, styles_1.CommonStyles.horizontalAlignFlex]}>
        {props.tabs.map((item, i) => (<react_native_1.View style={[styles_1.CommonStyles.flex]} key={i}>
            <react_native_1.Pressable onPress={SelectTab(item)}>
              {props.render ? (props.render(item, i, selectedTab ? item[props.keyProperty] === selectedTab[props.keyProperty] : false)) : (<exports.ClickableTabItem indicatorPlacement={props.indicatorPlacement ?? "bottom"} text={item[props.displayProperty]} active={selectedTab ? item[props.keyProperty] === selectedTab[props.keyProperty] : false} textStyle={props.textStyle} indicatorStyle={props.indicatorStyle} tabItemContainerStyle={props.tabItemContainerStyle}/>)}
            </react_native_1.Pressable>
          </react_native_1.View>))}
      </react_native_1.View>);
    }
    return (<react_native_1.FlatList ref={flatListRef} style={{ flexGrow: 0, minHeight: 30 }} horizontal={true} data={props.tabs} showsHorizontalScrollIndicator={false} 
    // renderScrollComponent={false}
    renderItem={({ item, index }) => (<react_native_1.Pressable onPress={SelectTab(item)}>
          {props.render ? (props.render(item, index, selectedTab ? item[props.keyProperty] === selectedTab[props.keyProperty] : false)) : (<exports.ClickableTabItem text={item[props.displayProperty]} active={selectedTab ? item[props.keyProperty] === selectedTab[props.keyProperty] : false} textStyle={props.textStyle} indicatorStyle={props.indicatorStyle} tabItemContainerStyle={props.tabItemContainerStyle}/>)}
        </react_native_1.Pressable>)} keyExtractor={props.keyExtractor}/>);
};
exports.InfiniteTabs = InfiniteTabs;
//# sourceMappingURL=InfiniteTabs.js.map