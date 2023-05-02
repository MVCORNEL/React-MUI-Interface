import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import images from './../../consts/galleryItems';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * Represents a grid of images component.
 * For the devices smaller than md(900px) the grid has 2x columns, otherwise 3x
 *
 */
const GalleryGrid = () => {
    //App theme use to get current theme breakpoints
    const theme = useTheme();
    //All devices smaller that md
    const isMediumDevice = useMediaQuery(theme.breakpoints.down('md'));
    //All devices smaller that sm
    const isSmallDevice = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <ImageList sx={{ height: 'auto' }} cols={isSmallDevice ? 1 : isMediumDevice ? 2 : 3} rowHeight={isMediumDevice ? (isSmallDevice ? 150 : 225) : 300} gap={1} variant="quilted">
            {images.map((item) => (
                <ImageListItem key={item.img}>
                    <img src={`${item.img}`} alt={item.title} />
                </ImageListItem>
            ))}
        </ImageList>
    );
};

export default GalleryGrid;
