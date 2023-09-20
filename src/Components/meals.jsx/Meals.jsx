import { useLoaderData } from "react-router-dom";
import Meal from "./meal";

const Meals = () => {
  let meals = useLoaderData().meals;
  return (
    <div>
      <h2 className=" text-xl text-center text-orange-600">Meal Category</h2>
      {meals.map((meal, ind) => (
        <div key={ind}>
          <Meal meal={meal.strCategory}></Meal>
        </div>
      ))}
    </div>
  );
};

export default Meals;
