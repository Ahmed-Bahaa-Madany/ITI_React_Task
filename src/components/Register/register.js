import React from "react";
import { useState } from "react";
import "./register.css";

export default function Register() {
    const pattern = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$");
    const passPattern = new RegExp("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}");
    const [userForm, setUserForm] = useState({
        email: "",
        password: "",
        username: "",
        name:"",
        pass:"",
    });
    const [userFormErrors, setUserFormErrors] = useState({
        emailErr: null,
        passwordErr: null,
        usernameErr: null,
        nameErr: null,
        passErr: null,
    });
    const formChange = (e) => {
        if (e.target.name === "inputEmail") {
        setUserForm({
            ...userForm,
            email: e.target.value,
        });
        setUserFormErrors({
            ...userFormErrors,
            emailErr:
            e.target.value.length === 0
                ? "this field is required"
                : !pattern.test(e.target.value)
                ? "must enter email like xxx@gmail.com"
                : null,
        });
        } else if (e.target.name === "inputPassword") {
        setUserForm({
            ...userForm,
            password: e.target.value,
        });
        setUserFormErrors({
            ...userFormErrors,
            passwordErr:
            e.target.value.length === 0
                ? "this field is required"
                : !passPattern.test(e.target.value)
                ? "must enter pass like P@ssword1234"
                : null,
        });
        } else if (e.target.name === "inputUsername") {
        setUserForm({
            ...userForm,
            username: e.target.value,
        });
        setUserFormErrors({
            ...userFormErrors,
            usernameErr:
            e.target.value.length === 0
                ? "this field is required"
                : e.target.value.length < 3
                ? "Min. Length is 3 characters"
                : null,
        });
        }else if (e.target.name === "inputName") {
            setUserForm({
                ...userForm,
                name: e.target.value,
            });
            setUserFormErrors({
                ...userFormErrors,
                nameErr:
                e.target.value.length === 0
                    ? "this field is required": null,
            });
        }
        else if (e.target.name === "inputPass") {
            setUserForm({
                ...userForm,
                pass: e.target.value,
            });
            setUserFormErrors({
                ...userFormErrors,
                passErr:
                e.target.value.length === 0
                ? "this field is required"
                : e.target.value !== userForm.password? "password should be confirm"
                : null,
            });
            }
    };

    const formSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={(e) => formSubmit(e)}>
            <div className="mb-3">
                <label htmlFor="inputName" className="form-label">
                Name
                </label>
                <input
                type="text"
                className={`form-control ${
                    userFormErrors.nameErr ? "border-danger" : ""
                } `}
                id="inputName"
                aria-describedby="nameErrors"
                name="inputName"
                value={userForm.name}
                onChange={(e) => formChange(e)}
                />
                <div id="nameErrors" className="form-text text-danger">
                    {userFormErrors.nameErr}
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="inputUsername" className="form-label">
                Username
                </label>
                <input
                type="text"
                className={`form-control ${
                    userFormErrors.usernameErr ? "border-danger" : ""
                } `}
                id="inputUsername"
                aria-describedby="usernameErrors"
                name="inputUsername"
                value={userForm.username}
                onChange={(e) => formChange(e)}
                />
                <div id="usernameErrors" className="form-text text-danger">
                {userFormErrors.usernameErr}
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">
                Email address
                </label>
                <input
                type="email"
                className={`form-control ${
                    userFormErrors.emailErr ? "border-danger" : ""
                } `}
                id="inputEmail"
                aria-describedby="emailErrors"
                name="inputEmail"
                value={userForm.email}
                onChange={(e) => formChange(e)}
                />
                <div id="emailErrors" className="form-text text-danger">
                {userFormErrors.emailErr}
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">
                Password
                </label>
                <input
                type="password"
                className={`form-control ${
                    userFormErrors.passwordErr ? "border-danger" : ""
                } `}
                id="inputPassword"
                name="inputPassword"
                aria-describedby="passwordErrors"
                value={userForm.password}
                onChange={(e) => formChange(e)}
                />
                <div id="passwordErrors" className="form-text text-danger">
                {userFormErrors.passwordErr}
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="inputPass" className="form-label">
                Confirm Password
                </label>
                <input
                type="password"
                className={`form-control ${
                    userFormErrors.passErr ? "border-danger" : ""
                } `}
                id="inputPass"
                name="inputPass"
                aria-describedby="passErrors"
                value={userForm.pass}
                onChange={(e) => formChange(e)}
                />
                <div id="passErrors" className="form-text text-danger">
                {userFormErrors.passErr}
                </div>
            </div>

            <button type="submit" className="btn btn-primary">
                Register
            </button>
        </form>
    );
}
