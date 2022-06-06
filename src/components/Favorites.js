import React, { useEffect, useState } from "react";
import "./UI.css";
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
  return (
    <div>
      <Card className="Card">
        <div className="badge">
          {!storedJokes.length
            ? " No jokes saved!"
            : storedJokes.length === 1
            ? " 1 saved joke!"
            : storedJokes.length > 1
            ? ` ${storedJokes.length} saved jokes!`
            : null}
        </div>
        {storedJokes.map((joke) => (
          <React.Fragment key={joke.id}>
            <div className="CardContent row">
              <div className="col-10 ">
                <span
                  className="form-control bg-white btn mt-2"
                  style={{ textAlign: "left", fontWeight: "bold" }}
                >
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
      </Card>
    </div>
  );
};

export default Favorites;
