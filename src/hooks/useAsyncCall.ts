import { useState, useEffect, useCallback } from "react";

export const useAsyncCall = <T = any>(
  name: string,
  promiseCall: () => Promise<T>,
  defaultData?: T,
  autoExecuteOnMount: boolean = true,
  openInLoad: boolean = false
) => {
  const [isLoading, setIsLoading] = useState<boolean>(openInLoad ? true : false);
  const [data, setData] = useState<T | undefined>(defaultData);
  const [error, setError] = useState();

  const executeCall = useCallback(() => {
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

  useEffect(() => {
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
