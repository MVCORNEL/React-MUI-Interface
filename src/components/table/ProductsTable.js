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
const ProductsTable = () => {
    // Functions that will return an request object configuration url,
    // this function will be passed as configuration for the useHttp custom hook.
    // Wrapped into useCallback hook, assuring that this function will not re-render when the current component re-evaluates
    // avoiding infinte loop problem, inside the useHttp custom hook.
    const ceateRequestConfigGetAll = useCallback(() => {
        return { url: `${URL}/api/v1/products` };
    }, []);

    //Function used to tranform data, coming from a request object into a list of desired product objects
    //Wrapped into useCallback hook, assuring that this function will not re-render when the current component re-evaluates
    //avoiding infinte loop problem, inside the useHttp custom hook.
    const tranformProducts = useCallback(
        (data) => {
            return data.map((product) => {
                return {
                    name: product.name,
                    category: product.category,
                    id: product._id,
                    rating: product.ratingsAverage,
                    reviews: product.ratingsQuantity,
                };
            });
        },

        []
    );

    //Fetch url custom hook
    const { data: rows, isLoading, hasError, sendRequest: fetchProducts } = useHttp(ceateRequestConfigGetAll, tranformProducts);

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
            label: 'Product',
            align: 'left',
        },
        {
            id: 'category',
            numeric: false,
            disablePadding: false,
            label: 'Category',
            align: 'left',
        },
        {
            id: 'id',
            numeric: true,
            disablePadding: false,
            label: 'Id',
            align: 'left',
        },

        {
            id: 'rating',
            numeric: true,
            disablePadding: false,
            label: 'Rate',
            align: 'left',
        },
        {
            id: 'reviews',
            numeric: true,
            disablePadding: false,
            label: 'Reviews count',
        },
    ];

    return (
        <Fragment>
            {!isLoading && <CustomTable tableName="Products" headCells={headCells} rows={rows} />}
            {isLoading && <p>Loading</p>}
            {!isLoading && hasError && <p>{hasError}</p>}
        </Fragment>
    );
};

export default ProductsTable;
