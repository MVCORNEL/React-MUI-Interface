import { useNavigate } from 'react-router-dom';
import { authActions } from '../../store/auth-slice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    console.log('Here');
    dispatch(authActions.logout());
    //replace true clear the Logout page from the history stack
    navigate('/', { replace: true });
  }, []);
  //TODO
  return <div>Spinner</div>;
};

export default Logout;
