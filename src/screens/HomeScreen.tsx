import { useState } from "react";
import Grid from "../components/Grid";
import { Box, Typography, Button } from "@mui/material";

type Position = {
  row: number;
  col: number;
};

const GRID_SIZE = { rows: 8, cols: 8 };

export default function HomeScreen() {
  const [treasurePosition, setTreasurePosition] = useState<Position | null>(
    null
  );
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState("");
  const [foundTreasure, setFoundTreasure] = useState(false);

  function handleCellClick(row: number, col: number) {
    setAttempts(attempts + 1);

    // Placer le trésor après le premier clic
    if (!treasurePosition) {
      const newTreasurePosition = {
        row: Math.floor(Math.random() * GRID_SIZE.rows),
        col: Math.floor(Math.random() * GRID_SIZE.cols),
      };
      setTreasurePosition(newTreasurePosition);

      // Calculer la distance au trésor
      const distance =
        Math.abs(row - newTreasurePosition.row) +
        Math.abs(col - newTreasurePosition.col);
      setMessage(
        `Le trésor a été placé. Indice : Le trésor est à ${distance} cases.`
      );
      return;
    }

    // Vérifier si le trésor est trouvé
    if (row === treasurePosition.row && col === treasurePosition.col) {
      setMessage("🎉 Trésor trouvé !");
      setFoundTreasure(true);
    } else {
      const distance =
        Math.abs(row - treasurePosition.row) +
        Math.abs(col - treasurePosition.col);
      setMessage(`Indice : Le trésor est à ${distance} cases.`);
    }
  }

  function resetGame() {
    setTreasurePosition(null);
    setAttempts(0);
    setMessage("");
    setFoundTreasure(false);
  }

  return (
    <Box sx={{ textAlign: "center", padding: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Chasse au Trésor
      </Typography>
      <Grid
        rows={GRID_SIZE.rows}
        cols={GRID_SIZE.cols}
        onCellClick={handleCellClick}
        treasurePosition={treasurePosition}
        foundTreasure={foundTreasure}
      />
      <Typography variant="body1" color="text.secondary" sx={{ marginTop: 2 }}>
        {message}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Essais : {attempts}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
        onClick={resetGame}
      >
        Réinitialiser
      </Button>
    </Box>
  );
}
