import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
function Search() {

    const [input, setInput] = useState('');
    const nav = useNavigate();

    const onEnter = (e) => {
        e.preventDefault();
        nav('/Searched/' + input);
    }

    return (
        <form className='form' onSubmit={onEnter}>
            <div>
                <FaSearch />
                <input onChange={(e) => setInput(e.target.value)} type='text' value={input} />
            </div>
        </form>
    )
}

export default Search