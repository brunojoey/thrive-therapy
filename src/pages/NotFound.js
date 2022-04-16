import { Link } from "react-router-dom";
import "./index.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <p>Page Not Found</p>
      <Link to="/" class="not-found-btn">Go Home</Link>
    </div>
  )
}

export default NotFound;