import { useState, useEffect } from "react";
import style from "./SignIn.module.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { parseInt } from "lodash";

const SignIn = () => {
    const [errorMessagesEmail, setErrorMessagesEmail] = useState("");
    const [errorMessagesPassword, setErrorMessagesPassword] = useState("");
    const [userResponse, setUserResponse] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // const usernameValue

        var { email, password } = document.forms[0];
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        setErrorMessagesEmail("");
        setErrorMessagesPassword("");
        if (emailValue === "") {
            setErrorMessagesEmail("Email cann't be blank");
        }
        if (!isEmail(emailValue)) {
            setErrorMessagesEmail("Invalid email");
        }
        if (passwordValue === "") {
            setErrorMessagesPassword("Password cann't be blank");
        }
        if (!isValidPass(passwordValue)) {
            setErrorMessagesPassword("Invalid password");
        }

        axios.post("http://tinhoccaogiaphat.com/auth/login", { email: emailValue, password: passwordValue })
            .then((res) => {
                console.log(res.data);

                if (res.data.status === "success") {
                    window.localStorage.setItem('sigin', JSON.stringify(res.data));
                    navigate("/");

                } else {
                    setErrorMessagesPassword("Password isn't correct");
                    setErrorMessagesEmail("Email isn't exist");
                }
            })
            .catch((err) => {
                console.error(err);
            });



    };
    const isEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    };

    const isValidPass = (password) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

        return regex.test(password);
    };

    const renderErrorMessage = (name) => {
        if (name === "email") {

            return <small className={style.error}>{errorMessagesEmail}</small>
        }
        else return <small className={style.error}>{errorMessagesPassword}</small>
    }

    return (
        <div className={style.app}>
            <div className={style.login_form}>
                <div className={style.title}>Sign In</div>
                <div className={style.form}>
                    <form onSubmit={handleSubmit}>
                        <div className={style.input_container}>
                            <div>
                                <label>Email </label>
                                {renderErrorMessage("email")}
                            </div>
                            <input type="text" name="email" />
                        </div>
                        <div className={style.input_container}>
                            <div>
                                <label>Password </label>
                                {renderErrorMessage("password")}
                            </div>
                            <input type="password" name="password" />
                        </div>
                        <div className={style.forgotpass_signup}>
                            <p onClick={() => { navigate('/forgotpassword') }} >Forgot Password?</p>
                            <div>
                                <p>Haven't Account</p>
                                <p className={style.signup} onClick={() => { navigate('/signup') }} >Sign Up</p>
                            </div>
                        </div>
                        <div className={style.button_container}>
                            <input type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default SignIn;
