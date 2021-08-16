import React from "react";
import BingoContainer from "./bingoContainer";

function App() {
  const [letter, setLetter] = React.useState("H");
  const [number, setNumber] = React.useState("i!");
  const [randomInterval, setRandomInterval] = React.useState(null);
  const [repeatCounter, setRepeatCounter] = React.useState(1);
  const [randomResults, setRandomResults] = React.useState({
    B: [],
    I: [],
    N: [],
    G: [],
    O: [],
  });
  const bingoConfigs = {
    B: { limit: 15, color: "#e36954", background: '#e8e6e8' },
    I: { limit: 30, color: "#81e374", background: '#e8e6e8' },
    N: { limit: 45, color: "#7476e3", background: '#e8e6e8' },
    G: { limit: 60, color: "#e3df74", background: '#e8e6e8' },
    O: { limit: 75, color: "#e374dc", background: '#e8e6e8' },
  };

  let BINGO = "BINGO".split("");

  // React.useEffect(()=>{
  //   if(!randomInterval){
  //     start()
  //   }
  // }, [])

  const start = () => {
    if (!randomInterval) {
      const resutl = setInterval(function () {
        random();
      }, 5000);
      setRandomInterval(resutl);
      return resutl;
    }
  };
  const talk = (text) =>{
    var msg = new SpeechSynthesisUtterance();
    msg.volume = 250
    msg.text = text
    window.speechSynthesis.speak(msg);
  }
  const stop = () => {
    if (randomInterval) {
      clearInterval(randomInterval);
      setRandomInterval(null);
    }
  };
  const countFromToArray = (start, end) =>{
    const result = []
    for (let index = start; index < end; index++) {
      result.push(index)      
    }
    return result
  }
  const random = () => {
    const random_letter = Math.floor(Math.random() * 5);
    const max = bingoConfigs[BINGO[random_letter]].limit + 1;
    const min = max - 15;
    const random_number = Math.floor(Math.random() * (max - min)) + min;
    //updating object
    let letter = BINGO[random_letter];
    if (!randomResults[letter].includes(random_number)) {
      setLetter(random_letter);
      setNumber(random_number);
      randomResults[letter].push(random_number);
      talk(letter + random_number)
    } else {
      setRepeatCounter(repeatCounter + 1)

      if(repeatCounter > 1){
        //checking inside of current status
        const start = bingoConfigs[letter].limit - 14,
              end = bingoConfigs[letter].limit + 1;
        const completeLetterNumberList = countFromToArray(start, end); 
        const onlyCurrentNumbers = randomResults[letter]
        const missingNumbers = completeLetterNumberList.filter((item)=>!onlyCurrentNumbers.includes(item))
        setLetter(random_letter)
        setNumber(missingNumbers[0]) 
        randomResults[letter].push(missingNumbers[0]);
        talk(letter + missingNumbers[0])
        setRepeatCounter(1)
        console.log({start, end, completeLetterNumberList, missingNumbers})
      }
      console.log("Repetido");
    }
    setRandomResults(randomResults);
  };

  // function sameNumberRandom(){
  //   if(randomResult[letter].length != 15){

  //   }
  // }
  const buttonPauseClass = randomInterval
    ? "buttons buttonPause"
    : "buttons buttonPlay";

  return (
    <div className="App">
      <div className="bingoHeader">
        <div className="buttonsContainer">
          <button className="buttons" onClick={random}>
            Click
          </button>
          <button
            className={buttonPauseClass}
            onClick={randomInterval ? stop : start}
          >
            {randomInterval ? "Pause" : "Play"}
          </button>
        </div>
        <div className="randomValue">
          <p className="letter" style={{color: BINGO[letter] && bingoConfigs[BINGO[letter]].color}}>
            {BINGO[letter] || letter}
          </p>
          <p className="number">{number}</p>
        </div>
      </div>
      <BingoContainer data={randomResults} configs={bingoConfigs} />
    </div>
  );
}

export default App;
