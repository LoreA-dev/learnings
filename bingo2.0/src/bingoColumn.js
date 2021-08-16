import React from "react";

function BingoColumn(props) {
  return (
    <div className="bingoColumn" style={{ fontSize: "3rem" }}>
      <span style={{color: props.color, fontSize: '3rem', background: props.background, borderBlockEnd: '2px black solid'}} >{props.name}</span>
      {props.items
        ? props.items.map((item) => (
            <div style={{ borderBlockEnd: "2px solid" }}>{item}</div>
          ))
        : null}
    </div>
  );
}

export default BingoColumn;
