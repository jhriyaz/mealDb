import NavBar from "../NavBar/NavBar";
import {  Outlet, useLocation, useNavigation } from "react-router-dom";

const Home = () => {
let location = useLocation().pathname;
let data=''
    let navigate = useNavigation();
    if(location==='/'){
        data=<h1>this is homePage</h1>
    }
    return (
       <>
       <NavBar></NavBar>
     {data}
       
      <div className="flex justify-center">
        {navigate.state === "loading" ? (
          <span className="loading loading-infinity loading-lg flex justify-center"></span>
        ) : (
          <Outlet></Outlet>
        )}
      </div>
       </>
    );
};

export default Home;