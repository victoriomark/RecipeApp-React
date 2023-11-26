import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  const avatar =
    "https://images.unsplash.com/photo-1606914469725-e398d2f1d7ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <div className="container-fluid Hero p-2 text-light  d-lg-flex d-md-grid d-sm-grid  justify-content-evenly">
        <div>
          <h1>Find The Perfect</h1>
          <h1>
            <span className="text-danger">Meal Recipe</span> For you
          </h1>
          <p>a listing Website of Meal Recipe</p>
          <div className="d-flex gap-2">
            <button className="btn btn-danger fw-bold"><Link to="MealList">LEARN MORE</Link></button>
            <button className="btn btn-light  fw-bold">All Meals</button>
          </div>
        </div>
        <div className="text-center"> 
      <img
        src={avatar}
        alt="Avatar"
        className="img-fluid rounded"
        style={{ maxWidth: '500px' }} 
      />
    </div>
      </div>
    </>
  );
};

export default Hero;
