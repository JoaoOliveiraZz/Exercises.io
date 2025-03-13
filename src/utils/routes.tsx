import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homePage";
import { LoginForm } from "../pages/loginForm";



export function AppRoutes(){

    return (

        <Routes>
            <Route path="/" element = {<HomePage />} />
            <Route path="/login" element = {<LoginForm />}></Route>
        </Routes>

    )

}