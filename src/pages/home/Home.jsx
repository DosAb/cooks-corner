import { useState } from "react"
import RecipeList from "../../components/recipe/RecipeList"

import "./home.scss"

export default function Home()
{
    const [name, setName] = useState("Konfeta")


    return <>
        <div className="home">
            <h3 className="home__title">Hi, {name}. UI Designer & Cook</h3>
            <div className="home__category">
                <h3>Category</h3>
                <div className="home__category-list">
                    <button autoFocus>Breakfast</button>
                    <button>Lunch</button>
                    <button>Dinner</button>
                </div>
                <RecipeList />
            </div>
        </div>
    </>
}