import * as React from 'react';
import { useState } from 'react';
import { Pagination, Container, Box } from '@mui/material';
import SectionBox from '../../ui/SectionBox';
import PortofolioMenu from './PortofolioMenu';
import PortofolioGrid from './PortofolioGrid';
import { categories, imageList } from './../../consts/portofolioDetails';

/**
 * Represents the gallery's grid component of images, with a group of sorting buttons, and a pagination component
 *
 */
const PortofolioTopic = () => {
    const [page, setPage] = useState(1);

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    return (
        <SectionBox>
            {/* MENU */}
            {/* <PortofolioMenu menuItems={categories} /> */}
            {/* IMAGE GALLERY */}
            <PortofolioGrid imageList={imageList} />
            {/* PAGINATION */}
            {/* <Box display="flex" justifyContent="center" my={8}>
                <Pagination variant="outlined" color="primary" count={10} page={page} onChange={handleChangePage} />
            </Box> */}
        </SectionBox>
    );
};

export default PortofolioTopic;
