import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Home <Link to="/add">Add</Link>
    </div>
  );
}

export default Home;