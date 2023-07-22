import React from 'react'
import "./games.scss"
import GameBox from '../gameBox/GameBox'
import gameData from "../../game-data.json"
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";


const Games = () => {
  // Get search state from redux.
  const searchTerm = useSelector((state) => state.search.searchTerm);
  // Filter games 
  const filteredGames = gameData.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='games'>
        <div className='container'>
            <div className='items'>
              {
                filteredGames.map((item) => (
                  <Link to="/game">
                    <GameBox key={item.id} thumb={item.thumb.url} name={item.name} />
                  </Link>
                ))
              }
            </div>
        </div> 
    </div>
  )
}

export default Games
