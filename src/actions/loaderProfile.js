import { json } from 'react-router-dom';
import URL from '../consts/URL';
/**
 * The current loader router function is used to sent fetch request ahd handle  data before a certain page/resource is accessed.
 * Instead of using the standard way of fecthing data , this functiona will automatically fetch data when a route component is accessed.
 * @returns The the fetched data otherwise throws the related errors
 */
const profileLoader = async ({ params }) => {
    //GET THE CURRENT USER
    let userData = await fetch(`${URL}/api/v1/users/getMe`, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
        credentials: 'include',
    });

    //4 Parse the data into js object.
    const user = await userData.json();

    //5 Propagate the fails further
    if (user.status === 'fail') {
        throw json({ message: user.message }, { status: user.status });
    }
    if (user.status === 'error') {
        throw json({ message: user.message }, { status: user.status });
    }

    return user.data.user;
};

export default profileLoader;
