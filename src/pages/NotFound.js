import { Link } from "react-router-dom";
import "./index.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>This Page Could Not Found, Sorry About That!</h2>
      <Link to="/" class="not-found-btn">Go Home</Link>
    </div>
  )
}

export default NotFound;