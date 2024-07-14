import './register.scss'

export default function Register()
{
    return <>
        <div className="register">
            <div className="register__title-container">
                <h1 className="register__title">Sign up for delicious <br /> <span>Discoveries!</span> </h1>
            </div>
            <div className="register__form">
                <form>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="your name"
                        name="name"
                    />
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
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        id="password"
                        placeholder="your password"
                        name="password"
                    />
                    <button type="submit" className="register__btn">Sign In</button>
                </form>
                <h4>Already have an account? <span>Sign Up Now</span></h4>
            </div>
        </div>
    </>
}