import { Link } from "react-router-dom";
const MainNavigation = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/projects">My Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default MainNavigation;
