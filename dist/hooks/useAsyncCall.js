"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAsyncCall = void 0;
const react_1 = require("react");
const useAsyncCall = (name, promiseCall, defaultData, autoExecuteOnMount = true, openInLoad = false) => {
    const [isLoading, setIsLoading] = (0, react_1.useState)(openInLoad ? true : false);
    const [data, setData] = (0, react_1.useState)(defaultData);
    const [error, setError] = (0, react_1.useState)();
    const executeCall = (0, react_1.useCallback)(() => {
        setIsLoading(true);
        return promiseCall()
            .then((resp) => {
            setData(resp);
            return resp;
        })
            .catch((err) => {
            console.error(`${name} failed exceuting`, err);
            setError(err);
            return Promise.reject(err);
        })
            .finally(() => {
            setIsLoading(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [promiseCall]);
    const ExecuteAsync = () => {
        executeCall();
    };
    (0, react_1.useEffect)(() => {
        autoExecuteOnMount && ExecuteAsync();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [executeCall]);
    return {
        isLoading,
        error,
        data,
        getData: executeCall,
        executeAgain: ExecuteAsync,
    };
};
exports.useAsyncCall = useAsyncCall;
//# sourceMappingURL=useAsyncCall.js.map