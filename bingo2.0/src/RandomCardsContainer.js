import React from "react";
import Helper from "./helpers/helper";
import BingoCard from "./bingoContainer";
const RandomCardsContainer = () => {
  const allPosibilities = {
    B: Helper.getPossibleValues("B"),
    I: Helper.getPossibleValues("I"),
    N: Helper.getPossibleValues("N"),
    G: Helper.getPossibleValues("G"),
    O: Helper.getPossibleValues("O"),
  };
  const inputNumberCard = React.useRef();
  const [cardNumber, setCardNumber] = React.useState(null);
  const [currentCards, setCurrentCards] = React.useState([]);

  // Usefull functions
  const setCardNumberInput = (evt) => {
    const value = inputNumberCard.current.value;
    //this just create the # of cards requested
    const newCards = [];
    Helper.countFromToArray(0, value).forEach((item) => {
        const randomCard = generateRandomCards();
        newCards.push(randomCard);
    });
    setCardNumber(value);
    setCurrentCards(newCards);
  };

  const generateRandomCards = () => {
    const posibilities = {
      B: Helper.suffleArray([...allPosibilities.B]),
      I: Helper.suffleArray([...allPosibilities.I]),
      N: Helper.suffleArray([...allPosibilities.N]),
      G: Helper.suffleArray([...allPosibilities.G]),
      O: Helper.suffleArray([...allPosibilities.O]),
    };

    return {
      B: posibilities.B.splice(0, 5),
      I: posibilities.I.splice(0, 5),
      N: posibilities.N.splice(0, 5),
      G: posibilities.G.splice(0, 5),
      O: posibilities.O.splice(0, 5),
    };
  };
  console.log(currentCards);
  return (
    <div className="fullBingoContainer" style={{ flexDirection: "column" }}>
      <div
        className="cards-information"
        style={{ width: "50%", margin: "0px auto" }}
      >
        {!cardNumber ? (
          <>
            <p>Numero de cards</p>
            <input
              ref={inputNumberCard}
              type="text"
              name=""
              id=""
              placeholder="#"
            />
            <button onClick={setCardNumberInput}>Generar</button>
          </>
        ) : (
          <p style={{ fontSize: "2rem" }}>Total Cards: {cardNumber}</p>
        )}
      </div>
      {currentCards.map((dataOfCards) => {
        return (
          <div className="cards">
            <div className="bingoCardContainer" style={{ height: "400px" }}>
              <BingoCard interactive={true} data={dataOfCards} size="medium" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RandomCardsContainer;
