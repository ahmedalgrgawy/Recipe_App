import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
function Recipe() {
    const apiKey = "599157b3c9eb4a758ce94da4af48089f";

    let params = useParams();

    const [details, setDetails] = useState({});

    const [activeTab, setActiveTab] = useState('instructions');

    const getDetails = async () => {

        const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`)

        const detailsData = await data.json()

        setDetails(detailsData);
        console.log(detailsData)
    }

    useEffect(() => {
        getDetails();
    }, [params.id])


    return (
        <div className='details'>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt="" />
            </div>
            <div className="info">
                <div className='btns'>
                    <button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</button>
                    <button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')} >Ingredients</button>
                </div>
                {activeTab === 'instructions' && (

                    <div>
                        <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                        <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
                    </div>
                )}

                {activeTab === 'ingredients' && (
                    <ul>
                        {details.extendedIngredients.map((ing) => (
                            <li key={ing.id}>{ing.original}</li>
                        ))}
                    </ul>
                )}

            </div>
        </div>
    )
}

export default Recipe