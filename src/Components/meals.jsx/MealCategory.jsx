import { useLoaderData } from "react-router-dom";
import MealDetails from "./MealDetails";
import MealCard from "./MealCard";

const MealCategory = () => {
   let category= useLoaderData().meals
   
    return (
        <div className="container grid lg:grid-cols-6 grid-cols-2 gap-5 mx-auto mt-9">
            {
              category.map((meal)=><MealCard key={meal.idMeal} meal={meal}></MealCard>)
            }
        </div>
    );
};

export default MealCategory;