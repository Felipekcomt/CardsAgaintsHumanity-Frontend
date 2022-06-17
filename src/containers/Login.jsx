import React from 'react';
import FacebookLogin from 'react-facebook-login';
import '../styles/Login.scss'

const Login = () => {
        const responseFacebook = (response) => {
            console.log(response);
        }
    return (
    <div className="login">
        <div className="form-container">
            <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new passwrd for yue account</p>
             <form action="/" className="form">
                <FacebookLogin
                appId="426898355966784"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook} />
            </form>
        </div>
    </div>
);
}

export default Login;