import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

//more about
//https://github.com/remix-run/react-router/discussions/9628
function ErrorPage() {
  let error = useRouteError;

  if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
      //TODO
    } else if (error.status === 404) {
      //TODO
    }
  }
  //TODO
  return (
    <div>
      <nav>nav</nav>
      <h1>An error occurred</h1>
      <p>Could not find this page!</p>
    </div>
  );
}

export default ErrorPage;
