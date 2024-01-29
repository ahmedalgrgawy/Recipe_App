import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function SearchResult() {

    const apiKey = "599157b3c9eb4a758ce94da4af48089f";

    const [search, setSearch] = useState([]);
    let params = useParams();

    const getSearch = async (name) => {

        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${name}`)

        const recipes = await data.json()

        setSearch(recipes.results);
    }

    useEffect(() => {
        getSearch(params.search);
    }, [params.search])

    return (
        <div className='grid'>
            {search.map((item) => {
                return (
                    <div className="main-card" key={item.id}>
                        <Link to={"/recipe/" + item.id}>
                            <img src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default SearchResult