import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const initialCells = Array(9).fill(null);
const checkWinArr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const Board = () => {
  const [isXTurn, setIsXTurn] = useState(true);
  const [cells, setCells] = useState(initialCells);
  const [win, setWin] = useState(null);

  useEffect(() => {
    cells && checkWin();
  }, [cells]);

  useEffect(() => {
    if (win) {
      toast.success(`Winner ${win}`);
      resetGame();
    }
  }, [win]);

  const handleClick = (index) => {
    if (cells[index]) {
      return;
    }
    const cloneCells = [...cells]?.map((cell, i) => {
      if (i === parseInt(index)) {
        return isXTurn ? "X" : "O";
      } else {
        return cell;
      }
    });
    setCells(cloneCells);
    setIsXTurn(!isXTurn);
  };

  const checkWin = () => {
    checkWinArr.forEach((arr) => {
      if (
        cells[arr[0]] === cells[arr[1]] &&
        cells[arr[0]] === cells[arr[2]] &&
        cells[arr[0]] !== null
      ) {
        setWin(cells[arr[0]]);
        return;
      }
    });

    const filledCells = cells?.filter((cell) => cell);

    if (filledCells.length === 9 && !win) {
      toast.warning("Tie");
      resetGame();
    }
  };

  const resetGame = () => {
    setCells(initialCells);
    setWin(null);
  };

  return (
    <>
      <div className="wrapper">
        <h2 style={{ color: "green" }}>Tic Tac Toe</h2>
        <div className="container">
          {cells.map((cur, i) => {
            return (
              <button
                key={i}
                className="cell"
                onClick={() => handleClick(i)}
                style={{ color: cur == "X" ? "blue" : "green" }}
              >
                {cur}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Board;
