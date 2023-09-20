import { Link } from "react-router-dom";

const Meal = ({meal}) => {
    return (
        <div className=" justify-center flex">
         <Link to={`/meals/category/${meal}`}>  {meal}</Link>
        </div>
    );
};

export default Meal;