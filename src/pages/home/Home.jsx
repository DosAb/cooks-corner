import { useEffect, useState } from "react"
import { getCategory } from "../../api"
import RecipeList from "../../components/recipe/RecipeList"

import "./home.scss"

export default function Home()
{
    const [name, setName] = useState("Konfeta")

    const [category, setCategory] = useState('Breakfast')
    const [page, setPage] = useState(1)

    const getCategoryData = async () => {
        const token = localStorage.getItem("token")
        try {
            const response = await getCategory(token, category, page);
            console.log(response.data);
            // navigate('/home')
        } catch (err) {
            if (!err?.response) {
            console.log(err);
            }
        }
    }

    useEffect(()=>{
        getCategoryData()
        
    },[])


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