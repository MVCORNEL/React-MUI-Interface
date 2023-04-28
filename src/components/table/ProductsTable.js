import CustomTable from './customTable/CustomTable';

const ProductsTable = () => {
    //HEADER
    const headCells = [
        {
            id: 'name',
            numeric: false,
            disablePadding: true,
            label: 'Product',
        },
        {
            id: 'category',
            numeric: false,
            disablePadding: false,
            label: 'Category',
        },
        {
            id: 'rate',
            numeric: true,
            disablePadding: false,
            label: 'Rate',
        },
        {
            id: 'reviews',
            numeric: true,
            disablePadding: false,
            label: 'Reviews count',
        },
        {
            id: 'images',
            numeric: false,
            disablePadding: false,
            label: 'Images count',
        },
    ];

    const rows = [
        { name: 'Glaxed Windows', category: 'windows', rate: 5, reviews: 29, images: 3 },
        { name: 'Dobule Glazed Doors', category: 'windows', rate: 2, reviews: 29, images: 3 },
        { name: 'Winwow Sills', category: 'windows', rate: 3, reviews: 29, images: 3 },
        { name: 'Balcony Doors', category: 'windows', rate: 3, reviews: 29, images: 3 },
        { name: 'Protection Nets', category: 'windows', rate: 3, reviews: 29, images: 3 },
    ];

    return <CustomTable tableName="Products" headCells={headCells} rows={rows} />;
};

export default ProductsTable;
