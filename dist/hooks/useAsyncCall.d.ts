export declare const useAsyncCall: <T = any>(name: string, promiseCall: () => Promise<T>, defaultData?: T | undefined, autoExecuteOnMount?: boolean, openInLoad?: boolean) => {
    isLoading: boolean;
    error: undefined;
    data: T | undefined;
    getData: () => Promise<T>;
    executeAgain: () => void;
};
