import { Fragment } from 'react';
import HeaderProduct from '../layout/header/product/HeaderProduct';
import * as React from 'react';
import Container from '@mui/material/Container';
import SectionBox from '../ui/SectionBox';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import img1 from './../images/gallery1.jpg';
import img2 from './../images/gallery2.jpg';
import img3 from './../images/gallery3.jpg';

const Product = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Fragment>
            <HeaderProduct />
        </Fragment>
    );
};

export default Product;
