import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from "react-router-dom";

function Veg() {

    const apiKey = "599157b3c9eb4a758ce94da4af48089f";

    const [veg, setVeg] = useState([]);

    useEffect(() => {
        getVeg();
    }, [])

    const getVeg = async () => {

        const check = localStorage.getItem('veg');

        if (check) {
            setVeg(JSON.parse(check))
        } else {

            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9&tags=vegetarian`);
            const data = await api.json();
            localStorage.setItem('veg', JSON.stringify(data.recipes))
            setVeg(data.recipes);
            console.log(data.recipes);
        }
    }


    return (
        <div>
            <div className="wrapper">
                <h3>Vegetarian Picks</h3>

                <Splide options={{
                    perPage: 3, arrows: false, pagination: false, drag: "free", gap: '5rem',
                }}>
                    {veg.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <div className="card">
                                    <Link to={"/recipe/" + recipe.id}>
                                        <p className="card-title">{recipe.title}</p>
                                        <img className="card-img" src={recipe.image} alt={recipe.title} />
                                        <div className="gradient"></div>
                                    </Link>
                                </div>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </div>
        </div>
    )
}

export default Veg