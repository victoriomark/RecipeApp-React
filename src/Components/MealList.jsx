
import { useState } from "react";
import { Link } from "react-router-dom";
const Meal = (props) => {
  const handleChange = (e) => {
    props.Search(e.target.value);
  };

  return (
    <>
      <div className="container-fluid text-light d-flex flex-column justify-content-center">
        <div className="d-flex gap-2 container-lg">
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <main className="row gap-2 mt-5 justify-content-center">
        {props.Recipe.map(({ strMealThumb, strMeal, idMeal }) => {
          return (
            <div key={idMeal} className="card col-md-3  col-sm-3 col-lg-2 p-1">
              <img className="card-img" src={strMealThumb} alt={strMeal} />
              <div className="card-body">
                <h5 className="card-title">{strMeal}</h5>
                <button className="btn btn-danger">
                <Link to={'/InfoRecipe'}>EXPLORE</Link>
                </button>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Meal;
