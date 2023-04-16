import React from "react";
import errorImg from "../../images/error.jpg"
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    let navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/");
    };

    return (
        <div className="error">
            <h2>Error 404: Not found</h2>
            <p>Ajaj.. Jestli jsi něco hledal, tak to tady už nejspíš není.</p>
            <img src={errorImg} width="500px"/>
            <button type="button "onClick={handleButtonClick}> Vrátit se radši na home page</button>
        </div>
    )
}

export default ErrorPage;