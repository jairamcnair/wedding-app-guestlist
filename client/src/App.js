import React, {Fragment} from "react";
import './App.css';

// components
import InputGuest from "./components/InputGuest";
import ListGuests from "./components/ListGuests";

function App() {
  return (
    <Fragment>
      <InputGuest/>
      <ListGuests/>
    </Fragment>
  );
}

export default App;
