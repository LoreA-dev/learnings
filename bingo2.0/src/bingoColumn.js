import React from "react";

function BingoColumn(props) {
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
        ? props.items.map((item, index) => (
            <button
              onClick={(evt) => {
                props.newClickedNumber(item);
              }}
              style={{
                borderBlockEnd: "2px solid",
                height: "40px",
                fontSize: "20px",
                backgroundColor: props.clickedNumbers && props.clickedNumbers.includes(item)
                  ? "red"
                  : "",
              }}
            >
              { props.name === 'N' && props.interactive &&  index === 2 ? "Flavio" : item}
            </button>
          ))
        : null}
    </div>
  );
}

export default BingoColumn;
