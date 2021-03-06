import React, { useEffect, useState } from "react";
import "./UI.css";
import "./Favorites.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Favorites = (props) => {
  const classes = "card " + props.className;
  const [storedJokes, setStoredJokes] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("favorites")) {
      const storedJokes = JSON.parse(localStorage.getItem("favorites"));
      setStoredJokes(storedJokes);
    }
  }, []);

  const handleDelete = (joke) => {
    const deleted = storedJokes.filter((f) => f.id !== joke.id);
    setStoredJokes(deleted);

    localStorage.setItem("favorites", JSON.stringify(deleted));
  };
  const handleDeleteAll = () => {
    localStorage.removeItem("favorites");
    window.location.reload(false);
  };
  return (
    <div>
      <div className="Card">
        <div className="joke-count">
          <div className="badge">
            {!storedJokes.length
              ? " No saved jokes yet!"
              : storedJokes.length === 1
              ? " You have 1 saved joke!"
              : storedJokes.length > 1
              ? `You have  ${storedJokes.length} saved jokes!`
              : null}
          </div>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={() => handleDeleteAll()}
          >
            Delete all
          </Button>
        </div>

        {storedJokes.map((joke) => (
          <React.Fragment key={joke.id}>
            <div className="CardContentInline row">
              <div className="col-10 ">
                <span className="form-control bg-white btn mt-2">
                  {joke.joke}
                </span>
              </div>
              <div className="col-2">
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleDelete(joke)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
