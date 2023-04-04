import { Container, Box } from '@mui/system';
import { Fragment } from 'react';
import backgroundLight from './../images/subtlelight.png';

/**
 * Represents a white/gray wrapper box  used to wrap section components.
 * Its background color is be given by the isGray boolean value.
 *
 * @prop {component} children - the wrapped component within the section box
 * @prop {boolean} isGray - used to determine the value of the container
 *
 */

const SectionBox = ({ children, isGray }) => {
    // CONTAINER GET FUNCTION
    const getContainer = (content) => {
        return (
            <Container
                component="section"
                sx={{
                    paddingTop: { xs: '4rem', sm: '5rem', md: '7rem', lg: '10rem' },
                    paddingBottom: { xs: '4rem', sm: '5rem', md: '7rem', lg: '10rem' },
                    backgroundImage: isGray ? `url(${backgroundLight})` : 'none',
                }}
            >
                {content}
            </Container>
        );
    };
    return (
        <Fragment>
            {/* GRAY BOX */}
            {isGray && (
                <Box
                    sx={{
                        backgroundImage: `url(${backgroundLight})`,
                    }}
                >
                    {getContainer(children)}
                </Box>
            )}
            {/* SIMPLE BOX */}
            {!isGray && getContainer(children)}
        </Fragment>
    );
};

export default SectionBox;
