//https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599870#overview Inspired from
import { useCallback, useState } from 'react';

/**
 * Reusable configurable custom hook used to send request to the server, receive and process returned data.
 * Has 3 current state, loading, hassError, and normal.
 * @param {function} requestConfiguration expects a function that will never re-evaluate, returning a configuration request componenets
 * @param {function} processData process the fetched data function, into a more desirable format
 * @param {boolean} withCredentials does the request sends http cookies to the server
 * @returns
 */
const useHttp = (requestConfiguration, processData, extra = {}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(null);
    const [data, setData] = useState({});

    const sendRequest = useCallback(
        async () => {
            //start loading
            setIsLoading(true);
            //clear previous error
            setHasError(null);
            try {
                const config = requestConfiguration();
                const response = await fetch(config.url, {
                    method: config.method ? config.method : 'GET',
                    headers: config.headers ? config.headers : {},
                    body: config.body ? config.body : null,
                    ...extra,
                });
                //Parse json as Javascript object
                const data = await response.json();
                //Display user the fail code
                if (data?.status === 'fail') {
                    setHasError(data.message);
                    return;
                }
                //Display the error page from router
                if (data?.status === 'error') {
                    throw new Error(data.message);
                }
                //Processing data in the required format
                const processedData = processData(data.data);
                setData(processedData);
            } catch (err) {
                setHasError(err.message);
            } finally {
                setIsLoading(false);
            }
        },
        //Again here is a problem we need to make sure that all the data passed into this components do not change re-render, to avoid infinite loop
        [requestConfiguration, processData]
    );

    return { data, hasError, isLoading, sendRequest };
};

export default useHttp;
