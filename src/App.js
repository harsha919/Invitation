import './App.css';
// mui
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import useMediaQuery from "@mui/material/useMediaQuery";
// componets
import Contents from './Contents';
// assets
import flora from "./assets/flora.png";
// import borderPng from "./assets/border.png"

function App() {
  const isMobile = useMediaQuery("(max-width:600px)");
  
  return (
    <Paper
      elevation={10}
      sx={{
        maxWidth: "900px",
        margin: isMobile ? "50px 20px" : "auto",
        position: 'relative',
        mt: "50px",
        height: 'calc(100vh - 100px)',
        padding: "30px" 
      }}>

      <Box sx={{ maxWidth: "600px", margin: "auto", paddingTop: "4rem" }}>
        <Contents />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${flora})`
        }}
      >
      </Box>
    </Paper>
  );
}

export default App;
