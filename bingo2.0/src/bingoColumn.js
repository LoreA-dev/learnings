import React from "react";

function BingoColumn(props) {
  function interativeButton(item, index) {
    return (
      <button className=""//Colocando clase para crear estilos en CSS
        onClick={(evt) => {
          props.newClickedNumber(item);
        }}
        style={{
          borderBlockEnd: "2px solid",
          height: "40px",
          fontSize: "20px",
          backgroundColor:
            props.clickedNumbers && props.clickedNumbers.includes(item)
              ? "#72cddb"
              : "",
        }}
      >
        {props.name === "N" && props.interactive && index === 2 ? "⭐" : item}
      </button>
    );
  }
  return (
    <div className="bingoColumn" style={{ fontSize: "3rem" }}>
      <span
        style={{
          color: props.color,
          fontSize: "3rem",
          background: props.background,
          borderBlockEnd: "2px black solid",
        }}
      >
        {props.name}
      </span>
      {props.items
        ? props.interactive
          ? props.items.map(interativeButton)
          : props.items.map(function (item) {
              return <div style={{ borderBlockEnd: "2px solid" }}>{item}</div>;
            })
        : null}
    </div>
  );
}

export default BingoColumn;
