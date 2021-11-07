import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="mt-5 pt-5">
        Welcom to <br /> Care-Box Test
      </h1>
      <Link to="/formData" class="btn btn-dark me-5 mt-3">
        Form
      </Link>
      <Link to="/data" class="btn btn-dark mt-3">
        GetData
      </Link>
    </div>
  );
};

export default Home;
