import { useState } from "react";
import "./App.css";
import MovieList from "./Component/MovieList/MovieList";
import NavBarre from "./Component/NavBarre/NavBarre";
import data from "./Constant/data";
import Add from "./Component/AddMovie/Add";
import { Route, Switch, Link } from "react-router-dom";

import Details from "./Component/Details"

function App() {
  const [movie, setMovie] = useState(data);
  const handleSave = (newMovie) => {
    setMovie([...movie, newMovie]);
  };

  const [serchText, setSerchText] = useState("");
  const searchText = (text) => {
    setSerchText(text);
  };
  console.log("searchText", serchText);
  const [rate, setRate] = useState(0);
  console.log("rate", rate);
  return (
    <div>
      
      <NavBarre handleSearch={searchText} setRate={setRate} />
      <Switch>
      <Route exact path="/">
        <Add handleAddMovie={handleSave} />
        <MovieList movie={movie} serchText={serchText} rate={rate} />
      </Route>
                
        {/* <Route exact path="/Details/:id" component={Details} /> */}
        <Route exact path="/Details/:id"  render={(props)=> (<Details {...props} movie={movie}/>)}/>
      </Switch>
    </div>
  );
}

export default App;
