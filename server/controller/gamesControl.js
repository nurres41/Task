// Slot machine reels
const reel1 = ["cherry", "lemon", "apple", "lemon", "banana", "banana", "lemon", "lemon"];
const reel2 = ["lemon", "apple", "lemon", "lemon", "cherry", "apple", "banana", "lemon"];
const reel3 = ["lemon", "apple", "lemon", "apple", "cherry", "lemon", "banana", "lemon"];

// The user starts with 20 coins
let userCoins = 20;


// Function to spin the reels and get the results
function spinReels() {
  const result = [];
  result.push(getRandomItem(reel1));
  result.push(getRandomItem(reel2));
  result.push(getRandomItem(reel3));
  return result;
}

// Function to get a random item from an array
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Function to calculate the coins won based on the matching combinations
function calculateCoinsWon(result) {
  let coinsWon = 0;

  // Check for 3 cherries in a row
  if (
    result[0] === "cherry" &&
    result[1] === "cherry" &&
    result[2] === "cherry"
  ) {
    coinsWon += 50;
  }
  // Check for 2 cherries in a row
  else if (result[0] === "cherry" && result[1] === "cherry") {
    coinsWon += 40;
  }
  // Check for 3 apples in a row
  else if (
    result[0] === "apple" &&
    result[1] === "apple" &&
    result[2] === "apple"
  ) {
    coinsWon += 20;
  }
  // Check for 2 apples in a row
  else if (result[0] === "apple" && result[1] === "apple") {
    coinsWon += 10;
  }
  // Check for 3 bananas in a row
  else if (
    result[0] === "banana" &&
    result[1] === "banana" &&
    result[2] === "banana"
  ) {
    coinsWon += 15;
  }
  // Check for 2 bananas in a row
  else if (result[0] === "banana" && result[1] === "banana") {
    coinsWon += 5;
  }
  // Check for 3 lemons in a row
  else if (
    result[0] === "lemon" &&
    result[1] === "lemon" &&
    result[2] === "lemon"
  ) {
    coinsWon += 3;
  }

  return coinsWon;
}


const getGames = (req,res) => {
        // Check if the user has enough coins to spin
        if (userCoins >= 1) {
            userCoins--;
        
            // Spin the reels and get the results
            const result = spinReels();
        
            // Calculate the coins won based on the matching combinations
            const coinsWon = calculateCoinsWon(result);
        
            // Update the user's coins based on the winnings
            if(coinsWon > 1) {
                userCoins += coinsWon;
            }
        
            // Prepare the response
            const response = {
              result: result,
              coinsWon: coinsWon,
              userCoins: userCoins
            };
        
            // Return the response to the frontend
            res.json(response);
          } else {
            // Return an error response if the user doesn't have enough coins
            res.status(400).json({ error: "Not enough coins to spin." });
          }
}

module.exports = {
    getGames, 
  };