import { useState } from "react";
import style from "./SignUp.module.scss";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const [errorMessagesEmail, setErrorMessagesEmail] = useState("");
    const [errorMessagesName, setErrorMessagesName] = useState("");
    const [errorMessagesPhone, setErrorMessagesPhone] = useState("");
    const [errorMessagesPassword, setErrorMessagesPassword] = useState("");
    const [errorMessagesRePassword, setErrorMessagesRePassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        var { name, email, phone, password, repassword } = document.forms[0];
        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const phoneValue = phone.value.trim();
        const passwordValue = password.value.trim();
        const repasswordValue = repassword.value.trim();

        setErrorMessagesEmail("");
        // setErrorMessagesName("");
        // setErrorMessagesPhone("");
        // setErrorMessagesPassword("");
        // setErrorMessagesRePassword("");
        if (emailValue === "") {
            setErrorMessagesEmail("Email cann't be blank");
        }
        else if (!isEmail(emailValue)) {
            setErrorMessagesEmail("Invalid email");
        }
        // if (nameValue === "") {
        //     setErrorMessagesName("Name cann't be blank");
        // }
        // if (phoneValue === "") {
        //     setErrorMessagesPhone("Phone cann't be blank");
        // }
        // else if (!isValidPhone(phoneValue)) {
        //     setErrorMessagesPhone("Invalid Phone");
        // }
        // if (passwordValue === "") {
        //     setErrorMessagesPassword("Password cann't be blank");
        // }
        // else if (!isValidPass(passwordValue)) {
        //     setErrorMessagesPassword("Invalid password");
        // }
        // if (repasswordValue === "") {
        //     setErrorMessagesRePassword("Repassword cann't be blank");
        // }
        // else if (repasswordValue !== passwordValue) {
        //     setErrorMessagesRePassword("Repassword isn't correct");
        // }

        // const userData = database.find((user) => user.email === emailValue);

        // if (userData) {
        //     if (userData.password !== passwordValue) {
        //         setErrorMessagesPassword("Password isn't correct" );
        //     } else {

        //         //do something




        //         navigate('/');
        //     }
        // } else {
        //     setErrorMessagesEmail("Email isn't exist");
        // }
    };
    const isEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    };

    // const isValidPass = (password) => {
    //     const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    //     return regex.test(password);
    // };

    // const isValidPhone = (phone) => {
    //     const regex = /^0[0-9]{9}$/;
    //     return regex.test(phone);
    // }

    const renderErrorMessage = (name) => {
        if (name === "email")
            return <small className={style.error}>{errorMessagesEmail}</small>;
        // else if (name === "password")
        //     return <small className={style.error}>{errorMessagesPassword}</small>;
        // else if (name === "phone")
        //     return <small className={style.error}>{errorMessagesPhone}</small>;
        // else if (name === "repassword")
        //     return <small className={style.error}>{errorMessagesRePassword}</small>;
        // else if (name === "name")
        //     return <small className={style.error}>{errorMessagesName}</small>;
    }

    return (
        <div className={style.app}>
            <div className={style.signup_form}>
                <div className={style.title}>Sign Up</div>
                <div className={style.form}>
                    <form onSubmit={handleSubmit}>
                        {/* <div className={style.input_container}>
                            <div>
                                <label>Name </label>
                                {renderErrorMessage("name")}
                            </div>
                            <input type="text" name="name" />
                        </div> */}
                        <div className={style.input_container}>
                            <div>
                                <label>Email </label>
                                {renderErrorMessage("email")}
                            </div>
                            <input type="text" name="email" />
                        </div>
                        {/* <div className={style.input_container}>
                            <div>
                                <label>Phone </label>
                                {renderErrorMessage("phone")}
                            </div>
                            <input type="text" name="phone" />
                        </div>
                        <div className={style.input_container}>
                            <div>
                                <label>Password </label>
                                {renderErrorMessage("password")}
                            </div>
                            <input type="password" name="password" />
                        </div>
                        <div className={style.input_container}>
                            <div>
                                <label>Repassword </label>
                                {renderErrorMessage("repassword")}
                            </div>
                            <input type="password" name="repassword" />
                        </div> */}
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
