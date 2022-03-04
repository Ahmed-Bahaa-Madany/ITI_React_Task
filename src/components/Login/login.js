import React from "react";
import { useState } from "react";
import "./login.css";

export default function Login() {
    const pattern = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")
    const [userForm, setUserForm] = useState({
        email: "",
        password: "",
    });
    const [userFormErrors, setUserFormErrors] = useState({
        emailErr: null,
        passwordErr: null,
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
                : e.target.value.length < 8
                ? "Min. Length is 3 characters"
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
        <button type="submit" className="btn btn-primary">
            Login
        </button>
        </form>
    );
}
