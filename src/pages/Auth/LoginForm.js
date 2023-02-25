import { Button } from '@mui/material';
import { Fragment } from 'react';
import { authActions } from '../../store/auth-slice';
import { useDispatch } from 'react-redux';
import { Form } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(authActions.login());
  };

  return (
    <Fragment>
      <Form>
        <Button onClick={loginHandler}>Login</Button>
      </Form>
    </Fragment>
  );
};

export default LoginForm;
