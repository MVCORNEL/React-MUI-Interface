import SectionBox from '../../ui/SectionBox';
import SectionHeading from '../../ui/SectionHeading';
import ProductsGrid from './ProductsGrid';
import { useEffect, useCallback } from 'react';
import useHttp from './../../hooks/useHttp';

/**
 * Products topic section component, consiting a Subheading (title,subtitle) and a fully responsive list of product cards
 */
const ProductsTopic = () => {
    /**
     *Function that will return an request object configuration url,
     *this function will be passed as configuration for the useHttp custom hook.
     *Wrapped into useCallback hook, assuring that this function will not re-render when the current component re-evaluates
     *avoiding infinte loop problem, inside the useHttp custom hook.
     *
     */
    const ceateRequestConfig = useCallback(() => {
        return { url: 'http://127.0.0.1:8000/api/v1/products' };
    }, []);

    /**
     *Function used to tranform data, coming from a request object into a list of desired product objects
     *Wrapped into useCallback hook, assuring that this function will not re-render when the current component re-evaluates
     *avoiding infinte loop problem, inside the useHttp custom hook.
     */
    const tranformProducts = useCallback((data) => {
        return data.map((product) => {
            return {
                id: product._id,
                name: product.name,
                category: product.category,
                summary: product.summary,
                description: product.description,
                imgUrl: product.imgUrl,
            };
        });
    }, []);

    //Fetch url custom hook
    const { data, isLoading, hasError, sendRequest: fetchProducts } = useHttp(ceateRequestConfig, tranformProducts);

    useEffect(() => {
        fetchProducts();
        //Function within the custom useHttp hook will set some states, when this function is called.
        //When ne states are set, the componenet where the useHttp hook is used re-renders, resulting into an infinite loop.
        //the work around useCallback hook
    }, [fetchProducts]);

    return (
        <SectionBox isGray={true}>
            <SectionHeading
                heading={'Produsele nostre'}
                subheading={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
            />
            {!isLoading && data.length > 0 && <ProductsGrid productList={data} />}
            {!isLoading && data.length === 0 && !hasError && <p>No products found</p>}
            {isLoading && <p>Loading</p>}
            {!isLoading && hasError && <p>{hasError}</p>}
        </SectionBox>
    );
};

export default ProductsTopic;
