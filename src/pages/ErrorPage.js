import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import Nav from './../layout/navigation/Navbar';
import Footer from './../layout/footer/Footer';
import PushFooterBottomBox from '../ui/PushFooterBottomBox';
import { Container } from '@mui/material';

//https://github.com/remix-run/react-router/discussions/9628
function ErrorPage() {
    //If a Response was thrown the errors object will include  a status field
    //Throwing Response instead of errors allows to include the extra status fields which heklp with bulding a generic handler
    let error = useRouteError();
    let title = 'An error occurred';
    let message = 'Something went wrong';

    // Server errors
    if (error?.status === 500) {
        message = error.data?.message;
    }
    // Default errors set by React Router, INSERTING INVALID URL FOR EXAMPLE
    if (error?.status === 404) {
        title = 'Not Found !';
        message = 'Could not find resource or page !';
    }

    //TODO
    return (
        <PushFooterBottomBox>
            <Nav />
            <Container>
                <h1>{error?.status}</h1>
                <p>{message}</p>
            </Container>
            <Footer />
        </PushFooterBottomBox>
    );
}

export default ErrorPage;
