import React from "react";
import BingoColumn from "./bingoColumn";

function BingoContainer(props) {
    const size = props.size === 'medium' ? 'scale(0.6)' : '' 
    const [clickedNumbers, setClickedNumbers] = React.useState([])
    const newClickedNumber = (number)=>{
        const newClickedArray = [...clickedNumbers]
        if(newClickedArray.includes(number)){
            const index = newClickedArray.indexOf(number)
            newClickedArray.splice(index, 1)
        }else{
            newClickedArray.push(number)
        }
        setClickedNumbers(newClickedArray)
    }
  return (
    <div className="fullBingoContainer" style={{transform: size}}>
      <BingoColumn
        name="B"
        color={props.configs && props.configs.B.color}
        background={props.configs && props.configs.B.background}
        items={props.data.B}
        interactive={props.interactive}
        clickedNumbers={clickedNumbers}
        newClickedNumber={newClickedNumber}
      />
      <BingoColumn
        name="I"
        color={props.configs && props.configs.I.color}
        background={props.configs && props.configs.I.background}
        items={props.data.I}
        interactive={props.interactive}
        clickedNumbers={clickedNumbers}
        newClickedNumber={newClickedNumber}
      />
      <BingoColumn
        name="N"
        color={props.configs && props.configs.N.color}
        background={props.configs && props.configs.N.background}
        items={props.data.N}
        interactive={props.interactive}
        clickedNumbers={clickedNumbers}
        newClickedNumber={newClickedNumber}
      />
      <BingoColumn
        name="G"
        color={props.configs && props.configs.G.color}
        background={props.configs && props.configs.G.background}
        items={props.data.G}
        interactive={props.interactive}
        clickedNumbers={clickedNumbers}
        newClickedNumber={newClickedNumber}
      />
      <BingoColumn
        name="O"
        color={props.configs && props.configs.O.color}
        background={props.configs && props.configs.O.background}
        items={props.data.O}
        interactive={props.interactive}
        clickedNumbers={clickedNumbers}
        newClickedNumber={newClickedNumber}
      />
    </div>
  );
}

export default BingoContainer;
