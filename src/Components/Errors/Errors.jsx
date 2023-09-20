import { Link, useNavigate, useRouteError } from "react-router-dom";


const Errors = () => {
let navigate=useNavigate()
    let message =''
const error=useRouteError()
let goBack=()=>{
    navigate(-1)
}
if (error.status ===404){
message='404 not found'
}if(error.status ===502){
    message='server error'
}
    return (
        <div>
            {message}
            <br />
            <br />
            <Link><button onClick={goBack}>Go back</button></Link>
        </div>
    );
};

export default Errors;