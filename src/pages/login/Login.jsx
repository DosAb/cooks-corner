import { NavLink } from 'react-router-dom'
import './login.scss'

export default function Login()
{
    return <>
        <div className="login">
            <div className="login__title-container">
                <h1 className="login__title">Welcome Back  <br /> To <span> CooksCorner</span> </h1>
            </div>
            <div className="login__form">
                <form>
                    <label htmlFor="email">Gmail</label>
                    <input
                        type="text"
                        id="login"
                        placeholder="your email"
                        name="login"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        id="password"
                        placeholder="your password"
                        name="password"
                    />
                    <button type="submit" className="login__btn">Sign In</button>
                </form>
                <h4>I don’t have an account? <NavLink to="/register"><span>Sign Up Now</span></NavLink></h4>
            </div>
        </div>
    </>
}