import Divider from '@mui/material/Divider';
import { Stack } from '@mui/material';
import ProductSubHeaderItem from './ProductSubHeaderItem';
import features from './../../../consts/productFeature';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
/**
 * Represents a list of feature cahracteristics elements (fully responsive).
 *
 * @prop {array} characteristics - expects a list of object
 */
const SubHeader = () => {
    const theme = useTheme();
    //All devices smaller that 600px
    const isVerySmallDevice = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Stack
            width="100%"
            direction={{ xxs: 'column', sm: 'row' }}
            justifyContent="space-around"
            backgroundColor="rgba(255,255,255,.99)"
            mt={6}
            textAlign={'start'}
            spacing={4}
            p={7}
            sx={{
                boxShadow: '1px 1px 1px 1px #888',
            }}
            divider={isVerySmallDevice ? <Divider flexItem orientation="horizontal" /> : <Divider flexItem orientation="vertical" />}
        >
            {/* LIST */}
            {features.map((feature) => {
                return <ProductSubHeaderItem key={feature.id} title={feature.title} icon={feature.icon} />;
            })}
        </Stack>
    );
};

export default SubHeader;
