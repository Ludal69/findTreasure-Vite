import React from "react";
import { Button } from "@mui/material";
import { EmojiEvents } from "@mui/icons-material"; // Icône de trésor

interface CellProps {
  row: number;
  col: number;
  onClick: () => void;
  isTreasure: boolean;
}

const Cell: React.FC<CellProps> = ({ onClick, isTreasure }) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      disabled={isTreasure} // Désactiver la cellule si c'est le trésor
      sx={{
        width: 50,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "0.8rem",
        fontWeight: "bold",
        color: "#333",
        border: "1px solid #ccc",
        backgroundColor: isTreasure ? "#ffeb3b" : "inherit", // Couleur spéciale pour le trésor
        ":hover": {
          backgroundColor: "#e0e0e0",
        },
      }}
    >
      {isTreasure ? <EmojiEvents color="primary" /> : ``}
    </Button>
  );
};

export default Cell;
