import { Route, Routes } from "react-router-dom";
import { LoginForm } from "../pages/loginForm";



export function AppRoutes(){

    return (

        <Routes>
            <Route path="/" element = {<LoginForm />}></Route>
        </Routes>

    )

}