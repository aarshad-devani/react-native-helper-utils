"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeepCompareEffectNoCheck = exports.useDeepCompareMemoize = exports.equals = exports.isInDev = void 0;
const react_1 = require("react");
exports.isInDev = __DEV__;
const equals = (a, b) => {
    if (a === b)
        return true;
    if (a instanceof Date && b instanceof Date)
        return a.getTime() === b.getTime();
    if (!a || !b || (typeof a !== "object" && typeof b !== "object"))
        return a === b;
    if (a.prototype !== b.prototype)
        return false;
    const keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length)
        return false;
    return keys.every((k) => (0, exports.equals)(a[k], b[k]));
};
exports.equals = equals;
function checkDeps(deps) {
    if (!deps || !deps.length) {
        throw new Error("useDeepCompareEffect should not be used with no dependencies. Use React.useEffect instead.");
    }
    if (deps.every(isPrimitive)) {
        throw new Error("useDeepCompareEffect should not be used with dependencies that are all primitive values. Use React.useEffect instead.");
    }
}
function isPrimitive(val) {
    return val == null || /^[sbn]/.test(typeof val);
}
/**
 * @param value the value to be memoized (usually a dependency list)
 * @returns a memoized version of the value as long as it remains deeply equal
 */
function useDeepCompareMemoize(value) {
    const ref = (0, react_1.useRef)(value);
    const signalRef = (0, react_1.useRef)(0);
    if (!(0, exports.equals)(value, ref.current)) {
        ref.current = value;
        signalRef.current += 1;
    }
    return (0, react_1.useMemo)(() => ref.current, [signalRef.current]);
}
exports.useDeepCompareMemoize = useDeepCompareMemoize;
function useDeepCompareEffect(callback, dependencies) {
    // eslint-disable-next-line
    if (exports.isInDev) {
        checkDeps(dependencies);
    }
    return (0, react_1.useEffect)(callback, useDeepCompareMemoize(dependencies));
}
function useDeepCompareEffectNoCheck(callback, dependencies) {
    return (0, react_1.useEffect)(callback, useDeepCompareMemoize(dependencies));
}
exports.useDeepCompareEffectNoCheck = useDeepCompareEffectNoCheck;
exports.default = useDeepCompareEffect;
//# sourceMappingURL=useDeepCompareEffect.js.map