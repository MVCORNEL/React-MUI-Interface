import { useSearchParams, Link } from 'react-router-dom';
import LoginForm from './LoginForm';

const Auth = () => {
  //useSearchParams returns the query parameters and allows change in the component functionality without using the component state
  //alternative way of using state, but now we can directly link to a page into a certain mode
  const [searchParams, setSearchParam] = useSearchParams();
  const isLoginMode = searchParams.get('mode') === 'login';

  return (
    <div>
      Auth
      <h1>{isLoginMode ? 'Login' : 'Create new user'}</h1>
      {isLoginMode && <LoginForm />}
      <Link to={`?mode=${isLoginMode ? 'signup' : 'login'}`}>{isLoginMode ? 'Register with us' : 'Login'}</Link>
    </div>
  );
};

export default Auth;
