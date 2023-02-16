import { useEffect } from "react";
export declare const isInDev: boolean;
type UseEffectParams = Parameters<typeof useEffect>;
type EffectCallback = UseEffectParams[0];
type DependencyList = UseEffectParams[1];
type UseEffectReturn = ReturnType<typeof useEffect>;
export declare const equals: (a: any, b: any) => boolean;
/**
 * @param value the value to be memoized (usually a dependency list)
 * @returns a memoized version of the value as long as it remains deeply equal
 */
export declare function useDeepCompareMemoize<T>(value: T): T;
declare function useDeepCompareEffect(callback: EffectCallback, dependencies: DependencyList): UseEffectReturn;
export declare function useDeepCompareEffectNoCheck(callback: EffectCallback, dependencies: DependencyList): UseEffectReturn;
export default useDeepCompareEffect;
