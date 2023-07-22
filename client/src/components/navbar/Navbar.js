import React from 'react'
import "./navbar.scss"
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from "../../slices/SearchDisplay"
import { updateSearchTerm } from "../../slices/SearchValue";
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
 
const Navbar = () => {
    // Search display and searchTerm states call
    const display = useSelector((state) => state.searchDisplay.value);
    const searchTerm = useSelector((state) => state.search.searchTerm);

    const dispatch = useDispatch();
    const history = useHistory();

    // If the search is made while playing the game, the games are listed according to the search result. 
    const handleSearch = (e) => {
        dispatch(updateSearchTerm(e.target.value));
        history.push("/");
    };

  return (
    <nav className='navbar'>
        <div className='container'>
            <div className='logo'>
                <img src='./img/kanonLogo.png' alt=''/>
            </div>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/game">Play Slot Game</Link>
            </div>
            <div className='icons'>
                {display && <input type="text" placeholder="Find Your Slot Games..." value={searchTerm} onChange={handleSearch}/>}
                <button type='submit' onClick={() => dispatch(toggle())}>      
                    <img src='./img/search.svg' alt='search'/>
                </button> 
            </div>
        </div>
    </nav>
  )
}

export default Navbar
