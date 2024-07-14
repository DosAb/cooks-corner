import RecipeList from "../../components/recipe/RecipeList"
import idiotImg from "/imgs/idiot.jpg"
import "./profile.scss"

export default function Profile()
{
    return <>
        <div className="profile">
            <div className="profile__info">
                <img src={idiotImg} alt="idiot" />
                <div className="profile__info-description">
                    <div className="author__info-followers">
                        <div>
                            <h2>29</h2>
                            <p>recipe</p>
                        </div>
                        <div>
                            <h2>144</h2>
                            <p>followers</p>
                        </div>
                        <div>
                            <h2>118</h2>
                            <p>follow</p>
                        </div>
                    </div>
                    <h3>Sarthak Ranjan Hota</h3>
                    <p>I'm a passionate chef who loves creating delicious dishes with flair</p>
                    <button>Manage Profile</button>
                </div>
            </div>
            <RecipeList />
        </div>
    </>
}