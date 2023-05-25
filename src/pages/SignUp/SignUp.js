import { useState } from "react";
import style from "./SignUp.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const [errorMessagesEmail, setErrorMessagesEmail] = useState("");
    const [userResponse, setUserResponse] = useState({});


    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        var { email } = document.forms[0];
        const emailValue = email.value.trim();


        setErrorMessagesEmail("");

        if (emailValue === "") {
            setErrorMessagesEmail("Email cann't be blank");
            return;
        }
        else if (!isEmail(emailValue)) {
            setErrorMessagesEmail("Invalid email");
            return;
        }


        axios.post("http://tinhoccaogiaphat.com/auth/signup", { email: emailValue })
            .then((res) => {
                console.log(res.data);

                if (res.data.status == "success") {
                    alert("signup success! Please check your gmail to get password!")
                    navigate('/signin');
                }
                else setErrorMessagesEmail("Email has exist");

            })
            .catch((err) => {
                console.error(err);
            });

    };
    const isEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    };

    const renderErrorMessage = (name) => {
        if (name === "email")
            return <small className={style.error}>{errorMessagesEmail}</small>;
    }

    return (
        <div className={style.app}>
            <div className={style.signup_form}>
                <div className={style.title}>Sign Up</div>
                <div className={style.form}>
                    <form onSubmit={handleSubmit}>

                        <div className={style.input_container}>
                            <div>
                                <label>Email </label>
                                {renderErrorMessage("email")}
                            </div>
                            <input type="text" name="email" />
                        </div>

                        <div className={style.signin}>
                            <p>Have an Account</p>
                            <p onClick={() => { navigate('/signin') }} >Sign In</p>
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
export default SignUp;
