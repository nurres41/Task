import React, { useState } from "react";
import instance from "../../axios";
import "./slotGame.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const SlotGame = () => {
  const [result, setResult] = useState([]);
  const [coinsWon, setCoinsWon] = useState(0);
  const [userCoins, setUserCoins] = useState(20);



  // We send request to endpoint after button click. We update the states according to the incoming response.
  const spinSlotGame = () => {
    // As we send requests from 5000 ports to 3000 ports
    instance
      .post("/spin")
      .then((response) => {
        setResult(response.data.result);
        setCoinsWon(response.data.coinsWon);
        setUserCoins(response.data.userCoins);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Navbar />
      <div className="slotGame">
        <div className="slot">
          <div className="item">{result[0]}</div>
          <div className="item">{result[1]}</div>
          <div className="item">{result[2]}</div>
        </div>
        <div className="slotAction">
          <button onClick={spinSlotGame}>Spin</button>
          <div className="coinInfo">
            <p>Coins Won: {coinsWon}</p>
            <p>User Coins: {userCoins}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SlotGame;
