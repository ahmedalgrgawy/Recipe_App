import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'

function Cuisine() {

    const apiKey = "599157b3c9eb4a758ce94da4af48089f";

    const [cuisine, setcuisine] = useState([]);
    let params = useParams();


    const getCuisine = async (name) => {

        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${name}`)

        const recipes = await data.json()

        setcuisine(recipes.results);
    }

    useEffect(() => {
        getCuisine(params.type)
    }, [params.type])


    return (
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className='grid'>
            {cuisine.map((item) => {
                return (
                    <div className="main-card" key={item.id}>
                        <Link to={"/recipe/" + item.id}>
                            <img src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>
                        </Link>
                    </div>
                )
            })}
        </motion.div>
    )
}

export default Cuisine