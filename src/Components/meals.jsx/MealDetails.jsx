import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
  let mealDetail = useLoaderData().meals[0];
  let {
    strMealThumb,
    strArea,
    strMeal,
    strInstructions,
    strCategory,
    strSource,
    strYoutube,
  } = mealDetail;
  let embed = strYoutube.split("=");
  return (
    <div className="container mx-auto pt-10">
      <img src={strMealThumb} className=" lg:w-1/3 mx-auto rounded-lg" alt="" />
      <h1 className=" text-xl text-center pt-4 text-yellow-300">{strMeal}</h1>

      <div className="lg:grid lg:grid-cols-5 gap-6 items-center mx-auto">
        <h3 className=" text-lg font-medium col-span-1">Introduction:</h3>
        <p className="  lg:col-span-4">{strInstructions}</p>
      </div>
      <div className="grid grid-cols-5 gap-6 mt-10 items-center mx-auto">
        <h3 className=" text-lg font-medium col-span-1">Area:</h3>
        <p className="  col-span-4">{strArea}</p>
      </div>
      <div className="grid grid-cols-5 gap-6 mt-10 items-center">
        <h3 className=" text-lg font-medium col-span-1">Category:</h3>
        <p className=" col-span-4">{strCategory}</p>
      </div>
      <div className="grid lg:grid-cols-5 gap-6 mt-10 items-center">
        <h3 className=" text-lg font-medium col-span-1">Source:</h3>
        <span className="  col-span-4">
          <div className="">
            <iframe className=" p-9 w-full h-[300px] lg:h-[600px]"
              src={`https://www.youtube.com/embed/${embed[1]}?si=pn-kp3pEr1X2kyW7`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <br />
          <a href={strSource} target="blank" className="btn btn-secondary">
            Visit Site
          </a>
        </span>
      </div>
    </div>
  );
};

export default MealDetails;
