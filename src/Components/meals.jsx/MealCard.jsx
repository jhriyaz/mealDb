import { Link } from "react-router-dom";

const MealCard = ({meal}) => {
let{strMeal,strMealThumb,idMeal}=meal
    return (
        <div className=" rounded-lg flex flex-col">
            <img src={strMealThumb} alt="MEal Image" className="rounded-lg" />
            <h3 className=" text-center text-sm flex-grow">{strMeal}</h3>
            <Link to={`/meals/meal/${idMeal}`}className="btn btn-primary flex justify-center">Show Details</Link>
        </div>
    );
};

export default MealCard;