import HomeScreen from "./screens/HomeScreen";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <HomeScreen />
    </Box>
  );
}

export default App;
