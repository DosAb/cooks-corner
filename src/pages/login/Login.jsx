import { useFormik } from "formik";
import { NavLink } from 'react-router-dom'
import { loginSchema } from "../../schemas";
import './login.scss'

export default function Login()
{
    const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting,
    } = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: (values, actions) => {
        console.log("submit");
      },
    });

    return <>
        <div className="login">
            <div className="login__title-container">
                <h1 className="login__title">Welcome Back  <br /> To <span> CooksCorner</span> </h1>
            </div>
            <div className="login__form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Gmail</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="your email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        id="password"
                        placeholder="your password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    <button type="submit" className="login__btn">Sign In</button>
                </form>
                <h4>I don’t have an account? <NavLink to="/register"><span>Sign Up Now</span></NavLink></h4>
            </div>
        </div>
    </>
}