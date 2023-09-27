import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";


const Roots = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <NavBar></NavBar>
            </div>
                <Outlet></Outlet>
        </div>
    );
};

export default Roots;