import { useRouteError } from "react-router";
function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>Oops!!!</h1>
      <h2>Something went wrong</h2>
      <h2>
        {error.status} : {error.statusText}
      </h2>
      <h2>{error.error.message}</h2>
    </>
  );
}

export default ErrorPage;
