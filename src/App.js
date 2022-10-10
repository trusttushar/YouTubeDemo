import React from "react";
import routes from "./routes";
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <Routes>
      {routes.map((route, i) => (
        <Route key={i} {...route} />
      ))}
    </Routes>
  );
}

export default App;
