import { AppBar, CssBaseline, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  const classes = "App " + props.className;
  return (
    <div className={classes}>
      <CssBaseline />
      <div className="navbar">
        <div>
          <img src="https://cdn.pixabay.com/photo/2013/07/13/13/34/man-161135_960_720.png" />
          <ul>
            <li>
              <Link className="" to={"/"}>
                Home
              </Link>
              |
            </li>
            <li>
              <Link to={"/favorites"}>Favorites</Link>
            </li>
          </ul>
          <img src="https://cdn.pixabay.com/photo/2013/07/13/13/34/man-161135_960_720.png" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
