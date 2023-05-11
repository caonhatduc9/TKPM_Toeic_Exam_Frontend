import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Oops!</h2>
      <p>404 - Page not found</p>
      <div>
        Go back to the <Link to="/">Homepage</Link>
      </div>
    </div>
  );
};
export default NotFound;
