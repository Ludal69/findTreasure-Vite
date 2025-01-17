import React from "react";
import Cell from "./Cell";
import { Box } from "@mui/material";

interface GridProps {
  rows: number;
  cols: number;
  onCellClick: (row: number, col: number) => void;
  treasurePosition: { row: number; col: number } | null;
  foundTreasure: boolean;
}

const Grid: React.FC<GridProps> = ({
  rows,
  cols,
  onCellClick,
  treasurePosition,
  foundTreasure,
}) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "fit-content",
        margin: "20px auto",
        padding: "10px",
        border: "2px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f4f4f4",
      }}
    >
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: cols }).map((_, col) => (
          <Cell
            key={`${row}-${col}`}
            row={row}
            col={col}
            onClick={() => onCellClick(row, col)}
            isTreasure={
              foundTreasure &&
              treasurePosition?.row === row &&
              treasurePosition?.col === col
            }
          />
        ))
      )}
    </Box>
  );
};

export default Grid;
