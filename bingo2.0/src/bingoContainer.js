import React from 'react';
import BingoColumn from './bingoColumn';

function BingoContainer(props){
    return(
        <div className="fullBingoContainer">
           <BingoColumn name="B" color={props.configs.B.color} background={props.configs.B.background} items={ props.data.B }/>
           <BingoColumn name="I" color={props.configs.I.color} background={props.configs.I.background} items={ props.data.I }/>
           <BingoColumn name="N" color={props.configs.N.color} background={props.configs.N.background} items={ props.data.N }/>
           <BingoColumn name="G" color={props.configs.G.color} background={props.configs.G.background} items={ props.data.G }/>
           <BingoColumn name="O" color={props.configs.O.color} background={props.configs.O.background} items={ props.data.O }/>
        </div>
    )
}

export default BingoContainer;