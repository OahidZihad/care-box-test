import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const handleData = () => {
    history.push("/data");
  };

  const handleForm = () => {
    history.push("/form");
  };

  return (
    <div>
      <h1 className="mt-5 pt-5">
        Welcom to <br /> Care-Box Test
      </h1>
      <button onClick={handleForm} class="btn btn-dark me-5 mt-3">
        Form
      </button>
      <button onClick={handleData} class="btn btn-dark mt-3">
        GetData
      </button>
    </div>
  );
};

export default Home;
