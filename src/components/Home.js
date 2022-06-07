import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UI.css";
import {
  AppBar,
  Button,
  Card,
  CardContent,
  CardActions,
  Container,
  Typography,
} from "@mui/material";

const Home = (props) => {
  const [id, setId] = useState([]);
  const [joke, setJoke] = useState([]);
  const [save, setSave] = useState("SAVE");

  const classes = "" + props.className;
  useEffect(() => {
    getJoke();
  }, []);
  const getJoke = () => {
    axios.get("http://api.icndb.com/jokes/random").then((response) => {
      setId(response.data.value.id);
      setJoke(response.data.value.joke.replace(/&quot;/g, '"'));
    });
    setSave("SAVE");
  };

  const saveJoke = (id, joke) => {
    var favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const exists = favorites.filter((f) => f.id === id);
    if (!exists || exists.length === 0) {
      var favorite = {
        id: id,
        joke: joke,
      };
      favorites.push(favorite);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      handleSave();
    }
  };
  const handleSave = (content) => {
    if (content) {
      setSave(content);
    } else {
      setSave("SAVED");
    }
  };
  return (
    <div>
      <div className="Card">
        <div className="CardContent">
          <p>{joke}</p>
        </div>
        <div className="CardActions">
          <button onClick={() => saveJoke(id, joke)}>{save}</button>
          <button variant="contained" color="secondary" onClick={getJoke}>
            NEXT JOKE
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
