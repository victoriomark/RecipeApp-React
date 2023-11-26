const InfoRecipe = (props) => {
  console.log(props);
  return (
    <>
      <section className="container-fluid text-light d-flex flex-column gap-3  ">
        {props.strInstructions.map((food,index) => {
          return (
            <>
              <div key={index} className="container d-lg-flex d-sm-grid d-md-grid gap-2 justify-content-center align-items-center">
              <img className="rounded card-img" src={food.strMealThumb} />
                <div>
                  <h1>{food.strMeal}</h1>
                 <p>{food.strInstructions}</p>
                </div>
              </div>
             
            </>
          );
        })}
      </section>
    </>
  );
};

export default InfoRecipe;
