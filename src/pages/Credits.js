import { Container, Typography } from '@mui/material';

/**
 * The user page component page. The main components of the current page are rendered based on the query parameter.
 * On the left side a menu and on the right side the placeholder for the required pages.
 */
const Credits = () => {
    const refList = [
        ['Gray background image', ' ? ', 'https://www.toptal.com/designers/subtlepatterns/crossword'],
        [
            'Handsome young man installing bay window in a new house construction site. stock photo',
            'Sinenkiy',
            'https://www.istockphoto.com/photo/handsome-young-man-installing-bay-window-in-a-new-house-construction-site-gm1424188431-468986094',
        ],
        [
            'Handsome young man installing bay window in a new house construction site. stock photo',
            'yunava1',
            'https://www.istockphoto.com/photo/handsome-young-man-installing-bay-window-in-a-new-house-construction-site-gm1424188431-468986094',
        ],
        ['Repair. stock photo', 'artisteer', 'https://www.istockphoto.com/photo/repair-gm849277858-139366071'],
        [
            'Plastic window line icons. Vector illustration include icon - double glazed, handyman, worker, measurement, installation outline pictogram for architecture. 64x64 Pixel Perfect, Editable Stroke stock illustration',
            'SirVectorr',
            'https://www.istockphoto.com/vector/plastic-window-line-icons-vector-illustration-include-icon-double-glazed-handyman-gm1408006424-459004019',
        ],
        [
            'Website page interface abstract concept vector illustrations. stock illustration',
            'Visual Generation',
            'https://www.istockphoto.com/vector/website-page-interface-abstract-concept-vector-illustrations-gm1356368855-430558749?phrase=Login%2BBUilder',
        ],
        [
            'Group of business people stacking wooden gears top view stock photo',
            'megaflopp',
            'https://www.istockphoto.com/photo/group-of-business-people-stacking-wooden-gears-top-view-gm1303855121-395186962?phrase=professional%2Bpeople&searchscope=image%2Cfilm',
        ],
        ['Gray metallic window isolated on white background stock photo', 'tiler84', 'https://www.istockphoto.com/photo/gray-metallic-window-isolated-on-white-background-gm539837354-96286685'],
        [
            'Gray metallic window isolated on white background stock photo',
            'tiler84',
            'https://www.istockphoto.com/photo/gray-metallic-window-isolated-on-white-background-gm514510718-88136563?phrase=window',
        ],

        [
            'Mosquito window screens on white background stock photo',
            'superb photo',
            'https://www.istockphoto.com/photo/mosquito-window-screens-on-white-background-gm1194654306-340253792?phrase=insect%2Bnets%2Bwindow',
        ],

        [
            'Window shutter isolated on white background stock photo',
            'nameTorsakarinLink',
            'https://www.istockphoto.com/photo/window-shutter-isolated-on-white-background-gm1003202436-271039152?phrase=window%2Broller%2Bshutters',
        ],

        ['Modern living room interior. stock photo', 'vicnt', 'https://www.istockphoto.com/photo/modern-living-room-interior-gm1169134144-323068345'],
        ['Newly built houses in rows stock photo', 'Lichtwolke', 'https://www.istockphoto.com/photo/newly-built-houses-in-rows-gm1217413664-355361313'],
        ['Houses with fence in Old city center in Vilnius stock photo', 'RomanBabakin', 'https://www.istockphoto.com/photo/houses-with-fence-in-old-city-center-in-vilnius-gm1146063058-308692132'],
        [
            'The process of removing an old wooden window from an opening in a house before replacing it with a new one. stock photo',
            'photovs',
            'https://www.istockphoto.com/photo/the-process-of-removing-an-old-wooden-window-from-an-opening-in-a-house-before-gm1293794830-388065392?phrase=construction%2Bworkers%2Bwindows&searchscope=image%2Cfilm',
        ],
        [
            'Man in a blue shirt does window installation stock photo',
            'galitskaya',
            'https://www.istockphoto.com/photo/man-in-a-blue-shirt-does-window-installation-gm1086181084-291429542?phrase=construction%2Bworkers%2Bwindows&searchscope=image%2Cfilm',
        ],
        ['Electrician prepare to wire electric system. stock photo', 'Sinenkiy', 'https://www.istockphoto.com/photo/electrician-prepare-to-wire-electric-system-gm1397674722-452028406'],
        ['Despite being in Bangkok, outside my apartment window was a small field. The morning fog covered it beautifully each day.', 'Hannah Tims', 'https://unsplash.com/photos/2cZYUA1AwnQ'],
        ['An old house near the lake inside Hyde Park, London. The flowers and all the green around create a beautiful view.', 'Peter Boccia', 'https://unsplash.com/photos/vQVWSCx8lbQ'],

        ['Editorial, Architecture & Interiors', 'Bernard Hermant', 'https://unsplash.com/photos/KqOLr8OiQLU'],
        ['Joan Oger', 'LRDG IMAGE', 'https://unsplash.com/photos/6ixmm8Tzox8'],
        ['Maciej Drążkiewicz', 'Format office building located in Gdańsk, in Poland, designed by APA Wojciechowski for Torus.', 'https://unsplash.com/photos/hwIoch2gp_w'],
    ];

    return (
        <Container
            sx={{
                marginTop: { xxs: '4rem', sm: '5rem', lg: '7rem' },
                marginBottom: { xxs: '4rem', sm: '5rem', lg: '7rem' },
            }}
        >
            {refList.map((e) => {
                return (
                    <Typography mb={1}>
                        {`${e[0]} by ${e[1]} via the following link -`}
                        <Typography href={e[1]} component={'a'} color="red">
                            {e[2]}
                        </Typography>
                    </Typography>
                );
            })}
            <Typography>
                Image by{' '}
                <Typography href={''} component={'a'}>
                    []
                </Typography>{' '}
                via{' '}
            </Typography>
        </Container>
    );
};

export default Credits;
