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
        <ImageList sx={{ height: 'auto' }} cols={isSmallDevice ? 2 : 4} gap={2} variant="quilted">
            {imageList.map((item, index) => {
                console.log(item.title);
                return (
                    <ImageListItem key={index} cols={item.cols || 1} rows={item.rows || 1}>
                        <img src={`${item.image}`} alt={item.title} />
                    </ImageListItem>
                );
            })}
        </ImageList>
    );
};

export default PortofolioGrid;
