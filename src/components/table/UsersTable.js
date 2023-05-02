import { Fragment } from 'react';
import CustomTable from './customTable/CustomTable';
import { useEffect, useCallback } from 'react';
import useHttp from './../../hooks/useHttp';
import URL from '../../consts/URL';
/**
 * Products admin table component, consiting into a Table that allow the Sorting/Editing,Deleting,Creating records
 * Using a custom http hook,data will be fetched and the table will be populated acordingly.
 *
 */
const UsersTable = () => {
    // Functions that will return an request object configuration url,
    // this function will be passed as configuration for the useHttp custom hook.
    // Wrapped into useCallback hook, assuring that this function will not re-render when the current component re-evaluates
    // avoiding infinte loop problem, inside the useHttp custom hook.
    const ceateRequestConfigGetAll = useCallback(() => {
        return { url: `${URL}/api/v1/users` };
    }, []);

    //Function used to return an request object configuration for cookie credentials, this function will be passed as configuration for the useHttp custom hook.
    //Wrapped inside the useCallback custom hook, this function ensures that it won't re-render when the current component is evaluated, preventing the issue with infinite loops.
    const extraConfigDetails = useCallback(() => {
        return { credentials: 'include', withCredentials: true };
    }, []);

    //Function used to tranform data, coming from a request object into a list of desired user objects
    //Wrapped into useCallback hook, assuring that this function will not re-render when the current component re-evaluates
    //avoiding infinte loop problem, inside the useHttp custom hook.
    const tranformProducts = useCallback((data) => {
        return data.map((user) => {
            return {
                lastName: user.lastName,
                email: user.email,
                phoneNumber: user.phoneNumber,
                id: user._id,
            };
        });
    }, []);

    //Fetch url custom hook
    const { data: rows, isLoading, hasError, sendRequest: fetchProducts } = useHttp(ceateRequestConfigGetAll, tranformProducts, extraConfigDetails());

    useEffect(() => {
        fetchProducts();
        //Function within the custom useHttp hook will set some states, when this function is called.
        //When ne states are set, the componenet where the useHttp hook is used re-renders, resulting into an infinite loop.
        //the work around useCallback hook
    }, [fetchProducts]);

    //HEADER
    const headCells = [
        {
            id: 'name',
            numeric: false,
            disablePadding: true,
            label: 'User',
            align: 'left',
        },
        {
            id: 'email',
            numeric: false,
            disablePadding: false,
            label: 'Email',
            align: 'left',
        },
        {
            id: 'phoneNumber',
            numeric: true,
            disablePadding: false,
            label: 'Phone',
            align: 'left',
        },
        {
            id: 'id',
            numeric: true,
            disablePadding: false,
            label: 'Id',
            align: 'right',
        },
    ];

    return (
        <Fragment>
            {!isLoading && <CustomTable tableName="Users" headCells={headCells} rows={rows} />}
            {isLoading && <p>Loading</p>}
            {!isLoading && hasError && <p>{hasError}</p>}
        </Fragment>
    );
};

export default UsersTable;
