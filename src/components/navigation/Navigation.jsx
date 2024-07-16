import logo from "/icons/skillet_cooktop.svg"
import home from "/icons/home.svg"
import search from "/icons/search.svg"
import profile from "/icons/profile.svg"
import exit from "/icons/exit.svg"

import "./navigation.scss"

export default function Navigation()
{
    return <>
        <nav className="navigation">
            <img src={logo} alt="logo" />
            <div className="line"></div>
            <div className="links">
                <div className="link">
                    <img src={home} alt="home" />
                </div>
                <div className="link">
                    <img src={search} alt="home" />
                </div>
                <div className="link">
                    <img src={profile} alt="home" />
                </div>
            </div>
            <div className="exit">
                <img src={exit} alt="home" />
            </div>

        </nav>
    </>
}