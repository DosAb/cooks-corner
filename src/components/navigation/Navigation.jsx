import logo from "/icons/skillet_cooktop.svg"
import home from "/icons/home.svg"

import "./navigation.scss"

export default function Navigation()
{
    return <>
        <nav>
            <img src={logo} alt="logo" />
            <div className="links">
                <img src={home} alt="home" />
            </div>
        </nav>
    </>
}