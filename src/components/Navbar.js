import { AppBar, CssBaseline, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  const classes = "App " + props.className;
  return (
    <div className={classes}>
      <CssBaseline />
      <Container className="navbar">
        <Typography variant="h2" align="center">
          Chuck Norris jokes
        </Typography>
        <Link className="nav-link navbar-item" to={"/"}>
          Home
        </Link>
        <Link className="nav-link" to={"/favorites"}>
          Favorites
        </Link>
      </Container>
    </div>
  );
};

export default Navbar;
