import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import asyncValidate from "../Helpers/asyncValidate";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import { ErrorOutlined } from '@material-ui/icons';

const validate = values => {
    const errors = {};
    const requiredFields = ["email", "password"];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = "Ushbu maydon to'ldirilishi shart";
        }
    });
    if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = "Noto'g'ri email";
    }
    return errors;
};

const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
}) => (
    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        variant="outlined"
        size="small"
        {...input}
        {...custom}
    />
);

const Login = props => {
    const { pristine, reset, submitting, classes } = props;
    const [user, setUser] = useState({
        email: "",
        password: "",
        // remember: false
    });
    const change = e => {
        if (e.target.type === "checkbox") {
            setUser({
                ...user,
                [e.target.name]: e.target.checked
            });
        } else {
            setUser({
                ...user,
                [e.target.name]: e.target.value
            });
        }
    };
    let url = "https://laravel-react-eshop.herokuapp.com";
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            let res = await Axios.post(`${url}/api/login`, user);
            if (res.data) {
                localStorage.setItem("token", res.data.token);
            }
        } catch (e) {
            console.log(e);
        }
    };

    const getProfile = async () => {
        try {
            const data = {
                name: "Client Name",
                redirect: "http://example.com/callback"
            };
            const token = localStorage.token;
            if (token) {
                let resp = await Axios.post(`${url}/oauth/clients`, data);
                console.log(resp);
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="flex justify-center mt-3">
            <form className="w-1/2" onSubmit={e => handleSubmit(e)}>
                <div className="mt-3">
                    <Field
                        name="email"
                        component={renderTextField}
                        label="Email"
                        fullWidth={true}
                        onChange={change}
                    />
                </div>
                <div className="mt-3">
                    <Field
                        name="password"
                        component={renderTextField}
                        label="Parol"
                        fullWidth={true}
                        onChange={change}
                    />
                </div>
                <div className="mt-3 flex">
                    <div>
                        <Button
                            variant="outlined"
                            disabled={pristine || submitting}
                            type="submit"
                            color="primary"
                        >
                            Kirish
                        </Button>
                    </div>
                    <div className="ml-2">
                        <Button
                            variant="contained"
                            onClick={reset}
                            color="secondary"
                        >
                            Tozalash
                        </Button>
                    </div>
                    <div className="ml-2">
                        <Button
                            variant="contained"
                            onClick={getProfile}
                            color="primary"
                        >
                            GETPROFILE
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default reduxForm({
    form: "MaterialUiForm", // a unique identifier for this form
    validate,
    asyncValidate
})(Login);