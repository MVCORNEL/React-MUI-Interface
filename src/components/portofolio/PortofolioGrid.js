import { ImageList, ImageListItem, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

/**
 * Represents a grid of images component.
 * For the devices smaller than xxs(360px) the grid has 1x columns, sm(900px) the grid has 2x columns,lg(900px) the grid has 3x columns, otherwise 4
 *
 * @prop {array} imageList  arrays of images
 */
const PortofolioGrid = ({ imageList }) => {
    //App theme use to get current theme breakpoints
    const theme = useTheme();
    //All devices smaller than 900px
    const isSmallDevice = useMediaQuery(theme.breakpoints.down('sm'));
    //Columns count
    return (
        <ImageList sx={{ height: 'auto' }} cols={isSmallDevice ? 2 : 6} gap={2} variant="quilted">
            {imageList.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img src={`${item.img}?w=164&h=164&fit=crop&auto=format`} srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} alt={item.title} loading="lazy" />
                </ImageListItem>
            ))}
        </ImageList>
    );
};

export default PortofolioGrid;
